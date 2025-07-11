import React from "react";

const ReportSummary = () => {
  // Dữ liệu lấy từ backend (gắn cứng)
  // const data = {
  //   "highlights": [
  //     {
  //       "text": "Nhóm A đã vượt 105% KPI và được đề xuất khen thưởng bằng bonus 1 triệu/người.",
  //       "title": "Nhóm A Vượt KPI"
  //     },
  //           {
  //       "text": "Nhóm A đã vượt 105% KPI và được đề xuất khen thưởng bằng bonus 1 triệu/người.",
  //       "title": "Nhóm A Vượt KPI"
  //     },
  //           {
  //       "text": "Nhóm A đã vượt 105% KPI và được đề xuất khen thưởng bằng bonus 1 triệu/người.",
  //       "title": "Nhóm A Vượt KPI"
  //     },
  //     {
  //       "text": "Nhóm B chỉ đạt 87% KPI và có 3 nhân viên xin nghỉ việc, trong khi nhóm C tiềm năng nhưng chưa chủ động chốt đơn online.",
  //       "title": "Hiệu suất Nhóm B & C Thấp"
  //     },
  //     {
  //       "text": "Công cụ hỗ trợ bán hàng hiện tại bị phản ánh là khó dùng và cần rà soát lại.",
  //       "title": "Công Cụ Bán Hàng Lỗi Thời"
  //     },
  //     {
  //       "text": "Thời gian phản hồi khách hàng trung bình còn chậm 5 tiếng, vượt quá quy định 2 giờ.",
  //       "title": "Phản Hồi Khách Hàng Chậm"
  //     }
  //   ],
  //   "insights": [
  //     {
  //       "text": "Hiệu suất thấp và việc nhân viên nghỉ việc của nhóm B cho thấy những vấn đề sâu xa hơn về động lực hoặc áp lực công việc. Cần phân tích kỹ lưỡng nguyên nhân gốc rễ để cải thiện môi trường làm việc và giữ chân nhân tài, tránh ảnh hưởng tiêu cực đến hiệu suất tổng thể.",
  //       "title": "Mối Liên Hệ Giữa Hiệu Suất & Nhân Sự"
  //     },
  //     {
  //       "text": "Việc đề xuất khóa đào tạo và rà soát công cụ bán hàng là những bước đi chiến lược để nâng cao năng lực và hiệu quả làm việc. Tuy nhiên, cần đảm bảo nội dung đào tạo sát với nhu cầu thực tế và việc cải thiện công cụ phải dựa trên phản hồi của người dùng để đạt được tác động tối đa.",
  //       "title": "Đầu Tư Vào Đào Tạo & Công Cụ"
  //     },
  //     {
  //       "text": "Vấn đề thời gian phản hồi khách hàng chậm là một rủi ro lớn đối với trải nghiệm khách hàng và có thể ảnh hưởng trực tiếp đến doanh số. Ngoài việc nhắc nhở, cần xem xét các giải pháp hệ thống như tối ưu quy trình hoặc bổ sung nhân sự để đảm bảo tuân thủ quy định và nâng cao chất lượng dịch vụ.",
  //       "title": "Tầm Quan Trọng Của Phản Hồi Khách Hàng"
  //     }
  //   ],
  //   "summary": "Cuộc họp tập trung đánh giá hiệu suất của nhóm bán hàng quý vừa rồi. Nhóm A đạt 105% KPI, trong khi nhóm B chỉ đạt 87% và có 3 nhân viên nghỉ việc, nhóm C chưa tận dụng tốt kênh online. Các vấn đề được chỉ ra bao gồm công cụ hỗ trợ bán hàng khó dùng và thời gian phản hồi khách hàng chậm. Các giải pháp đề xuất bao gồm khen thưởng nhóm A, đào tạo kỹ năng chốt sale online cho nhóm B và C, rà soát công cụ, và bổ sung nhân sự cho nhóm B. Kế hoạch đào tạo sẽ triển khai từ ngày 10 tháng sau và hiệu quả sẽ được theo dõi sát sao."
  // };


  const data=
{
  "highlights": [
    {
      "text": "Sản phẩm mới là mẫu tai nghe không dây thế hệ mới với chip xử lý cải tiến, đã hoàn tất nguyên mẫu và đang thử nghiệm nội bộ.",
      "title": "Sản phẩm mới"
    },
    {
      "text": "Chiến dịch marketing 'Nghe không giới hạn' dự kiến bắt đầu từ tuần thứ 3 tháng 9 với ngân sách 1,2 tỷ đồng trên nhiều kênh.",
      "title": "Chiến dịch Marketing"
    },
    {
      "text": "Sản xuất hàng loạt dự kiến vào đầu tháng 9 và sản phẩm sẽ ra mắt chính thức vào ngày 25/9 sau khi hoàn tất kiểm định chất lượng và tổng duyệt hệ thống.",
      "title": "Lộ trình ra mắt"
    },
    {
      "text": "Bộ phận CSKH đã lên kế hoạch đào tạo nhân viên, trực 24/7 trong tuần đầu ra mắt và cập nhật chatbot để hỗ trợ khách hàng kịp thời.",
      "title": "Hỗ trợ khách hàng"
    },
    {
      "text": "Các bộ phận cần hoàn tất hạng mục trước ngày 20/9 để tổng duyệt toàn hệ thống vào ngày 21/9, đảm bảo sự phối hợp nhịp nhàng.",
      "title": "Kiểm tra hệ thống"
    }
  ],
  "insights": [
    {
      "text": "Kế hoạch ra mắt sản phẩm được chuẩn bị một cách toàn diện, từ nghiên cứu phát triển, sản xuất, marketing, logistics đến hỗ trợ khách hàng và pháp lý. Điều này thể hiện sự tỉ mỉ và chủ động của công ty trong việc kiểm soát mọi khía cạnh để đảm bảo một quá trình ra mắt thuận lợi và giảm thiểu rủi ro, cho thấy một chiến lược tổng thể được phối hợp chặt chẽ.",
      "title": "Sự chuẩn bị toàn diện"
    },
    {
      "text": "Việc đề xuất ngân sách marketing 1,2 tỷ đồng và kế hoạch theo dõi chi phí chặt chẽ, cùng với việc nâng cấp hệ thống IT để xử lý lượng truy cập lớn, cho thấy công ty sẵn sàng đầu tư mạnh mẽ để tạo ra hiệu ứng lớn. Điều này phản ánh niềm tin vào tiềm năng của sản phẩm và quyết tâm chiếm lĩnh thị phần, cũng như sự nhận thức về tầm quan trọng của việc quản lý tài chính hiệu quả trong chiến dịch quy mô lớn.",
      "title": "Đầu tư chiến lược và quản lý tài chính"
    },
    {
      "text": "Kế hoạch không chỉ tập trung vào việc ra mắt mà còn nhấn mạnh giai đoạn hậu ra mắt như đánh giá hiệu quả, thu thập phản hồi người dùng, và theo dõi đối thủ. Việc thành lập team chuyên trách theo dõi mạng xã hội và xử lý khủng hoảng truyền thông cho thấy sự chủ động trong việc lắng nghe thị trường và khả năng điều chỉnh linh hoạt, điều này khẳng định tầm nhìn dài hạn và cam kết vào việc cải tiến sản phẩm và dịch vụ liên tục.",
      "title": "Tầm nhìn dài hạn và quản lý phản hồi"
    }
  ],
  "summary": "Cuộc họp tập trung vào kế hoạch ra mắt sản phẩm tai nghe không dây thế hệ mới trong quý 4, với mục tiêu chính thức ra mắt vào ngày 25/9. Các bộ phận liên quan đã trình bày chi tiết lộ trình từ giai đoạn R&D, sản xuất hàng loạt vào đầu tháng 9, đến chiến dịch marketing 'Nghe không giới hạn' bắt đầu từ tuần thứ 3 tháng 9 với ngân sách 1,2 tỷ đồng. Cuộc họp cũng bao gồm các kế hoạch về logistics, hỗ trợ khách hàng (CSKH trực 24/7, đào tạo nhân viên), đảm bảo pháp lý và chuẩn bị hạ tầng IT để đối phó với lượng truy cập lớn. Các bên cần hoàn tất công việc trước ngày 20/9 để tổng duyệt hệ thống vào 21/9, sau đó sẽ là giai đoạn đánh giá hiệu quả và thu thập phản hồi từ khách hàng để cải tiến sản phẩm và chiến lược."
}

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-8 font-sans">
      <h1 className="text-2xl font-bold text-gray-800">📄 Biên Bản Cuộc Họp</h1>

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

export default ReportSummary;
