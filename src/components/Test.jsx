import React, { useRef, useState } from 'react';
import generatePDF from 'react-to-pdf';

export default function Appa() {

    const aString= ```
  "sections": [
    {
      "bullets": [
        {
          "text": "Phòng Marketing đã chi tiêu vượt dự toán 8% do đầu tư cho Facebook Ads và Google Ads.",
          "time": "00:10"
        },
        {
          "text": "Doanh thu đạt 1,2 tỷ đồng, tăng 15% so với quý trước.",
          "time": "00:25"
        },
        {
          "text": "Chi phí vận hành tăng nhẹ khoảng 5% do điều chỉnh lương nhân sự.",
          "time": "00:40"
        },
        {
          "text": "Lợi nhuận gộp đạt 400 triệu, thấp hơn kỳ vọng 10%.",
          "time": "00:55"
        },
        {
          "text": "Phòng Kế toán báo cáo thời gian nợ nhà cung cấp giảm 30 ngày so với trước.",
          "time": "01:55"
        },
        {
          "text": "Quỹ dự phòng hiện còn 500 triệu, đủ để chi trả trong 2 tháng.",
          "time": "02:10"
        }
      ],
      "title": "Tình hình tài chính Quý 2"
    },
    {
      "bullets": [
        {
          "text": "Phòng Kế toán đề xuất tối ưu lại chi phí quảng cáo và kiểm soát tốt chi phí nhân sự.",   
          "time": "01:10"
        },
        {
          "text": "Bên đầu tư đề nghị phân bổ thêm ngân sách 20% cho kênh TikTok và SEO.",
          "time": "01:25"
        },
        {
          "text": "Phòng Kỹ thuật cần 200 triệu để nâng cấp server, tránh downtime trong mùa sale.",        
          "time": "01:40"
        },
        {
          "text": "Ban lãnh đạo yêu cầu xây dựng kế hoạch tăng doanh thu thêm 20% trong quý 3.",
          "time": "02:25"
        },
        {
          "text": "Phòng Marketing cần phối hợp với kho để đảm bảo hàng tồn đủ cho khuyến mãi.",
          "time": "02:55"
        },
        {
          "text": "Phòng Kỹ thuật yêu cầu 1 tuần downtime để hoàn thiện nâng cấp server.",
          "time": "03:10"
        },
        {
          "text": "Quản lý rủi ro cần có backup hệ thống khi triển khai downtime.",
          "time": "03:25"
        },
        {
          "text": "Phòng Pháp lý đề nghị rà soát lại điều kiện chạy khuyến mãi để không vi phạm hợp đồng.", 
          "time": "03:40"
        },
        {
          "text": "Kế toán sẽ theo dõi sát ngân sách khuyến mãi.",
          "time": "03:55"
        }
      ],
      "title": "Đề xuất và Kế hoạch cho Quý 3"
    },
    {
      "bullets": [
        {
          "text": "Ban lãnh đạo đề xuất tổ chức cuộc họp cập nhật đầu tháng 8 sau khi có số liệu.",
          "time": "04:10"
        }
      ],
      "title": "Hành động tiếp theo"
    }
  ]
}
```

  
  const [text, setText] = useState(a);
  const previewRef = useRef();

  return (
    <div>
      <h2>Chỉnh sửa nội dung JSON</h2>
      <textarea
        rows={10}
        style={{ width: '100%', fontFamily: 'monospace' }}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div ref={previewRef} style={{
        margin: '20px 0', padding: '10px', border: '1px solid #ccc'
      }}>
        <h3>Preview: JSON → PDF</h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {text}
        </pre>
      </div>
      <button onClick={() => generatePDF(previewRef, { filename: 'report.pdf' })}>
        Xuất PDF
      </button>
    </div>
  );
}
