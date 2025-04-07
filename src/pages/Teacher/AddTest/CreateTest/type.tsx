import dayjs from "dayjs";

export interface TestFormData {
    topic: string; // Chủ đề bài kiểm tra
    format: "trac_nghiem" | "tu_luan"; // Hình thức kiểm tra
    grade: string; // Khối lớp
    selectedClasses: string[]; // Danh sách lớp được chọn
    duration: { hours: number; minutes: number }; // Thời lượng
    category: string; // Phân loại (Giữa kỳ, Học kỳ, ...)
    startDate: dayjs.Dayjs | null; // Ngày bắt đầu
    endDate: dayjs.Dayjs | null; // Ngày kết thúc
    descriptions: string;
    files: File | null;
}
