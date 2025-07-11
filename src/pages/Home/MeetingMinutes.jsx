import React from 'react';

const MeetingMinutes = ({ data, transcript }) => {

  // const data = {
  //   "chu_tri": {
  //     "cv": "Trưởng bộ phận Kỹ thuật",
  //     "ten": "Anh Quang"
  //   },
  //   "co_quan": "Cơ quan tổ chức###",
  //   "dia_diem": "Địa điểm họp###",
  //   "gio": "Thời gian bắt đầu họp###",
  //   "gio_ket_thuc": "Thời gian kết thúc họp###",
  //   "ket_luan": [
  //     "Hệ thống gặp downtime từ 3h sáng do lỗi memory leak trong backend mới, đã rollback phiên bản về bản cũ và đang theo dõi ổn định.",
  //     "Truyền thông sẽ gửi email xin lỗi khách hàng và cập nhật tình hình liên tục.",
  //     "Thiết lập hệ thống log chi tiết để kiểm tra nguyên nhân sâu hơn.",
  //     "Dự kiến sẽ deploy lại phiên bản đã fix lỗi vào sáng mai.",
  //     "Gửi mã giảm giá 15% cho khách hàng bị ảnh hưởng nặng.",
  //     "Đội CSKH đã sẵn sàng phản hồi tự động qua chatbot và email.",
  //     "Review toàn bộ quy trình release và kiểm thử trước khi đẩy bản mới.",
  //     "Tổ chức cuộc họp kỹ thuật chuyên sâu vào chiều nay để thảo luận chi tiết hơn.",
  //     "Lên danh sách các microservice dễ gây lỗi nhất để audit lại trong tuần này.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống.",
  //     "Ưu tiên khôi phục ổn định hệ thống."
  //   ],
  //   "ngay": "Ngày họp###",
  //   "noi_dung": "Thảo luận về tình trạng downtime hệ thống do lỗi memory leak, các biện pháp khắc phục, thông báo cho khách hàng và kế hoạch ngăn ngừa sự cố tương tự trong tương lai.",
  //   "so": "Số biên bản###",
  //   "ten_cuoc_hop": "Cuộc họp khẩn xử lý sự cố downtime hệ thống",
  //   "thanh_phan": [
  //     {
  //       "cv": "Trưởng bộ phận Kỹ thuật",
  //       "ten": "Anh Quang"
  //     },
  //     {
  //       "cv": "Kỹ sư Phát triển Backend",
  //       "ten": "Chị Hạnh"
  //     },
  //     {
  //       "cv": "Kỹ sư Hạ tầng",
  //       "ten": "Anh Lâm"
  //     },
  //     {
  //       "cv": "Trưởng phòng Chăm sóc khách hàng",
  //       "ten": "Chị Mai"
  //     }
  //   ],
  //   "thu_ky": {
  //     "cv": "Thư ký###",
  //     "ten": "Thư ký###"
  //   }
  // }; 

  return (
    <div className="max-w-full  px-12 py-12 bg-white shadow-md text-[14px] leading-relaxed">
      {/* Phần đầu tiên của PDF */}
      <p>{JSON.stringify(transcript)}</p>
      <div className="flex justify-between px-4">
        {/* Cột bên trái */}
        <div className="flex flex-col items-center px-5">
          <p className="font-semibold">{data.co_quan}</p>
          <br></br>
          <p className="">{data.so}</p>
        </div>

        {/* Cột bên phải */}
        <div className="flex flex-col items-center px-5">
          <p className="font-bold uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p className=" font-semibold">Độc lập - Tự do - Hạnh phúc</p>
          <div className="w-40 border-t border-black mx-auto" />
          <p>{data.dia_diem}, {data.ngay}</p>
        </div>
      </div>

      {/* Thành phần tham dự */}
      <div className="mt-6">
        <p className="font-bold">I. Thành phần tham dự:</p>
        <div className="ml-4 mt-1 space-y-1">
          {/* Chủ trì */}
          <div className="grid grid-cols-2">
            <div className="text-left">
              <span>1. Chủ Trì: {data.chu_tri.ten}</span>
            </div>
            <div className="text-left">
              <span>Chức vụ: {data.chu_tri.cv}.</span>
            </div>
          </div>


          {/* Thư ký */}
          <div className="grid grid-cols-2">
            <div className="text-left">
              2. Thư Ký: {data.thu_ky.ten}
            </div>
            <div className="text-left">
              Chức vụ: {data.thu_ky.cv}.
            </div>
          </div>


          {/* Các thành phần khác */}
          <div>
            <p>3. Các thành phần khác:</p>
            <div className="ml-6 mt-1 space-y-1">
              {data.thanh_phan.map((tp, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div className="text-left">{tp.ten}</div>
                  <div className="text-left">Chức vụ: {tp.cv}.</div>
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