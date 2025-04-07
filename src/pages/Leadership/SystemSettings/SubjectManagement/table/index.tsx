import { useState, useEffect } from 'react';
import './style.css';
import '../../../../../styles/_variables.scss';
import edit from '../../../../../assets/icons/fi_edit.png';
import trash from '../../../../../assets/icons/fi_trash-2.png';
import search from '../../../../../assets/icons/fi_search.png';
import arrow_right from '../../../../../assets/icons/chevron_big_right.png';
import arrow_left from '../../../../../assets/icons/arrow left.png';
import Popup from '../../../../../components/Popup';
import DeleteConfirmation from '../../../../../components/DeleteConfirmation';
import arrowupdown from '../../../../../assets/icons/u_arrow up down.png';

const API_URL = 'https://fivefood.shop/api/subject-types';

const ClassManagementTable: React.FC = () => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedSubject, setSelectedSubject] = useState<any | null>(null);

  const handleOpenPopup = (subject: any) => {
    console.log('Subject to edit:', subject); // Kiểm tra thông tin môn học
    setSelectedSubject(subject); // Lưu thông tin môn học vào state
    setIsPopupOpen(true); // Mở Popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Đóng Popup
    setSelectedSubject(null); // Reset thông tin môn học
  };

  const handleSaveSubject = (updatedSubject: any) => {
    if (updatedSubject) {
      // Cập nhật thông tin môn học trong backend hoặc trong state
      setSubjects(subjects.map((subject) => (subject.id === updatedSubject.id ? updatedSubject : subject)));
      handleClosePopup(); // Đóng popup sau khi lưu
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      if (result.code === 0) {
        setSubjects(result.data);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };

  // Fetch dữ liệu
  useEffect(() => {
    fetchSubjects();
  }, []);

  // Lọc danh sách theo từ khóa tìm kiếm
  const filteredSubjects = subjects.filter((subject) => subject.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const totalPages = Math.ceil(filteredSubjects.length / itemsPerPage);
  const currentData = filteredSubjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenModal = (id: number) => {
    setSubjectToDelete(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
    setSubjectToDelete(null); // Reset subjectToDelete
  };

  const handleConfirmDelete = async () => {
    if (subjectToDelete !== null) {
      try {
        const response = await fetch(`${API_URL}/${subjectToDelete}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setSubjects(subjects.filter((subject) => subject.id !== subjectToDelete));
          console.log(`Xóa môn học có ID: ${subjectToDelete}`);
        } else {
          console.error('Xóa thất bại');
        }
      } catch (error) {
        console.error('Lỗi khi xóa môn học:', error);
      }
      setIsModalOpen(false);
      setSubjectToDelete(null);
    }
  };

  return (
    <div className="content-classrooomsettings">
      {/* tìm kiếm */}
      <div className="head-content-classrooomsettings">
        <p className="title-classrooomsettings">Danh sách các loại môn học</p>
        <div className="search-classrooomsettings">
          <button className="search-button-classrooomsettings">
            <img src={search} alt="search" className="icon-search" />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm theo tên..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* danh sách môn */}
      <div className="main-content-classrooomsettings">
        <table className="w-full border-collapse">
          <thead className="bg-br-gradient-top-or text-white">
            <tr>
              <th className="p-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  Loại môn
                  <img src={arrowupdown} alt="Sort Icon" className="w-6 h-6" />
                </div>
              </th>
              <th className="p-3 text-center">Trạng thái</th>
              <th className="p-3 text-left">Ghi chú</th>
              <th className="p-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                  <td className="p-3 text-center">{item.name}</td>
                  <td className={`p-3 text-center ${item.status ? 'text-blue-600' : 'text-red-600'}`}>
                    {item.status ? 'Hoạt động' : 'Không hoạt động'}
                  </td>
                  <td className="p-3">{item.description}</td>
                  <td className="p-3 text-center flex justify-center gap-3">
                    <button onClick={() => handleOpenPopup(item)} className="rounded-lg">
                      <img src={edit} alt="edit" className="w-5 h-5" />
                      {isPopupOpen && selectedSubject && (
                        <Popup
                          titleBig="Chỉnh sửa môn học"
                          titleSmall1="Tên môn"
                          titleSmall2="Trạng thái"
                          titleSmall3="Ghi chú"
                          isOpen={isPopupOpen}
                          onClose={handleClosePopup}
                          selectedSubject={selectedSubject}
                          onSave={handleSaveSubject}
                        />
                      )}
                    </button>
                    <button onClick={() => handleOpenModal(item.id)}>
                      <img src={trash} alt="trash" className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-3 text-center text-gray-500">
                  Không tìm thấy kết quả nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* phân trang */}
      <div className="footer-content-classroomsettings flex justify-between items-center mt-4">
        <div className="flex items-center">
          <span className="mr-2">Hiển thị</span>
          <input
            type="number"
            className="w-16 border rounded p-1 text-center"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          />
          <span className="ml-2">hàng trong mỗi trang</span>
        </div>

        <div className="pagination flex gap-2">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            <img src={arrow_left} alt="Trước" className="h-4" />
          </button>

          {totalPages <= 5 ? (
            [...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? 'active bg-blue-500 text-white pageactive' : ''}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))
          ) : (
            <>
              {currentPage > 3 && (
                <>
                  <button onClick={() => goToPage(1)}>1</button>
                  {currentPage > 4 && <span>...</span>}
                </>
              )}

              {Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
                .filter((page) => page >= 1 && page <= totalPages)
                .map((page) => (
                  <button
                    key={page}
                    className={currentPage === page ? 'active bg-blue-500 text-white pageactive' : ''}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                ))}

              {currentPage < totalPages - 2 && (
                <>
                  {currentPage < totalPages - 3 && <span>...</span>}
                  <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
                </>
              )}
            </>
          )}

          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            <img src={arrow_right} alt="Sau" className="h-4" />
          </button>
        </div>
      </div>
      {/* Popup xóa */}
      {isModalOpen && subjectToDelete !== null && (
        <DeleteConfirmation
          title="Xác nhận xoá môn học"
          description="Bạn có chắc chắn muốn xóa môn học này không?"
          onCancel={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ClassManagementTable;
