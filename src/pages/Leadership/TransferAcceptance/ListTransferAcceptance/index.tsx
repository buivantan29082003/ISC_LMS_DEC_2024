import { useState } from 'react';
import {Table,TableBody,} from '../../../../components/ui/tabble';
import TransferListData from './data';
import TableHeaderComponent from './TransferListTableHeader';
import TableRowComponent from './TransferListTableRow';
import TitleComponent from '../../../../components/Title';
import ClassListFromSearch from './TransferListFromSearch';
import ItemsPerPage from './TransferListItemsPerPage';
import Pagination from './TransferListtPagination';

const ListTransferAcceptance = () => {
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(TransferListData);


    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(
        TransferListData.length / itemsPerPage,
    );

    return (
        <section className="rounded-lg bg-background-white shadow-[4px_4px_25px_4px_rgba(154,201,245,0.25)] sm:p-5 antialiased mb-10 ">
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 dark:border-gray-700">
                <TitleComponent
                    text="Danh sách chuyển trường"
                    size={22}
                    weight="extrabold"
                    style={{ fontFamily: 'var(--font-Mulish)' }}
                />
                <ClassListFromSearch
                    onSearch={handleSearch}
                    placeholder="Tìm kiếm"
                    inputStyle={{
                        fontFamily: 'var(--font-Mulish)',
                        fontStyle: 'italic',
                        color: 'var(--black-text)',
                    }}
                />
            </div>

            <div className="mb-4 col-span-full xl:mb-2">
                <div className="p-4 z-0 flex flex-col relative justify-between gap-4 rounded-large shadow-small w-full">
                    <div className="relative overflow-x-auto border border-gray-400/10 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-lg
                      xl:rounded-lg 2xl:rounded-lg">
                        <Table
                            style={{ fontFamily: 'var(--font-Mulish)', }}
                            className="w-full text-sm text-left rtl:text-right">
                            {/* Header */}
                            <TableHeaderComponent />

                            {/* Body */}
                            <TableBody className="divide-y divide-[#F0F3F6] bg-white dark:divide-white/[0.05]">
                                {displayedData.map((item, index) => (
                                    <TableRowComponent
                                        key={item.id}
                                        item={item}
                                        index={startIndex + index} // Giữ nguyên index theo dữ liệu gốc

                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    {/* Chọn số hàng hiển thị */}
                    <div className="flex justify-between items-center mt-6">
                        <ItemsPerPage
                            value={itemsPerPage}
                            onChange={(newValue) => {
                                setItemsPerPage(newValue);
                                setCurrentPage(1);
                            }}
                            min={5}
                            max={50}
                            label="Số lượng"
                        />

                        {/* Phân trang */}
                        <div className="flex items-center gap-x-2">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListTransferAcceptance;
