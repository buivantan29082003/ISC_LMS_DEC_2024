import React, { useState } from "react";
import FormModal from "../../../../components/common/FormModal";
import DatePicker1 from "../../../../components/DatePickerComponent";
import SelectDropdown from "../../../../components/SelectDropdown";
import { TeachingAssignment } from "../../../../types";

import useFetchClasses from "../hooks/useFetchClasses";

interface TeachingAssignmentFormEditProps {
    isOpen: boolean;
    onClose: () => void;
    item: TeachingAssignment | null;
}

const TeachingAssignmentFormEdit: React.FC<TeachingAssignmentFormEditProps> = ({ isOpen, onClose }) => {
    const handleCancel = () => {
        onClose();
    };
    const { data: classes } = useFetchClasses();
    const [item, setItem] = useState('');
    return (
        <FormModal isOpen={isOpen} onClose={onClose} title="Cập nhật lịch giảng dạy" titleAlign="center" showCloseButton={false}>
            <div className="w-full max-w-3xl p-6 md:p-8">
                <div className="grid gap-5">
                    {/* Giảng viên */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <p className="font-bold text-left">Giảng viên:</p>
                        <p className="md:col-span-2 text-left">Giảng viên</p>
                    </div>

                    {/* Môn học */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <p className="font-bold text-left">Môn học:</p>
                        <p className="md:col-span-2 text-left">Toán đại số</p>
                    </div>

                    {/* Dropdown chọn môn học */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <p className="font-bold text-left">Chọn môn học:</p>
                        <div className="md:col-span-2">
                            <SelectDropdown
                                value={item}
                                onChange={(newValue: string) => setItem(newValue)}
                                placeholder="Chọn môn học"
                                options={classes.map(cls => cls.name)}
                                variant="flat"
                                color="primary"
                                radius="xs"
                                
                            />

                        </div>
                    </div>

                    {/* Ngày bắt đầu */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <p className="font-bold text-left">Ngày bắt đầu:</p>
                        <div className="md:col-span-2">
                            <DatePicker1 />
                        </div>
                    </div>

                    {/* Ngày kết thúc */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <p className="font-bold text-left">Ngày kết thúc:</p>
                        <div className="md:col-span-2">
                            <DatePicker1 />
                        </div>
                    </div>

                    {/* Mô tả */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <p className="font-bold text-left">Mô tả:</p>
                        <textarea className="w-full p-3 border rounded-md md:col-span-2 outline-none" rows={3} />
                    </div>

                    {/* Nút hành động */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                        <button onClick={handleCancel} className="w-full md:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg">
                            Huỷ
                        </button>
                        <button className="w-full md:w-auto bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </FormModal>
    );
};

export default TeachingAssignmentFormEdit;
