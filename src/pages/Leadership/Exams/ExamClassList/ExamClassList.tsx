import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../../../../components/DeleteConfirmation';
import { IExamClass } from './type';
import { IconArrowUpDown } from '../../../../components/Icons';
import { IconTrash, IconBook, IconEdit } from '../../../../components/Icons/IconComponents';
import ExamCard from '../ExamCard/ExamCard';
import AddressList from '../../../../components/AddressUrlStack/Index';
import DropdownSelectionComponent from '../../../../components/DropdownSelection';

const examClassList = [
  {
    id: 1,
    class_id: '125 1456 8954',
    class_name: '6A',
    homeroom_teacher: 'Nguyễn Văn A',
    students_participating: '45/50',
    examiner: 'Nguyễn Văn A',
  },
  {
    id: 2,
    class_id: '125 1456 8954',
    class_name: '7A',
    homeroom_teacher: 'Nguyễn Văn A',
    students_participating: '45/50',
    examiner: 'Nguyễn Văn A',
  },
  {
    id: 3,
    class_id: '125 1456 8954',
    class_name: '7A',
    homeroom_teacher: 'Nguyễn Văn A',
    students_participating: '50/50',
    examiner: 'Nguyễn Văn A',
  },
  {
    id: 4,
    class_id: '125 1456 8954',
    class_name: '7A',
    homeroom_teacher: 'Nguyễn Văn A',
    students_participating: '50/50',
    examiner: 'Nguyễn Văn A',
  },
];

const option_date = ['2020-2021', '2019-2020', '2018-2019', '2017-2018'];
const ExamClassList: React.FC = () => {
  const [urls, setUrls] = useState([
    { link: '/', linkName: 'Quản lý bài kiểm tra' },
    { link: '/', linkName: 'Danh sách lớp tham gia' },
  ]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [data, setData] = useState<IExamClass[]>(examClassList);
  const [selectedScoreType, setSelectedScoreType] = useState<IExamClass | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = useCallback((item: IExamClass) => {
    setSelectedScoreType(item);
    setIsDeleteModalOpen(true);
  }, []);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handleCancelDelete = useCallback(() => {
    setIsDeleteModalOpen(false);
  }, []);

  const confirmDelete = useCallback(() => {
    if (selectedScoreType) {
      setData((prev) => prev.filter((g) => g.id !== selectedScoreType.id));
    }
    setIsDeleteModalOpen(false);
  }, [selectedScoreType]);

  return (
    <>
      <AddressList addressList={urls} />

      <div className="flex justify-between items-center mb-4">
        <DropdownSelectionComponent options={option_date} width={144} />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 py-2">
        <div className="flex flex-col w-full md:w-3/4 min-h-[752px] bg-background-white shadow-custom rounded-lg p-4 ">
          <div className="flex flex-wrap justify-between items-center px-2 md:px-10 py-2 gap-2">
            <h2 className="text-lg font-sans font-bold">Danh sách lớp tham gia</h2>
          </div>

          <div className="overflow-x-auto flex-grow px-2 md:px-10">
            <table className="w-full border-collapse overflow-hidden rounded-t-lg ">
              <thead className="bg-gradient-to-r from-background-2 whitespace-nowrap to-background-1 text-white">
                <tr>
                  <th className="py-3 text-center ">
                    <div className="flex items-center px-3 gap-2 font-sans">
                      <span> Mã lớp</span>
                      <IconArrowUpDown />
                    </div>
                  </th>
                  <th className="py-3 text-center">
                    <div className="flex items-center justify-center gap-2 font-sans w-full">
                      <span>Tên lớp</span>
                      <IconArrowUpDown />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-center">GVCN</th>
                  <th className="py-3 px-4 text-center">HS tham gia</th>
                  <th className="py-3 px-4 text-center">GV chấm thi</th>
                  <th className="py-3 px-4 text-center">Xem điểm</th>
                  <th className="py-3 px-4 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                    <td className="py-3 px-5 text-black-text">{item.class_id}</td>
                    <td className="py-3  text-center text-black-text">{item.class_name}</td>
                    <td className="py-3 px-4 text-center text-black-text">{item.homeroom_teacher}</td>
                    <td className="py-3 px-4 text-center text-black-text">{item.students_participating}</td>
                    <td className="py-3 px-4 text-center text-black-text">{item.examiner}</td>
                    <td className="py-3 px-4 ">
                      <div className="flex items-center justify-center space-x-2 flex-nowrap">
                        <button className="w-8 h-8 ">
                          <Link to={`scoreboard/${item.id}`}>
                            <IconBook className="text-orange-text" />
                          </Link>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center space-x-2 items-center">
                        <button className="w-8 h-8 ">
                          <Link to={`/leadership/exams/edit/${item.id}`}>
                            <IconEdit className="text-orange-text" />
                          </Link>
                        </button>
                        <button onClick={handleDeleteClick.bind(null, item)} className="w-8 h-8 ">
                          <IconTrash className="text-orange-text" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isDeleteModalOpen && (
              <DeleteModal
                title="Xóa"
                description="Xác nhận muốn xoá những thông tin đã chọn? Sau khi xoá sẽ không thể hoàn tác."
                onCancel={handleCancelDelete}
                onConfirm={confirmDelete}
              />
            )}
          </div>

          <div className="mt-auto flex flex-wrap justify-center md:justify-between items-center px-2 md:px-10 p-4 mb-5 text-black-text font-sans italic text-sm gap-2">
            <div className="flex items-center space-x-2 font-sans">
              <span>Hiển thị</span>
              <input
                type="number"
                min={1}
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="w-12 h-7 border border-border-orange rounded-md text-center text-black-text focus:outline-none focus:ring-1 focus:ring-border-orange"
              />
              <span>hàng trong mỗi trang</span>
            </div>

            <div className="flex space-x-1 md:space-x-2 items-center text-black-text text-sm font-sans">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </button>
              <button className="text-black-text">1</button>
              <button className="w-[26px] h-[26px] rounded-full bg-background-orange-1 text-white flex items-center justify-center font-medium">
                2
              </button>
              <button className="text-black">3</button>
              <button className="text-black">...</button>
              <button className="text-black">10</button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <ExamCard />
        </div>
      </div>
    </>
  );
};

export default ExamClassList;
