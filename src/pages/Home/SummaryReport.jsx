import React from "react";

const SummaryReport = ({data}) => {

//   const data=
// {
//   "highlights": [
//     {
//       "text": "Sản phẩm mới là mẫu tai nghe không dây thế hệ mới với chip xử lý cải tiến, đã hoàn tất nguyên mẫu và đang thử nghiệm nội bộ.",
//       "title": "Sản phẩm mới"
//     },
//     {
//       "text": "Chiến dịch marketing 'Nghe không giới hạn' dự kiến bắt đầu từ tuần thứ 3 tháng 9 với ngân sách 1,2 tỷ đồng trên nhiều kênh.",
//       "title": "Chiến dịch Marketing"
//     },
//     {
//       "text": "Sản xuất hàng loạt dự kiến vào đầu tháng 9 và sản phẩm sẽ ra mắt chính thức vào ngày 25/9 sau khi hoàn tất kiểm định chất lượng và tổng duyệt hệ thống.",
//       "title": "Lộ trình ra mắt"
//     },
//     {
//       "text": "Bộ phận CSKH đã lên kế hoạch đào tạo nhân viên, trực 24/7 trong tuần đầu ra mắt và cập nhật chatbot để hỗ trợ khách hàng kịp thời.",
//       "title": "Hỗ trợ khách hàng"
//     },
//     {
//       "text": "Các bộ phận cần hoàn tất hạng mục trước ngày 20/9 để tổng duyệt toàn hệ thống vào ngày 21/9, đảm bảo sự phối hợp nhịp nhàng.",
//       "title": "Kiểm tra hệ thống"
//     }
//   ],
//   "insights": [
//     {
//       "text": "Kế hoạch ra mắt sản phẩm được chuẩn bị một cách toàn diện, từ nghiên cứu phát triển, sản xuất, marketing, logistics đến hỗ trợ khách hàng và pháp lý. Điều này thể hiện sự tỉ mỉ và chủ động của công ty trong việc kiểm soát mọi khía cạnh để đảm bảo một quá trình ra mắt thuận lợi và giảm thiểu rủi ro, cho thấy một chiến lược tổng thể được phối hợp chặt chẽ.",
//       "title": "Sự chuẩn bị toàn diện"
//     },
//     {
//       "text": "Việc đề xuất ngân sách marketing 1,2 tỷ đồng và kế hoạch theo dõi chi phí chặt chẽ, cùng với việc nâng cấp hệ thống IT để xử lý lượng truy cập lớn, cho thấy công ty sẵn sàng đầu tư mạnh mẽ để tạo ra hiệu ứng lớn. Điều này phản ánh niềm tin vào tiềm năng của sản phẩm và quyết tâm chiếm lĩnh thị phần, cũng như sự nhận thức về tầm quan trọng của việc quản lý tài chính hiệu quả trong chiến dịch quy mô lớn.",
//       "title": "Đầu tư chiến lược và quản lý tài chính"
//     },
//     {
//       "text": "Kế hoạch không chỉ tập trung vào việc ra mắt mà còn nhấn mạnh giai đoạn hậu ra mắt như đánh giá hiệu quả, thu thập phản hồi người dùng, và theo dõi đối thủ. Việc thành lập team chuyên trách theo dõi mạng xã hội và xử lý khủng hoảng truyền thông cho thấy sự chủ động trong việc lắng nghe thị trường và khả năng điều chỉnh linh hoạt, điều này khẳng định tầm nhìn dài hạn và cam kết vào việc cải tiến sản phẩm và dịch vụ liên tục.",
//       "title": "Tầm nhìn dài hạn và quản lý phản hồi"
//     }
//   ],
//   "summary": "Cuộc họp tập trung vào kế hoạch ra mắt sản phẩm tai nghe không dây thế hệ mới trong quý 4, với mục tiêu chính thức ra mắt vào ngày 25/9. Các bộ phận liên quan đã trình bày chi tiết lộ trình từ giai đoạn R&D, sản xuất hàng loạt vào đầu tháng 9, đến chiến dịch marketing 'Nghe không giới hạn' bắt đầu từ tuần thứ 3 tháng 9 với ngân sách 1,2 tỷ đồng. Cuộc họp cũng bao gồm các kế hoạch về logistics, hỗ trợ khách hàng (CSKH trực 24/7, đào tạo nhân viên), đảm bảo pháp lý và chuẩn bị hạ tầng IT để đối phó với lượng truy cập lớn. Các bên cần hoàn tất công việc trước ngày 20/9 để tổng duyệt hệ thống vào 21/9, sau đó sẽ là giai đoạn đánh giá hiệu quả và thu thập phản hồi từ khách hàng để cải tiến sản phẩm và chiến lược."
// }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-lg space-y-8 font-sans">
      
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
