import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './../../../../../redux/store';
import {
  deleteTrainingLevel,
  fetchTrainingLevels,
} from './../../../../../redux/reducers/Leadership/SystemSettings/TrainingLevelManagement/TrainingLevelManagementSlice';
import type { RootState } from './../../../../../redux/store';

import { TableCell, TableRow } from '../../../../../components/ui/tabble';
import IconImages from '../../../../../components/IconImages';
import { ListOfTrainingLevelManagementListTableRowProps } from './type';
import { Link } from 'react-router-dom';
import { columns } from '../tableColumns';
import DeleteModal from '../../../../../components/DeleteConfirmation';
import { toast } from 'react-toastify';
const ListOfTrainingLevelManagementListTableRow: React.FC<ListOfTrainingLevelManagementListTableRowProps> = ({ item, index, onDelete }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ id: number } | null>(null);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // nào bên kia sửa api thì sài cái này
  const { TrainingLevelManagement, loading, error } = useSelector((state: RootState) => state.trainingLevelManagement);
  const [itemsPerPage, setItemsPerPage] = useState(TrainingLevelManagement?.pageSize || 5);
  const [currentPage, setCurrentPage] = useState(TrainingLevelManagement?.page || 1);

  // Mở modal và lưu item cần xóa
  const handleOpenDeleteModal = () => {
    setSelectedItem({ id: item.id });
    setIsDeleteModalOpen(true);
  };

  // Xác nhận xóa
  const handleConfirmDelete = async () => {
    await dispatch(deleteTrainingLevel(item.id));
    setIsDeleteModalOpen(false);
    toast.success('Xóa thành công!');
    dispatch(fetchTrainingLevels({ page: currentPage, pageSize: itemsPerPage, sortColumn, sortOrder }) as any);
  };

  return (
    <>
      <TableRow key={item.id} className={index % 2 === 0 ? 'bg-[#F0F3F6] border-[#F0F3F6]' : ''}>
        {columns.map((col) => (
          <TableCell
            key={col.key}
            className={`px-4 py-3 text-black-text text-start text-xs md:text-sm lg:text-base ${
              col.key === 'status'
                ? item[col.key]
                  ? 'text-blue-status' // Nếu status là true
                  : 'text-red-status' // Nếu status là false
                : ''
            }`}
          >
            {col.key === 'status'
              ? item[col.key]
                ? 'Đang hoạt động'
                : 'Không hoạt động' // Chuyển true/false thành chuỗi
              : item[col.key] ?? 'N/A'}
          </TableCell>
        ))}
        {/* Cột chứa nút chức năng */}
        <TableCell className="px-4 py-3 text-start w-[150px]">
          <div className="flex gap-2">
            <Link to={`/student-retention/${item.id}`}>
              <img src={IconImages.OrangeEditWriteOutline} alt="Sửa" className="w-4 md:w-5 lg:w-6" />
            </Link>
            <button onClick={handleOpenDeleteModal}>
              <img src={IconImages.iconTrashBinOutlineOrange} alt="Xóa" className="w-4 md:w-5 lg:w-6" />
            </button>
          </div>
        </TableCell>
      </TableRow>

      {/* Modal xác nhận xóa */}
      {isDeleteModalOpen && selectedItem && (
        <DeleteModal
          title="Xóa bậc đào tạo"
          description={`Xác nhận muốn xoá bậc đào tạo này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.`}
          onCancel={() => setIsDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default ListOfTrainingLevelManagementListTableRow;
