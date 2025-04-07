import React from 'react';
import { IconTrash, IconEdit } from '../../../../components/Icons/IconComponents';

interface Exam {
  subject: string;
  grade: number;
  examName: string;
  semester: number;
  examDate: string;
  status: string;
}

const exams: Exam[] = [
  {
    subject: 'Toán đại số',
    grade: 6,
    examName: 'Giữa kỳ',
    semester: 1,
    examDate: '20/12/2020',
    status: 'Đã kết thúc',
  },
  // Có thể thêm nhiều dữ liệu khác ở đây
];

const ExamCard: React.FC = () => {
  return (
    <div className="grid gap-4">
      {exams.map((exam, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-80">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[22px] font-bold text-green-text flex items-center">
              <span className="text-[22px]  mr-2">•</span> {exam.subject}
            </h2>
            <div className="flex space-x-2">
              <button className="text-orange-text hover:text-orange-700">
                <IconEdit width={24} height={24} />
              </button>
              <button className="text-orange-text hover:text-orange-700">
                <IconTrash width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="text-gray-800 text-base ">
            <div className="grid grid-cols-2 gap-x-8 text-start">
              <p className="font-bold">Khối:</p>
              <p className="italic font-normal"> {exam.grade}</p>

              <p className="font-bold">Tên kỳ thi:</p>
              <p className="italic font-normal"> {exam.examName}</p>

              <p className="font-bold">Học kỳ:</p>
              <p className="italic font-normal"> {exam.semester}</p>

              <p className="font-bold">Ngày làm bài:</p>
              <p className="italic font-normal"> {exam.examDate}</p>

              <p className="font-bold">Tình trạng:</p>
              <p className="italic font-normal"> {exam.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamCard;
