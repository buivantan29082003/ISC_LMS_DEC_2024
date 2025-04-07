import React, { useState } from 'react';
import { examData } from './data';
import { Student } from './type';

const right = require('../../../assets/images/chevron_big_right.png');
const down = require('../../../assets/icons/caret_down.png');
const search = require('../../../assets/icons/fi_search.png');
const truee = require('../../../assets/icons/True.png');
const falsee = require('../../../assets/icons/False.png');

const Transcript = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const [selectedYear, setSelectedYear] = useState('2019-2020');
  const [selectedSubject, setSelectedSubject] = useState('Ngữ văn');
  const [selectedGrade, setSelectedGrade] = useState('10');
  const [selectedClass, setSelectedClass] = useState('10C1');

  return (
    <div className="bg-white px-8 pb-8 pt-0">
      <div className="pb-5 flex items-center gap-2 mb-4">
        <span className="text-gray-400 text-sm mr-2">Quản lý bài kiểm tra</span>
        <img src={right} alt="right" className="w-4 h-4 mr-2" />
        <h1 className="text-3xl font-bold text-black">Chấm điểm</h1>
      </div>
      <div className="flex space-x-8 w-full">
        <strong>Chọn niên khóa</strong>
        <strong>Chọn bộ môn</strong>
        <strong>Chọn khối</strong>
        <strong>Chọn lớp</strong>
      </div>

      <div className="flex space-x-4 border-b p-2">
        {/* Dropdown 1 - Niên khóa */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-black flex items-center space-x-2 border hover:bg-gray-300"
          >
            <span>{selectedYear}</span>
            <img src={down} alt="Icon" className={`w-4 h-4 transition-transform ${isDropdownOpen1 ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isDropdownOpen1 && (
            <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-lg border">
              {['2019-2020', '2021-2022', '2023-2024'].map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setIsDropdownOpen1(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown 2 - Bộ môn */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-black flex items-center space-x-2 border hover:bg-gray-300"
          >
            <span>{selectedSubject}</span>
            <img src={down} alt="Icon" className={`w-4 h-4 transition-transform ${isDropdownOpen2 ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isDropdownOpen2 && (
            <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-lg border">
              {['Ngữ văn', 'Toán', 'Lý'].map((subject) => (
                <button
                  key={subject}
                  onClick={() => {
                    setSelectedSubject(subject);
                    setIsDropdownOpen2(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {subject}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown 3 - Khối */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-black flex items-center space-x-2 border hover:bg-gray-300"
          >
            <span>{selectedGrade}</span>
            <img src={down} alt="Icon" className={`w-4 h-4 transition-transform ${isDropdownOpen3 ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isDropdownOpen3 && (
            <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-lg border">
              {['10', '11', '12'].map((grade) => (
                <button
                  key={grade}
                  onClick={() => {
                    setSelectedGrade(grade);
                    setIsDropdownOpen3(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {grade}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown 4 - Lớp */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen4(!isDropdownOpen4)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-black flex items-center space-x-2 border hover:bg-gray-300"
          >
            <span>{selectedClass}</span>
            <img src={down} alt="Icon" className={`w-4 h-4 transition-transform ${isDropdownOpen4 ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isDropdownOpen4 && (
            <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-lg border">
              {['10C1', '11C2', '12C3'].map((classItem) => (
                <button
                  key={classItem}
                  onClick={() => {
                    setSelectedClass(classItem);
                    setIsDropdownOpen4(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {classItem}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="px-4 py-2 border-2 border-orange-600 bg-orange-200 text-black-text font-semibold rounded-lg hover:bg-orange-300">
          Tìm kiếm
        </button>
      </div>
      <div>
        <strong>Kết quả tìm kiếm</strong>
      </div>
      <div className="border border-orange-300 rounded-lg p-4 bg-orange-50 flex justify-between items-center w-full mx-auto">
        <div className="flex">
          <div>
            <p className="font-semibold">
              Môn học: <span className="font-normal ml-8">Ngữ Văn</span>
            </p>
            <p className="font-semibold">
              Lớp: <span className="font-normal ml-16">10C1</span>
            </p>
            <p className="font-semibold">
              Mã lớp: <span className="font-normal ml-10">134 2665 3563</span>
            </p>
          </div>
          <div className="ml-32">
            <div className="flex">
              <p className="font-semibold ">Thời gian bắt đầu:</p>
              <p className="ml-7">Thứ 6, 20/10/2020</p>
            </div>
            <p className="ml-40">13:00 (GMT +7 Bangkok)</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border-2 border-orange-600 bg-orange-200 text-black-text font-semibold rounded-lg hover:bg-orange-300">
            Xuất file
          </button>
          <select className="border rounded px-2 py-1">
            <option>Excel -.xlsx</option>
          </select>
        </div>
      </div>
      <div className="pt-5 flex justify-between items-center w-full">
        <div className=" flex space-x-2 ">
          <strong>Bảng điểm của lớp -</strong>
          <strong className="text-green-500">35/40 học viên đạt</strong>
        </div>
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-400">
          <img src={search} alt="Search Icon" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm theo ID hoặc tên học viên"
            className="ml-3 pl-2 bg-transparent outline-none w-[350px] italic placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-br-gradient-right-or text-while-text text-center">
              <th className="p-3 align-middle">STT</th>
              <th className="p-3 align-middle">Họ và Tên</th>
              <th className="p-3 align-middle border-r">Ngày sinh</th>
              <th className="p-3 border-t border-white" colSpan={6}>
                <div className="flex items-center justify-center">
                  <button className="text-white text-lg font-bold px-2">{'<'}</button>
                  <span className="text-lg font-bold mx-2">HỌC KỲ I</span>
                  <button className="text-white text-lg font-bold px-2 ">{'>'}</button>
                </div>
              </th>
              <th className="p-3 align-middle border-l">Điểm trung bình cả năm</th>
              <th className="p-3 align-middle">Đạt</th>
              <th className="p-3 align-middle">Ngày cập nhật</th>
            </tr>
            <tr className="bg-orange-500 text-white text-center">
              <th className="p-3"></th>
              <th className="p-3"></th>
              <th className="p-3 border-r"></th>
              <th className="p-3 border-t border-white">Chuyên cần</th>
              <th className="p-3 border-t border-white">Miệng</th>
              <th className="p-3 border-t border-white">15 phút</th>
              <th className="p-3 border-t border-white">Hệ số I</th>
              <th className="p-3 border-t border-white">Hệ số II</th>
              <th className="p-3 border-t border-white">Trung bình</th>
              <th className="p-3 border-l"></th>
              <th className="p-3"></th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {examData.map((student: Student, index: number) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3 border-r">{student.dob}</td>
                <td className="p-3 text-center">{student.attendance}</td>
                <td className="p-3 text-center">{student.oral}</td>
                <td className="p-3 text-center">{student.fifteenMin}</td>
                <td className="p-3 text-center">{student.coef1}</td>
                <td className="p-3 text-center">{student.coef2}</td>
                <td className="p-3 text-center text-blue-500">{student.avg}</td>
                <td className={`p-3 text-center font-bold border-l ${student.yearAvg >= 5 ? 'text-green-500' : 'text-red-500'}`}>
                  {student.yearAvg}
                </td>
                <td className="p-3 text-center">
                  <img src={student.passed ? truee : falsee} alt={student.passed ? 'Đạt' : 'Không đạt'} className="w-5 h-5 mx-auto" />
                </td>

                <td className="p-3 text-gray-500">{student.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transcript;
