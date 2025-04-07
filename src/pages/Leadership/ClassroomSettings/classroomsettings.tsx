import Button from '../../../components/Button';
import plus from '../../../assets/icons/Plus.png';
import edit from '../../../assets/icons/fi_edit.png';
import trash from '../../../assets/icons/fi_trash-2.png';
import search from '../../../assets/icons/fi_search.png';
import arrow_right from '../../../assets/icons/chevron_big_right.png';
import arrow_left from '../../../assets/icons/arrow left.png';
import Dropdown from '../../../components/Dropdown';
import Popup from '../../../components/Popup';
import { DropdownOption } from '../../../components/Dropdown/type';
import Breadcrumb from '../../../components/AddressUrlStack/Index';
import DeleteConfirmation from '../../../components/DeleteConfirmation';
import arrowupdown from '../../../assets/icons/u_arrow up down.png';
import data from './data';
import { useState } from 'react';
import './style.scss';
import '../../../styles/_variables.scss';

const ClassroomSettings: React.FC = () => {
  const [selectedYearOption, setSelectedYearOption] = useState<DropdownOption | null>(null);

  const yearOptions: DropdownOption[] = [
    { label: '2023-2024', value: '2023-2024' },
    { label: '2024-2025', value: '2024-2025' },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const itemsPerPage = 8;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<string | null>(null); // Thêm state lưu ID

  const handleOpenModal = (id: number | string) => {
    setStudentToDelete(id.toString());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStudentToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (studentToDelete) {
      // console.log(`Xóa học viên có ID: ${studentToDelete}`);
      setIsModalOpen(false);
      setStudentToDelete(null);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Dữ liệu của trang hiện tại
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const addresses = [
    { linkName: 'Cài đặt hệ thống', link: '/' },
    { linkName: 'Thiết lập lớp học', link: '/' },
  ];

  return (
    <>
      <div className="breadcrum ml-5">
        <Breadcrumb addressList={addresses} type={true} />
      </div>
      <div className="tab-dropdown-btn">
        <div className="dropdown">
          <Dropdown
            placeholder="Niên khóa"
            size="short"
            options={yearOptions}
            selectedOption={selectedYearOption}
            onSelect={(option) => setSelectedYearOption(option)}
            handleOptionClick={(option) => setSelectedYearOption(option)}
          />
        </div>
        <div className="flex justify-end">
          <Button className="primary" size="big">
            <img src={plus} alt="" />
            Thêm mới
          </Button>
        </div>
      </div>
      <div className="content-classrooomsettings">
        <div className="head-content-classrooomsettings">
          <p className="title-classrooomsettings">Danh sách các loại lớp học</p>
          <div className="search-classrooomsettings">
            <button className="search-button-classrooomsettings">
              <img src={search} alt="search" className="icon-search" />
            </button>
            <input type="text" className="search-input" placeholder="Tìm kiếm..." />
          </div>
        </div>
        <div className="main-content-classrooomsettings">
          <table className="w-full border-collapse">
            <thead className="bg-br-gradient-top-or text-white">
              <tr>
                <th className="p-3 text-center">
                  <div className="flex items-center  ml-1 justify-center gap-2">
                    Loại lớp
                    <img src={arrowupdown} alt="Sort Icon" className="w-6 h-6" />
                  </div>
                </th>
                <th className="p-3 text-center">Trạng thái</th>
                <th className="p-3 text-left">Ghi chú</th>
                <th className="p-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                  <td className="p-3 text-center">{item.type}</td>
                  <td className={`p-3 text-center ${item.disabled ? 'text-red-600' : 'text-blue-600'}`}>{item.status}</td>
                  <td className="p-3">{item.note}</td>
                  <td className="p-3 text-center flex justify-center gap-3">
                    <button onClick={() => setIsPopupOpen(true)} className=" rounded-lg">
                      <img src={edit} alt="edit" className="w-5 h-5" />
                      <Popup
                        titleBig="Thiết lập lớp học"
                        titleSmall1="Loại lớp học"
                        titleSmall2="Trạng thái"
                        titleSmall3="Ghi chú"
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                      />
                    </button>
                    <button onClick={() => handleOpenModal(item.id)}>
                      <img src={trash} alt="trash" className="w-5 h-5" />
                    </button>
                    {isModalOpen && studentToDelete && (
                      <DeleteConfirmation
                        title="Xác nhận xoá lớp học"
                        description={`Bạn có chắc chắn muốn xóa lớp học có ID: ${studentToDelete}?`}
                        onCancel={handleCloseModal}
                        onConfirm={handleConfirmDelete}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="footer-content-classroomsettings flex justify-between items-center mt-4">
          <div className="flex items-center">
            <span className="mr-2">Hiển thị</span>
            <input type="number" className="w-12 border rounded p-1 text-center" defaultValue={itemsPerPage} />
            <span className="ml-2">hàng trong mỗi trang</span>
          </div>
          {/* Phân trang */}
          <div className="footer-content-classroomsettings flex justify-between items-center mt-4">
            <div className="pagination flex gap-2">
              <button className="prev-page" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                <img src={arrow_left} alt="Trước" className="h-4" />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`page ${currentPage === index + 1 ? 'active bg-blue-500 text-white' : ''}`}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button className="next-page" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                <img src={arrow_right} alt="Sau" className="h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassroomSettings;
