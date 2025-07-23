import React, { useState } from "react";
import SpeechToText from "./SpeechToText";
import SummaryReport from "./SummaryReport";
import MeetingMinutes from "./MeetingMinutes";
import Chat from "./Chat";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import { useParams } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("summary"); // "summary" hoặc "pdf"
  const [processedTranscript, setProcessedTranscript] = useState(null);
  

  const handleTranscriptProcessed = (dataFromBackend) => {
    setProcessedTranscript(dataFromBackend); // backend trả về JSON gì thì giữ ở đây 
  };

  return (
    <div className=" bg-blue-100 py-1 px-2 pt-1 h-[calc(100vh-48px)] flex gap-1 ">
      {/* BÊN TRÁI */}
      <div className="w-1/2 rounded bg-white shadow-lg flex flex-col">
        <SpeechToText onTranscriptProcessed={handleTranscriptProcessed} />
      </div>

      {/* BÊN PHẢI */}
      <div className="w-1/2 rounded bg-white shadow-lg flex flex-col">

        <div className="flex justify-between items-center px-7 py-2 bg-[#f5f6f8] border-b rounded-t-md">
          {/* Tabs bên trái */}
          {/* <button className="flex items-center gap-1 bg-[#7c3aed] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#6d28d9] transition"
            onClick={handleSaveMeeting}
          >
            Lưu cuộc họp
          </button> */}

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-4 py-2 rounded-md font-medium text-sm transition duration-150 ${activeTab === "summary"
                ? "bg-[#2563eb] text-white"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                }`}
            >
              📋 Summary
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`px-4 py-2 rounded-md font-medium text-sm transition duration-150 ${activeTab === "pdf"
                ? "bg-[#2563eb] text-white"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                }`}
            >
              📄 PDF Report
            </button>
          </div>


          {/* Nút bên phải - chỉ hiện khi activeTab là "pdf" */}
          {/* {activeTab === "pdf" && (
            <div className="flex gap-2 items-center">
              <button className="flex items-center gap-1 bg-[#7c3aed] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#6d28d9] transition">
                🔁 Regenerate
              </button>
              <button className="flex items-center gap-1 bg-white text-gray-700 border border-gray-300 px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition">
                ⬇️ Download
              </button>

            </div>
          )} */}
        </div>



        {/* Hiển thị component tương ứng */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "summary" ? (
            processedTranscript?.summaryData ? (
              <SummaryReport data={processedTranscript.summaryData} />
            ) : (
              <div className="text-center p-4 text-gray-500"> Chưa có dữ liệu tóm tắt.</div>
            )
          ) : (
            processedTranscript?.bienBanData ? (
              <MeetingMinutes
                data={processedTranscript.bienBanData}
              />
            ) : (
              <div className="text-center p-4 text-gray-500"> Chưa có dữ liệu biên bản.</div>
            )
          )}
        </div>


      </div>
    </div>
  );
};

export default Home;
