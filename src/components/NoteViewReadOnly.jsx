import React from 'react';

export default function NoteViewReadOnly() {
      const data = {
    sections: [
      {
        title: "Tình hình tài chính Quý 2",
        bullets: [
          { time: "00:10", text: "Phòng Marketing đã chi tiêu vượt dự toán 8% do đầu tư cho Facebook Ads và Google Ads." },
          { time: "00:25", text: "Doanh thu đạt 1,2 tỷ đồng, tăng 15% so với quý trước." },
          { time: "00:40", text: "Chi phí vận hành tăng nhẹ khoảng 5% do điều chỉnh lương nhân sự." },
          { time: "00:55", text: "Lợi nhuận gộp đạt 400 triệu, thấp hơn kỳ vọng 10%." },
          { time: "01:10", text: "Phòng Kế toán đề xuất tối ưu lại chi phí quảng cáo và kiểm soát tốt chi phí nhân sự." },
          { time: "01:55", text: "Phòng Kế toán báo cáo thời gian nợ nhà cung cấp giảm 30 ngày so với trước." },
          { time: "02:10", text: "Quỹ dự phòng hiện còn 500 triệu, đủ để chi trả trong 2 tháng." }
        ]
      },
      {
        title: "Kế hoạch và Đề xuất cho Quý 3",
        bullets: [
          { time: "01:25", text: "Bên đầu tư đề nghị phân bổ thêm ngân sách 20% cho kênh TikTok và SEO." },
          { time: "01:40", text: "Phòng Kỹ thuật cần 200 triệu để nâng cấp server, tránh downtime trong mùa sale." },
          { time: "02:25", text: "Cần xây dựng kế hoạch tăng doanh thu thêm 20% trong quý 3." },
          { time: "02:40", text: "Đề xuất tổ chức một đợt khuyến mãi lớn vào tháng 8, giảm giá 10% toàn site." },
          { time: "02:55", text: "Phòng Marketing cần phối hợp với kho để đảm bảo hàng tồn đủ." },
          { time: "03:10", text: "Phòng Kỹ thuật yêu cầu 1 tuần downtime để hoàn thiện nâng cấp server." },
          { time: "03:25", text: "Cần có backup hệ thống khi triển khai downtime." },
          { time: "03:40", text: "Phòng Pháp lý đề nghị rà soát lại điều kiện chạy khuyến mãi để không vi phạm hợp đồng." },
          { time: "03:55", text: "Kế toán sẽ theo dõi sát ngân sách khuyến mãi." }
        ]
      },
      {
        title: "Các bước tiếp theo",
        bullets: [
          { time: "04:10", text: "Đề xuất tổ chức cuộc họp cập nhật đầu tháng 8 sau khi có số liệu." }
        ]
      }
    ]
  };
  return (
    <div style={{
      fontFamily: 'sans-serif',
      maxWidth: 800,
      margin: 'auto',
      padding: 20,
      backgroundColor: '#f7f7f7',
      borderRadius: 8
    }}>
      {data.sections.map((section, si) => (
        <div key={si} style={{ marginBottom: '1.5em' }}>
          <h3 style={{
            borderBottom: '2px solid #ddd',
            paddingBottom: 6,
            marginBottom: 12,
            color: '#333'
          }}>
            {section.title}
          </h3>
          {section.bullets.map((b, bi) => (
            <div key={bi} style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: 8
            }}>
              <div style={{
                width: 60,
                color: '#555',
                fontSize: '0.9em',
                marginRight: 12
              }}>
                [{b.time}]
              </div>
              <div style={{
                flex: 1,
                fontSize: '1em',
                color: '#222',
                lineHeight: 1.4
              }}>
                {b.text}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
