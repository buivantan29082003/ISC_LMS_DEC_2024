import React, { useState } from 'react';
import { IScoreBoard } from './type';
import { IconSearchLightGrayishBlue } from '../../../../components/Icons';
import { IconDoubleArrowUpDown, ArrowLeftIcon, ArrowRightIcon } from '../../../../components/Icons/IconComponents';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import AddressList from '../../../../components/AddressUrlStack/Index';
import DropdownSelectionComponent from '../../../../components/DropdownSelection';
import SearchResult from '../SearchResult/SearchResult';

const scoreBoardData: IScoreBoard[] = [
  {
    id: 1,
    stt: 1,
    name: 'Nguyễn Văn A',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 7.0,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
  {
    id: 2,
    stt: 2,
    name: 'Trần Thanh B',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 4.8,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
  {
    id: 3,
    stt: 3,
    name: 'Nguyễn Văn C',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 7.0,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
  {
    id: 4,
    stt: 4,
    name: 'Nguyễn Văn T',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 7.6,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
  {
    id: 5,
    stt: 5,
    name: 'Nguyễn Bảo Nhi',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 8.5,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
  {
    id: 6,
    stt: 6,
    name: 'Bảo Quang Huy',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 7.0,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
  {
    id: 7,
    stt: 7,
    name: 'Nguyễn Văn D',
    birthday: '12/04/2004',
    chuyenCan: 9,
    mieng: 8,
    phut15: 7,
    heSo1: 1,
    heSo2: 8,
    tbHocKy: 7.2,
    diemTrungBinhCaNam: 4.0,
    ngayCapNhat: '2020-10-20T16:00:00Z',
  },
];

const option_date = ['2020-2021', '2019-2020', '2018-2019', '2017-2018'];
const option_class = ['Chọn lớp', 'Lớp 1', 'Lớp 2', 'Lớp 3'];
const option_block = ['Chọn Khối', 'Khối 1', 'Khối 2', 'Khối 3'];
const option_subject = ['Chọn Môn', 'Toán', 'Văn', 'Anh'];
const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat('vi-VN', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  return (
    <>
      <span>{formattedDate}</span>
      <br />
      <span>{formattedTime}</span>
    </>
  );
};

const ScoreBoard: React.FC = () => {
  const [urls, setUrls] = useState([
    { link: '/', linkName: 'Quản lý bài kiểm tra' },
    { link: '/', linkName: 'Xem bảng điểm' },
  ]);

  return (
    <>
      <AddressList addressList={urls} />

      <div className="flex items-center gap-3 mb-3">
        <DropdownSelectionComponent placeholder={'Niên khóa'} label={option_date[0]} options={option_date} width={133} />
        <DropdownSelectionComponent placeholder={'Chọn lớp'} options={option_class} width={136} />
        <DropdownSelectionComponent placeholder={'Chọn khối'} options={option_block} width={136} />
        <DropdownSelectionComponent placeholder={'Chọn môn'} options={option_subject} width={136} />
        <button className="w-[136px] h-[40px] border border-orange-600 bg-orange-200 text-black-text font-semibold rounded-lg hover:bg-orange-300">
          Tìm kiếm
        </button>
      </div>

      <hr className="border-t border-gray-300  mt-[29px] mb-[29px]" />

      <h2 className="text-orange-text font-semibold mb-2">Kết quả tìm kiếm</h2>
      <SearchResult />

      {/* Bảng điểm */}
      <div className="  rounded-lg mb-4 mx-2 mt-[29px]">
        <div className="flex flex-wrap justify-between items-center py-2 gap-2 mb-[14px]">
          <h2 className="text-lg font-sans font-bold text-[#823B00]">Bảng điểm của lớp</h2>
          <div className="relative flex items-center w-full max-w-xs sm:w-[438px] rounded-[30px] border border-gray-300 bg-[#EFEFEF]">
            <IconSearchLightGrayishBlue className="ms-3" />
            <input
              type="text"
              placeholder="Tìm kiếm theo ID hoặc tên học viên"
              className="bg-[#EFEFEF] w-full h-[40px] pl-2 pr-4 rounded-[30px] border-none focus:outline-none focus:ring-0 italic"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-[16px]">
            <thead className="bg-gradient-to-r from-background-2 to-background-1 text-white whitespace-nowrap">
              <tr>
                <th rowSpan={2} className="py-3 text-center">
                  STT
                </th>
                <th rowSpan={2} className="py-3 text-center">
                  <div className="flex items-center justify-center px-3 gap-2 font-sans">
                    <span> Họ và tên</span>
                    <span className="relative top-[4px]">
                      <IconDoubleArrowUpDown />
                    </span>
                  </div>
                </th>
                <th rowSpan={2} className="py-3 text-center">
                  Ngày sinh
                </th>
                <th colSpan={6} className="px-4 py-2 border border-grey-text text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="relative top-[4px]">
                      <ArrowLeftIcon />
                    </span>
                    <span>HỌC KỲ I</span>
                    <span className="relative top-[4px]">
                      <ArrowRightIcon />
                    </span>
                  </div>
                </th>

                <th rowSpan={2} className="py-3 text-center ">
                  Điểm trung bình cả năm
                </th>

                <th rowSpan={2} className="py-3 text-center">
                  Đạt
                </th>
                <th rowSpan={2} className="py-3 text-center">
                  Ngày cập nhật
                </th>
              </tr>
              <tr>
                <th className="py-3 text-center border-l border-grey-text">Chuyên cần</th>
                <th className="py-3 text-center">Miệng</th>
                <th className="py-3 text-center">15 phút</th>
                <th className="py-3 text-center">Hệ số I</th>
                <th className="py-3 text-center">Hệ số II</th>
                <th className="py-3 text-center border-r border-grey-text ">Trung bình</th>
              </tr>
            </thead>

            <tbody>
              {scoreBoardData.map((item, index) => (
                <tr key={item.id} className={`border-b ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="py-3 text-center">{item.stt}</td>
                  <td className="py-3 text-center font-bold">{item.name}</td>
                  <td className="py-3 text-center">{item.birthday}</td>
                  <td className="py-3 text-center text-lg">{item.chuyenCan}</td>
                  <td className="py-3 text-center text-lg">{item.mieng}</td>
                  <td className="py-3 text-center text-lg">{item.phut15}</td>
                  <td className="py-3 text-center text-lg">{item.heSo1}</td>
                  <td className="py-3 text-center text-lg">{item.heSo2}</td>
                  <td className="py-3 text-center text-lg text-blue-text">{item.tbHocKy}</td>
                  <td className={`py-3 text-center text-lg font-bold ${item.diemTrungBinhCaNam >= 5 ? 'text-green-text' : 'text-[#ED2025]'}`}>
                    {item.diemTrungBinhCaNam.toFixed(1)}
                  </td>
                  <td className="py-3 text-center text-lg">
                    {item.diemTrungBinhCaNam >= 5 ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-text mx-auto" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-[#ED2025] mx-auto" />
                    )}
                  </td>
                  <td className="py-3 pl-12 text-base italic text-gray-700">{formatDate(item.ngayCapNhat)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
