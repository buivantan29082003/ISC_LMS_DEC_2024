import React from "react";
import { useNavigate } from "react-router-dom";

const ExamDetailModal: React.FC = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/leadership/exams", { replace: true });
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-container p-6 bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-auto">
        {/* Close button */}
        <div className="flex justify-end">
          <svg
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-x cursor-pointer hover:text-red-500 transition"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-center mb-4">Xem chi tiết lịch thi</h1>

        {/* Exam details */}
        <div className="text-sm space-y-2">
          <div className="flex justify-between whitespace-nowrap gap-2">
            <p>
              <strong>Môn thi:</strong> Toán học
            </p>
            <p>
              <strong>Phân loại:</strong> Giữa kỳ
            </p>
            <p>
              <strong>Thời gian:</strong> 45 phút
            </p>
            <p>
              <strong>Học kỳ:</strong> Học kỳ 1
            </p>
          </div>
          <div className="flex justify-between whitespace-nowrap gap-2">
            <p>
              <strong>Ngày thi:</strong> 20/01/2021
            </p>
            <p>
              <strong>Khoa-khối:</strong> 6
            </p>
            <p>
              <strong>Lớp:</strong> 9A1, 9A3, 9A4, 9A5
            </p>
          </div>
          <div className="whitespace-nowrap mt-2">
            <p>
              <strong>Phân công chấm thi:</strong> Nguyễn Văn C, Trần Thị D
            </p>
          </div>
        </div>

        {/* Attachment */}
        <div className="mt-4">
          <p>
            <strong>File đính kèm:</strong> Loremisump.pdf
          </p>
          <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">📥</span> Tải xuống
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailModal;
