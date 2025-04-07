import { exams } from "./data";
import { Exam } from "./type";
import deleteIcon from "../../../../assets/icons/fi_trash-2.png";
import editIcon from "../../../../assets/icons/fi_edit.png";

const getColorByExam = (exam: Exam) => {
    if (exam.duration === "15 phút") return "#FFD700"; // Vàng
    if (exam.duration === "45 phút") return "#1E90FF"; // Xanh biển
    if (exam.type === "Giữa kỳ") return "#32CD32"; // Xanh lá
    if (exam.type === "Cuối kỳ") return "#FF4500"; // Đỏ
    return "#D3D3D3"; // Mặc định xám
};

interface ExamListProps {
    selectedDate: string | null;
}

const ExamList = ({ selectedDate }: ExamListProps) => {
    const filteredExams = exams.filter((exam) => exam.date === selectedDate);

    return (
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-4 sm:w-[280px]">
            {selectedDate ? (
                <div className="mt-4">
                    {/* Luôn hiển thị ngày được chọn */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">{new Date(selectedDate).getDate()}</h2>
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long' })}
                    </p>
                    <div className="border-t-2 border-orange-500 my-2"></div>

                    {filteredExams.length > 0 ? (
                        <div className="mt-4">
                            {filteredExams.map((exam: Exam, index) => (
                                <div key={exam.id}>
                                    {/* Gạch ngang màu cam, không hiển thị với bài đầu tiên */}
                                    {index > 0 && <div className="border-t-2 border-orange-500 my-2"></div>}

                                    {/* Nội dung từng bài kiểm tra */}
                                    <div className="p-3 relative" style={{ borderColor: getColorByExam(exam) }}>
                                        <h3 className="font-bold text-sm sm:text-base" style={{ color: getColorByExam(exam) }}>• {exam.subject}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm"><b>Giáo viên:</b> {exam.teacher}</p>
                                        <p className="text-gray-600 text-xs sm:text-sm"><b>Thời lượng:</b> {exam.duration}</p>
                                        <p className="text-gray-600 text-xs sm:text-sm"><b>Phân loại:</b> {exam.type}</p>
                                        <p className="text-gray-600 text-xs sm:text-sm"><b>Hình thức:</b> {exam.method}</p>
                                        
                                        {/* Icons Edit & Delete */}
                                        <div className="absolute top-2 right-2 flex gap-2">
                                            <img src={editIcon} alt="Chỉnh sửa" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                                            <img src={deleteIcon} alt="Xóa" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-3 text-sm sm:text-base">Không có bài thi nào</p>
                    )}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-3 text-sm sm:text-base">Chọn ngày để xem bài thi</p>
            )}
        </div>
    );
};

export default ExamList;