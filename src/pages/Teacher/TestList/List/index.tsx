import React, { useState } from 'react';
import { Table, TableBody, TableHeader, TableRow, TableCell } from '../../../../components/ui/tabble';
import Button from '../../../../components/Button';
import PaginationControls from '../../../../components/Pagination';
import SearchInput from '../../../../components/SearchTable';
import Dropdown from '../../../../components/Dropdown';
import CalendarInput from '../../../../components/CalendarInput';
import fiedit from '../../../../assets/icons/fi_edit.png';
import infooutline from '../../../../assets/icons/icon-info-outline.png.png';
import arrowupdown from '../../../../assets/icons/u_arrow up down.png';
import { exams, subjectOptions, gradeOptions } from './data';
import { DropdownOption } from '../../../../components/Dropdown/type';

const ListTableTest: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [activeButton, setActiveButton] = useState('all');
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const totalPages = Math.ceil(exams.length / itemsPerPage);
  const [selectedSubject, setSelectedSubject] = useState<DropdownOption | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<DropdownOption | null>(null);

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="w-full max-w-[1680px] mx-auto py-5">
      <div className="max-w-[1680px]">
        <div className="flex max-w-[1680px] gap-4 border-b border-gray-200">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-4 border-b border-gray-200">
              <button
                className={`w-[207px] h-[69px] px-1 font-bold text-[18px] rounded-t-lg border-2 border-b-0 ${
                  activeButton === 'all' ? 'bg-orange-500 text-while-text border-orange-500' : 'bg-white text-black-text border-orange-500'
                }`}
                onClick={() => handleButtonClick('all')}
              >
                Tất cả bài kiểm tra
              </button>
              <button
                className={`w-[207px] h-[69px] px-1 font-bold text-[18px] rounded-t-lg border-2 border-b-0 ${
                  activeButton === 'upcoming' ? 'bg-orange-500 text-while-text border-orange-500' : 'bg-white text-black-text border-orange-500'
                }`}
                onClick={() => handleButtonClick('upcoming')}
              >
                Bài kiểm tra sắp tới
              </button>
              <button
                className={`w-[207px] h-[69px] px-1 font-bold text-[18px] rounded-t-lg border-2 border-b-0 ${
                  activeButton === 'graded' ? 'bg-orange-500 text-while-text border-orange-500' : 'bg-white text-black-text border-orange-500'
                }`}
                onClick={() => handleButtonClick('graded')}
              >
                Bài kiểm tra đã chấm
              </button>
              <button
                className={`w-[207px] h-[69px] px-1 font-bold text-[18px] rounded-t-lg border-2 border-b-0 ${
                  activeButton === 'ungraded' ? 'bg-orange-500 text-while-text border-orange-500' : 'bg-white text-black-text border-orange-500'
                }`}
                onClick={() => handleButtonClick('ungraded')}
              >
                Bài kiểm tra chưa chấm
              </button>
            </div>

            <button className="bg-orange-500 text-while-text px-6 py-3 rounded-lg font-bold">Thêm bài kiểm tra</button>
          </div>
        </div>

        <div className="max-w-[1680px] px-[36px] pt-[24px] pb-[34px] bg-background-white shadow-xl p-7 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            {/* <div className="flex gap-4 items-end">
              <div className="flex flex-col w-[150px]">
                <label className="font-bold">Chọn bộ môn</label>
                <Dropdown
                  options={subjectOptions}
                  selectedOption={selectedSubject}
                  handleOptionClick={setSelectedSubject}
                  onSelect={(option) => setSelectedSubject(option)}
                  size="short"
                  placeholder="Chọn bộ môn"
                />
              </div>
              <div className="flex flex-col w-[150px]">
                <label className="font-bold">Chọn khối</label>
                <Dropdown
                  options={gradeOptions}
                  selectedOption={selectedGrade}
                  handleOptionClick={setSelectedGrade}
                  onSelect={(option) => setSelectedSubject(option)}
                  size="short"
                  placeholder="Chọn khối"
                />
              </div>
              <div className="flex flex-col w-[150px]">
                <label className="font-bold">Chọn Ngày</label>
                <CalendarInput />
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold text-center max-h-[40px] min-w-[120px] max-w-[200px] whitespace-nowrap flex items-center justify-center ml-12">
                Lọc kết quả
              </button>
            </div> */}
            <div className="flex gap-4 items-center">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label className="font-bold">Chọn bộ môn</label>
                <Dropdown
                  options={subjectOptions}
                  selectedOption={selectedSubject}
                  handleOptionClick={setSelectedSubject}
                  onSelect={(option) => setSelectedSubject(option)}
                  size="short"
                  placeholder="Chọn bộ môn"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label className="font-bold">Chọn khối</label>
                <Dropdown
                  options={gradeOptions}
                  selectedOption={selectedGrade}
                  handleOptionClick={setSelectedGrade}
                  onSelect={(option) => setSelectedSubject(option)}
                  size="short"
                  placeholder="Chọn khối"
                />
              </div>
              <div className=" flex flex-col mb-6 flex-2 min-w-[150px] h-[40px]">
                <label className="font-bold">Chọn Ngày</label>
                <div className="h-full flex items-center">
                  <CalendarInput />
                </div>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 mt-5 rounded-lg font-bold text-center h-[40px] min-w-[120px] max-w-[200px] whitespace-nowrap flex items-center justify-center">
                Lọc kết quả
              </button>
            </div>

            <SearchInput placeholder="Tìm kiếm theo tên topic" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          </div>
          <div className="pt-[24px] pb-[66px]">
            <Table className="w-full  table-fixed border-collapse rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow className="bg-orange-500 text-while-text">
                  <TableCell isHeader className="p-2 text-center">
                    <div className="flex items-center justify-center gap-1">
                      Lớp
                      <img src={arrowupdown} className="w-6 h-6" />
                    </div>
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    Nội dung
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      Môn học
                      <img src={arrowupdown} className="w-6 h-6" />
                    </div>
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    Ngày làm bài
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    Thời lượng
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    Trạng thái
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    Bài làm
                  </TableCell>
                  <TableCell isHeader className="text-center">
                    {' '}
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exams.map((exam, index) => (
                  <TableRow key={index} className="even:bg-gray-100 odd:bg-white">
                    <TableCell className=" text-center align-middle">{exam.class}</TableCell>
                    <TableCell className="text-center align-middle">{exam.content}</TableCell>
                    <TableCell className="text-center align-middle">{exam.subject}</TableCell>
                    <TableCell className="text-center align-middle">{exam.date}</TableCell>
                    <TableCell className="text-center align-middle">{exam.duration}</TableCell>
                    <TableCell
                      className={`text-center align-middle ${
                        exam.status === 'Đã kết thúc' ? 'text-green-500' : exam.status === 'Chưa bắt đầu' ? 'text-red-500' : 'text-blue-500'
                      }`}
                    >
                      {exam.status}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      {exam.status === 'Đã kết thúc' ? (
                        <button className="bg-yellow-500  w-[142px] text-while-text px-3 py-1 rounded">Chấm điểm</button>
                      ) : exam.status === 'Đang tiến hành' ? (
                        <button className="bg-gray-300 w-[142px] text-gray-500 px-3 py-1 rounded" disabled>
                          Chấm điểm
                        </button>
                      ) : exam.status === 'Chưa bắt đầu' ? (
                        <button className="bg-orange-500 w-[142px] text-while-text px-3 py-1 rounded">Bắt đầu</button>
                      ) : null}
                    </TableCell>

                    <TableCell className="text-center align-middle">
                      <div className="flex justify-center gap-2">
                        <img src={fiedit} className="w-[34px] h-[32px] object-contain shrink-0" />
                        <img src={infooutline} className="w-[32px] h-[32px] object-contain shrink-0" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaginationControls
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default ListTableTest;
