import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import MeetingItem from "./MeetingItem";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetchWithAuth("http://localhost:3001/getMeetingList");
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
            <MeetingItem key={meeting.id} meeting={meeting} onViewDetail={handleViewDetail} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MeetingList;
