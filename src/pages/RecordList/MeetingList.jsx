import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import MeetingItem from "./MeetingItem";
const API_URL = import.meta.env.VITE_API_URL;

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetchWithAuth(`${API_URL}/getMeetingList`);
        if (!response.ok) throw new Error("Không thể lấy dữ liệu");
        const data = await response.json();
        setMeetings(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const handleViewDetail = (id) => {
    navigate(`/meeting/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetchWithAuth(`${API_URL}/deleteMeeting/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Xoá thất bại");
      }
      setMeetings((prev) => prev.filter((meeting) => meeting.id !== id));

      console.log("Đã xoá meeting", id);
    } catch (err) {
      console.error("Lỗi khi xoá:", err);
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📋 Danh sách cuộc họp</h2>

      {loading && <p className="text-gray-500">Đang tải...</p>}
      {error && <p className="text-red-500">❌ {error}</p>}
      {!loading && !error && meetings.length === 0 && (
        <p className="text-gray-500 italic">Không có cuộc họp nào.</p>
      )}

      {!loading && !error && meetings.length > 0 && (
        <ul className="grid gap-4">
          {meetings.map((meeting) => (
            <MeetingItem key={meeting.id} meeting={meeting} onViewDetail={handleViewDetail} onDelete={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MeetingList;
