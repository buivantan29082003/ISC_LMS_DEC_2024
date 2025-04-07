import { useState } from 'react';
import Calendar from './Calendar';
import ExamList from './ExamList';

const ExamPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-4 w-full mx-auto rounded-lg shadow-md bg-white ">
      <div className="flex justify-between items-center mt-6 mb-3">
        <h2 className="font-bold text-lg md:text-xl ml-8">Danh sách bài thi</h2>
      </div>
      {/* Phần nội dung */}
      <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
        <div className="w-full md:w-3/4 m-0">
          <Calendar setSelectedDate={setSelectedDate} />
        </div>
        <div className="w-full md:w-1/4">
          <ExamList selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
