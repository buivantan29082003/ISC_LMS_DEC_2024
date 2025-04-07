import { TableCell, TableRow } from '../../../../../components/ui/tabble';
import IconImages from '../../../../../components/IconImages';
import { TransferListTableRowProps } from './type';
import { Link } from 'react-router-dom';
import { columns } from '../tableColumns';

const TransferListTableRow: React.FC<TransferListTableRowProps> = ({
    item,
    index,
}) => {
    return (
        <TableRow key={item.id} className={index % 2 === 0 ? 'bg-[#F0F3F6] border-[#F0F3F6]' : ''}>
            {columns.map((col) => (
                <TableCell
                    key={col.key}
                    className="px-4 py-3 text-black-text text-start text-xs md:text-sm lg:text-base "
                >
                    {col.isDate ? new Date(item[col.key]).toLocaleDateString() : item[col.key]}
                </TableCell>
            ))}

            {/* Cột chứa nút chức năng */}
            <TableCell className="px-4 py-3 text-start w-[150px]">
                <div className="flex gap-2">
                    <button>
                        <Link to={`/student-transfer/${item.id}`}>
                            <img src={IconImages.OrangeEyeOutline} alt="Xem" className="w-4 md:w-5 lg:w-6" />
                        </Link>
                    </button>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TransferListTableRow;
