import IconImages from '../../../../../components/IconImages';
import { TableCell, TableRow } from '../../../../../components/ui/tabble';
import { columns } from '../tableColumns';
import { TeachingAssignmentListTableRowProps } from './type';

const TeachingAssignmentListTableRow: React.FC<TeachingAssignmentListTableRowProps> = ({ item, index, onDelete, onEdit }) => {
  return (
    <TableRow key={item.id} className={index % 2 === 0 ? 'bg-[#F0F3F6] border-[#F0F3F6]' : ''}>
      {/* Data Columns */}
      {columns.map((col) => (
        <TableCell key={col.key} className="px-4 py-3 text-black-text text-start text-xs md:text-sm lg:text-base">
          {col.isDate ? new Date(item[col.key]).toLocaleDateString() : item[col.key]}
        </TableCell>
      ))}
      <TableCell className="px-4 py-3 text-start">
        <div className="flex gap-2">
          <button>{/* <img src={IconImages.iconClipboardList} alt="Teaching Assignment" className="w-4 md:w-5 lg:w-6" /> */}</button>
        </div>
      </TableCell>
      {/* Action Buttons Column */}
      <TableCell className="px-4 py-3 text-start w-[150px]">
        <div className="flex gap-2">
          <button onClick={() => onEdit(item)}>
            <img src={IconImages.OrangeEditWriteOutline} alt="Xem" className="w-4 md:w-5 lg:w-6" />
          </button>
          <button>
            <img
              src={IconImages.iconTrashBinOutlineOrange}
              alt="Xóa"
              className="w-4 md:w-5 lg:w-6 cursor-pointer"
              onClick={() => onDelete?.(item.id)}
            />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TeachingAssignmentListTableRow;
