import React from 'react';

const MeetingMinutes = () => {

  const data ={
  "chu_tri": {
    "cv": "Trưởng bộ phận Kỹ thuật",
    "ten": "Anh Quang"
  },
  "co_quan": "Cơ quan tổ chức###",
  "dia_diem": "Địa điểm họp###",
  "gio": "Thời gian bắt đầu họp###",
  "gio_ket_thuc": "Thời gian kết thúc họp###",
  "ket_luan": [
    "Hệ thống gặp downtime từ 3h sáng do lỗi memory leak trong backend mới, đã rollback phiên bản về bản cũ và đang theo dõi ổn định.",       
    "Truyền thông sẽ gửi email xin lỗi khách hàng và cập nhật tình hình liên tục.",
    "Thiết lập hệ thống log chi tiết để kiểm tra nguyên nhân sâu hơn.",
    "Dự kiến sẽ deploy lại phiên bản đã fix lỗi vào sáng mai.",
    "Gửi mã giảm giá 15% cho khách hàng bị ảnh hưởng nặng.",
    "Đội CSKH đã sẵn sàng phản hồi tự động qua chatbot và email.",
    "Review toàn bộ quy trình release và kiểm thử trước khi đẩy bản mới.",
    "Tổ chức cuộc họp kỹ thuật chuyên sâu vào chiều nay để thảo luận chi tiết hơn.",
    "Lên danh sách các microservice dễ gây lỗi nhất để audit lại trong tuần này.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống.",
    "Ưu tiên khôi phục ổn định hệ thống."
  ],
  "ngay": "Ngày họp###",
  "noi_dung": "Thảo luận về tình trạng downtime hệ thống do lỗi memory leak, các biện pháp khắc phục, thông báo cho khách hàng và kế hoạch ngăn ngừa sự cố tương tự trong tương lai.",
  "so": "Số biên bản###",
  "ten_cuoc_hop": "Cuộc họp khẩn xử lý sự cố downtime hệ thống",
  "thanh_phan": [
    {
      "cv": "Trưởng bộ phận Kỹ thuật",
      "ten": "Anh Quang"
    },
    {
      "cv": "Kỹ sư Phát triển Backend",
      "ten": "Chị Hạnh"
    },
    {
      "cv": "Kỹ sư Hạ tầng",
      "ten": "Anh Lâm"
    },
    {
      "cv": "Trưởng phòng Chăm sóc khách hàng",
      "ten": "Chị Mai"
    }
  ],
  "thu_ky": {
    "cv": "Chức vụ thư ký###",
    "ten": "Thư ký###"
  }
}; return (
    <div className="max-w-[800px] mx-auto px-8 py-12 bg-white shadow-md text-[14px] leading-relaxed">
      {/* Phần tiêu ngữ */}
      <div className="text-center space-y-1">
        <p className="font-bold uppercase">Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam</p>
        <p className="font-bold">Độc lập - Tự do - Hạnh phúc</p>
        <div className="mx-auto border-t border-black w-1/2 my-1" />
        <p>{data.dia_diem}, {data.ngay}</p>
      </div>

      {/* Cơ quan đơn vị */}
      <div className="mt-6 flex justify-between">
        <div className="text-left">
          <p className="font-bold">{data.co_quan}</p>
          <p>Số: {data.so}</p>
        </div>
      </div>

      {/* Tiêu đề biên bản */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-[16px] font-bold">BIÊN BẢN</p>
        <p className="font-medium">{data.ten_cuoc_hop}</p>
      </div>

      {/* Thành phần tham dự */}
      <div className="mt-6">
        <p className="font-bold">I. Thành phần tham dự:</p>
        <div className="ml-4 mt-1 space-y-1">
          <div className="flex">
            <span>1. Chủ trì: {data.chu_tri.ten}</span>
            <span className="ml-auto">Chức vụ: {data.chu_tri.cv}.</span>
          </div>
          <div className="flex">
            <span>2. Thư ký: {data.thu_ky.ten}</span>
            <span className="ml-auto">Chức vụ: {data.thu_ky.cv}.</span>
          </div>
          <div>
            <p>3. Các thành phần khác:</p>
            <div className="mt-1 ml-4 space-y-1">
              {data.thanh_phan.map((tp, index) => (
                <div key={index} className="flex">
                  <span>{tp.ten}</span>
                  <span className="ml-auto">Chức vụ: {tp.cv}.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nội dung */}
      <div className="mt-6">
        <p className="font-bold">II. Nội dung cuộc họp:</p>
        <p className="text-justify mt-1">{data.noi_dung}</p>
      </div>

      {/* Kết luận */}
      <div className="mt-6">
        <p className="font-bold">III. Kết luận:</p>
        <ul className="list-disc ml-6 mt-1 space-y-1">
          {data.ket_luan.map((item, index) => (
            <li key={index} className="text-justify">{item}</li>
          ))}
        </ul>
      </div>

      {/* Thông qua */}
      <div className="mt-6 space-y-1">
        <p>Cuộc họp kết thúc {data.gio_ket_thuc} {data.ngay},</p>
        <p>Nội dung cuộc họp đã được các thành viên dự họp thông qua và cùng ký vào biên bản.</p>
        <p>Biên bản được các thành viên nhất trí thông qua và có hiệu lực kể từ ngày ký./.</p>
      </div>

      {/* Chữ ký */}
      <div className="mt-8 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="font-bold">THƯ KÝ</p>
          <p>(Ký, ghi rõ họ tên)</p>
        </div>
        <div>
          <p className="font-bold">CHỦ TOẠ</p>
          <p>(Ký, ghi rõ họ tên)</p>
        </div>
      </div>

      {/* Các thành viên khác */}
      <div className="mt-12 text-center">
        <p className="font-bold">CÁC THÀNH VIÊN KHÁC</p>
        <p>(Ký, ghi rõ họ tên)</p>
      </div>
    </div>
  );
};

export default MeetingMinutes;