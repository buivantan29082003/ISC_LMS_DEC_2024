import React from 'react';
import { teacherData } from './data';
const avatar = require('../../../../assets/images/Frame 19.png');
const trash = require('../../../../assets/icons/fi_trash-2.png');
const down = require('../../../../assets/icons/caret_down.png');
const calendar = require('../../../../assets/icons/icon-calendar.png');
const plus = require('../../../../assets/icons/fi_plus.png');

const TeacherProfileEdit = () => {
  return (
    <div className="w-full max-w-8xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="border rounded-lg overflow-hidden mb-6">
        <div className="bg-background-2 text-white p-4 font-bold text-lg">Thông tin chung</div>
        <div className="p-6 flex gap-x-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img src={avatar} alt="Avatar" className="w-64 h-64 rounded-full object-cover" />
          </div>

          {/* Nội dung thông tin */}
          <div className="flex flex-1 gap-x-8">
            {/* Cột 1 */}
            <div className="space-y-4 w-1/3">
              <p>
                <strong className="text-orange-text">Thông tin giảng viên</strong>
              </p>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Mã giảng viên:</strong>
                <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.id} />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="ml-36" />
                <span className="text-gray-500">Sinh mã tự động</span>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Tổ - Bộ môn:</strong>

                <div className="relative w-full">
                  <select className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 text-gray-700 appearance-none bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200">
                    <option>Toán - Lý - Hóa</option>
                    <option>Văn - Sử - Địa</option>
                    <option>Tiếng Anh - Tin Học</option>
                  </select>
                  <img src={down} alt="dropdown" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Môn giảng dạy:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.subjects} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Họ và tên:</strong>
                <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.name} />
              </div>
              <div className="flex items-center gap-4 relative">
                <strong className="text-gray-500 whitespace-nowrap w-40">Ngày sinh:</strong>
                <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.birthDate} />
                <img src={calendar} alt="calendar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6" />
              </div>

              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Giới tính:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.gender} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Dân tộc:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.ethnicity} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4 relative">
                <strong className="text-gray-500 whitespace-nowrap w-40">Ngày vào trường:</strong>
                <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.birthDate} />
                <img src={calendar} alt="calendar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6" />
              </div>
            </div>
            {/* Cột 2 */}
            <div className="space-y-4 w-1/3">
              <p>
                <strong className="text-white">Thông tin khác</strong>
              </p>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Quốc tịch:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.nationality} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Tôn giáo:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.religion} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Trạng thái:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.status} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p>
                  <strong className="text-gray-500">Môn kiêm nhiệm:</strong>
                  <span className="bg-blue-500 text-while-text px-3 py-1 rounded-full inline-block">Toán</span>
                  <span className="bg-blue-500 text-while-text px-3 py-1 rounded-full inline-block">Vật lý</span>
                  <span className="bg-blue-500 text-while-text px-3 py-1 rounded-full inline-block">Thêm</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Bí danh:</strong>
                <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.alias} />
              </div>
            </div>

            {/* Cột 3 */}
            <div className="space-y-4 w-1/3">
              <p>
                <strong className="text-orange-text">Địa chỉ liên hệ</strong>
              </p>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Tỉnh thành:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.city} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Tỉnh thành:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.city} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Xã/phường:</strong>
                <div className="relative w-full">
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.ward} />
                  <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Quận/huyện:</strong>
                <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.ward} />
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">Email:</strong>
                <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.email} />
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-gray-500 whitespace-nowrap w-40">SĐT:</strong>
                <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.phone} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <strong className="text-orange-text block mb-4 text-left ml-[300px]">Thông tin cá nhân</strong>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 col-start-2 ml-[-125px] grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-4">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Giới tính:</strong>
                  <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.gender} />
                </div>
                <div className="flex items-center gap-4">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Dân tộc:</strong>
                  <div className="relative w-full">
                    <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.ethnicity} />
                    <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Ngày vào trường:</strong>
                  <input type="text" className="w-full border rounded p-2" defaultValue={teacherData.entryDate} />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-gray-500">Đoàn viên</span>
                </div>
                <div className="flex items-center gap-4">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Dân tộc:</strong>
                  <div className="relative w-full">
                    <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.ethnicity} />
                    <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center gap-4 relative">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Ngày vào đoàn:</strong>
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.entryDate} />
                  <img src={calendar} alt="calendar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-gray-500">Đảng viên</span>
                </div>
                <div className="flex items-center gap-4">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Dân tộc:</strong>
                  <div className="relative w-full">
                    <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.ethnicity} />
                    <img src={down} alt="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center gap-4 relative">
                  <strong className="text-gray-500 whitespace-nowrap w-40">Ngày vào đảng:</strong>
                  <input type="text" className="w-full border rounded p-2 pr-10" defaultValue={teacherData.entryDate} />
                  <img src={calendar} alt="calendar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bảng thông tin gia đình */}
      <div className="border rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <strong className="text-orange-text text-left">Thông tin gia đình</strong>

            <button className="p-2 bg-orange-500 text-white rounded-lg flex items-center gap-2">
              <img src={plus} alt="add" className="w-4 h-4" />
              <span className="text-white font-medium">Thêm</span>
            </button>
          </div>

          <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 border text-left">Người liên hệ</th>
                <th className="px-4 py-2 border text-left">Địa chỉ</th>
                <th className="px-4 py-2 border text-left">SĐT</th>
                <th className="px-4 py-2 border"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 text-left">{teacherData.name}</td>
                <td className="px-4 py-2 text-left">{teacherData.address}</td>
                <td className="px-4 py-2 text-left">{teacherData.phone}</td>
                <td>
                  <img src={trash} alt="delete" className="w-6 h-6" />
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-4 py-2 text-left">{teacherData.name2}</td>
                <td className="px-4 py-2 text-left">{teacherData.address2}</td>
                <td className="px-4 py-2 text-left">{teacherData.phone2}</td>
                <td>
                  <img src={trash} alt="delete" className="w-6 h-6" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileEdit;
