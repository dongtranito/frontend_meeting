import React from "react";

const SummaryReport = ({data}) => {

  return (
    <div className="max-w-4xl mx-auto p-6  space-y-8 font-sans ">
      
      <h1 className="text-2xl font-bold text-gray-800">Tóm Tắt Cuộc Họp</h1>

      {/* Tổng kết chung */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-blue-700 border-l-4 border-blue-500 pl-3">
          Tổng Kết Chung
        </h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </section>

      {/* Điểm nổi bật */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-green-700 border-l-4 border-green-500 pl-3">
          🔥 Điểm Nổi Bật
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {data.highlights.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl p-4 bg-green-50 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-green-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insight sâu */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-purple-700 border-l-4 border-purple-500 pl-3">
          💡 Nhận Định Sâu
        </h2>
        <div className="space-y-4">
          {data.insights.map((item, index) => (
            <div
              key={index}
              className="border border-purple-200 rounded-xl p-4 bg-purple-50 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-purple-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SummaryReport;
