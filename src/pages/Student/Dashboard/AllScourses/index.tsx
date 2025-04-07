import React, { useState } from 'react';
import { courses } from './data';
import { Link } from 'react-router';

const down = require('../../../../assets/icons/caret-down_white.png');
const right = require('../../../../assets/icons/icon-arrow-right.png');
const union = require('../../../../assets/icons/Union.png');

const AllScourses = () => {
  const [isOpenSemester1, setIsOpenSemester1] = useState(true);
  const [isOpenSemester2, setIsOpenSemester2] = useState(false);

  const toggleSemester1 = () => {
    setIsOpenSemester1(!isOpenSemester1);
  };

  const toggleSemester2 = () => {
    setIsOpenSemester2(!isOpenSemester2);
  };

  return (
    <div className="p-4">
      {/* Học kỳ II */}
      <div
        className={`p-3 font-bold rounded-md mb-2 flex items-center cursor-pointer transition-all ${
          isOpenSemester1 ? 'bg-br-gradient-right-or text-white' : 'bg-white text-black border border-gray-300'
        }`}
        onClick={toggleSemester1}
      >
        <img src={isOpenSemester1 ? down : right} alt="icon" className={`mr-2 transition-transform ${isOpenSemester1 ? 'w-5 h-4' : 'w-4 h-5'}`} />
        Học kỳ II - 2020
      </div>

      {isOpenSemester1 && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full  border-collapse border border-gray-200">
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border even:bg-gray-100">
                  <td className="p-2 h-16 text-black-text">
                    <strong>{course.name}</strong>
                  </td>
                  <td className="p-2 h-12 text-gray-800">{course.class}</td>
                  <td className="p-2 h-12 text-gray-800">
                    {course.day} - {course.time}
                  </td>
                  <td className="p-2 h-12 text-gray-800">{course.duration}</td>
                  <td className={`p-2 h-12 italic ${course.status === 'Chưa hoàn thành' ? 'text-red-500' : 'text-green-500'}`}>{course.status}</td>
                  <td className="p-2 h-12">
                    <Link to="class-history">
                      <img className="w-6 h-6" src={union} alt="icon" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Học kỳ I */}
      <div
        className={`p-3 font-bold rounded-md mb-2 flex items-center cursor-pointer transition-all ${
          isOpenSemester2 ? 'bg-br-gradient-right-or text-white' : 'bg-white text-black border border-gray-300'
        }`}
        onClick={toggleSemester2}
      >
        <img src={isOpenSemester2 ? down : right} alt="icon" className={`mr-2 transition-transform ${isOpenSemester2 ? 'w-5 h-4' : 'w-4 h-5'}`} />
        Học kỳ I - 2020
      </div>

      {isOpenSemester2 && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse border border-gray-200">
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border even:bg-gray-100">
                  <td className="p-2 h-16 text-black-text">
                    <strong>{course.name}</strong>
                  </td>
                  <td className="p-2 h-12 text-gray-800">{course.class}</td>
                  <td className="p-2 h-12 text-gray-800">
                    {course.day} - {course.time}
                  </td>
                  <td className="p-2 h-12 text-gray-800">{course.duration}</td>
                  <td className={`p-2 h-12 italic ${course.status === 'Chưa hoàn thành' ? 'text-red-500' : 'text-green-500'}`}>{course.status}</td>
                  <td className="p-2 h-12">
                    <Link to="class-history">
                      <img className="w-6 h-6" src={union} alt="icon" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllScourses;
