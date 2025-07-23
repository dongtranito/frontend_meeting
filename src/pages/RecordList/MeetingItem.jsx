// src/components/MeetingItem.jsx
import { CalendarDays, Clock, Eye } from "lucide-react";
import { format } from "date-fns";

const MeetingItem = ({ meeting, onViewDetail }) => {
    return (
        <li className="bg-white rounded-2xl p-4 border border-gray-100 shadow hover:shadow-lg transition-all"
            onClick={() => onViewDetail(meeting.id)}
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-blue-700 truncate max-w-[75%]">
                    {meeting.title}
                </h3>
                {/* <button
                    onClick={() => alert("xóa")}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                    Xóa
                </button> */}
            </div>

            <div className="text-sm text-gray-600 flex gap-4">
                <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {format(new Date(meeting.createdAt), "dd/MM/yyyy")}
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {format(new Date(meeting.updatedAt), "HH:mm dd/MM")}
                </div>
            </div>
        </li>
    );
};

export default MeetingItem;
