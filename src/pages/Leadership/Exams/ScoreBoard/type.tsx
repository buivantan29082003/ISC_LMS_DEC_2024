export interface IScoreBoard {
  id: number;
  stt: number;
  name: string;         // Họ và Tên
  birthday: string;     // Ngày sinh
  chuyenCan: number;    // Chuyên cần
  mieng: number;        // Miệng
  phut15: number;       // 15 phút
  heSo1: number;        // Hệ số I
  heSo2: number;        // Hệ số II
  tbHocKy: number;     // Trung bình (Học kỳ I)
  diemTrungBinhCaNam: number; // Điểm trung bình cả năm
  ngayCapNhat: string;  // Ngày cập nhật
}
