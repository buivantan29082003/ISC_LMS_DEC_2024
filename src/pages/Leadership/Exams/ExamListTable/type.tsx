export interface Exam {
    id: number;
    subject: string;
    duration: string;
    type: string;
    date: string;
    teacher: string;  // Giáo viên
    method: string;  // Hình thức
    grade?: string;  // Thêm nếu có
    category?: string;  // Thêm nếu có
    color?: string;  // Thêm nếu có
}
