import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import { ITestManagement } from './type';

const testData = [
    {
        subject: "Toán học",
        class: "6A1",
        grade: 6,
        teacher: "Nguyễn Văn A",
        duration: "45 phút",
        type: "Tự luận",
        category: "Giữa kỳ",
        startDate: "20/01/2021 - 07:00 AM",
        endDate: "20/01/2021 - 09:00 AM",
        topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et vestibulum ante, id malesuada libero. In hac habitasse platea dictumst. Maecenas est erat, volutpat ut hendrerit efficitur, pulvinar vitae nisi.",
        additionalSettings: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        attachment: "HTKL_KT45P_10A1.doc",
    }
];

const DetailTestManagement: React.FC = () => {
    const navigate = useNavigate();
    const [retirementData, setRetirementData] = useState<ITestManagement>({
        files: null,
        id: 0,
        date: "",
        grade: 0,
        class: "",
        subject: "",
        teacher: "",
        examContent: "",
        duration: "",
        status: "",
        approval: "",
    });

    const handleClose = () => {
        navigate('/leadership/exams/test-management', { replace: true });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setRetirementData((prev) => ({
                ...(prev ?? {}),
                files: file,
            }));
        }
    };

    return (
        <div className="modal-overlay ">
            <div className="modal-container p-6 bg-white rounded-lg shadow-lg w-full max-w-3xl">
                <div className="flex justify-end">
                    <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x cursor-pointer hover:text-red-500 transition" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>

                <h1 className="text-xl font-bold text-center mb-4">Xem chi tiết bài kiểm tra</h1>

                {testData.map((test, index) => (
                    <div key={index} className="modal-content">
                        <div className="flex justify-between">
                            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                                <p className="font-bold">Môn học:</p>
                                <p className="">{test.subject}</p>

                                <p className="font-bold">Lớp:</p>
                                <p className="">{test.class}</p>

                                <p className="font-bold">Khoa-khối:</p>
                                <p className="">{test.grade}</p>

                                <p className="font-bold">Giảng viên:</p>
                                <p className="">{test.teacher}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                                <p className="font-bold">Thời gian:</p>
                                <p className="">{test.duration}</p>

                                <p className="font-bold">Hình thức:</p>
                                <p className="">{test.type}</p>

                                <p className="font-bold">Phân loại:</p>
                                <p className="">{test.category}</p>

                                <p className="font-bold">Ngày bắt đầu:</p>
                                <p className="">{test.startDate}</p>

                                <p className="font-bold">Ngày kết thúc:</p>
                                <p className="">{test.endDate}</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-orange-50 border border-orange-400 rounded-lg grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm text-gray-700">
                            <p className="font-bold">Chủ đề:</p>
                            <p className="">{test.topic}</p>

                            <p className="font-bold">Mô tả:</p>
                            <p className="">{test.description}</p>

                            <p className="font-bold">Cài đặt khác:</p>
                            <p className="">{test.additionalSettings}</p>

                            <p className="font-bold">Tệp đính kèm:</p>
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M15.0667 10.3503L9.91672 15.5087C9.24156 16.1087 8.36267 16.4281 7.45982 16.4015C6.55697 16.3749 5.69839 16.0044 5.0597 15.3657C4.42101 14.727 4.05048 13.8684 4.0239 12.9656C3.99732 12.0627 4.3167 11.1838 4.91672 10.5087L11.5834 3.84201C11.9814 3.46392 12.5094 3.25311 13.0584 3.25311C13.6074 3.25311 14.1354 3.46392 14.5334 3.84201C14.9212 4.235 15.1386 4.7649 15.1386 5.31701C15.1386 5.86912 14.9212 6.39901 14.5334 6.79201L8.78338 12.5337C8.72648 12.595 8.65806 12.6444 8.58203 12.6793C8.50601 12.7141 8.42386 12.7336 8.34029 12.7367C8.25672 12.7398 8.17335 12.7264 8.09496 12.6973C8.01656 12.6682 7.94467 12.6239 7.88339 12.567C7.8221 12.5101 7.77263 12.4417 7.73779 12.3657C7.70294 12.2896 7.68342 12.2075 7.68032 12.1239C7.67723 12.0403 7.69062 11.957 7.71974 11.8786C7.74887 11.8002 7.79315 11.7283 7.85005 11.667L12.1251 7.40034C12.282 7.24342 12.3701 7.03059 12.3701 6.80867C12.3701 6.58675 12.282 6.37393 12.1251 6.21701C11.9681 6.06009 11.7553 5.97193 11.5334 5.97193C11.3115 5.97193 11.0986 6.06009 10.9417 6.21701L6.66672 10.5003C6.45281 10.7126 6.28302 10.9651 6.16716 11.2433C6.0513 11.5215 5.99165 11.8198 5.99165 12.1212C5.99165 12.4225 6.0513 12.7209 6.16716 12.9991C6.28302 13.2773 6.45281 13.5298 6.66672 13.742C7.1037 14.1582 7.68406 14.3904 8.28755 14.3904C8.89104 14.3904 9.47141 14.1582 9.90839 13.742L15.6501 7.99201C16.3125 7.28113 16.6731 6.3409 16.6559 5.36939C16.6388 4.39789 16.2452 3.47096 15.5582 2.7839C14.8711 2.09683 13.9442 1.70327 12.9727 1.68613C12.0012 1.66899 11.0609 2.02961 10.3501 2.69201L3.68339 9.35867C2.78438 10.3544 2.30424 11.6585 2.343 12.9995C2.38175 14.3404 2.93641 15.6147 3.89142 16.5568C4.84642 17.4989 6.12812 18.0362 7.46946 18.0567C8.8108 18.0773 10.1083 17.5795 11.0917 16.667L16.2501 11.517C16.3278 11.4393 16.3894 11.3471 16.4314 11.2455C16.4735 11.144 16.4951 11.0352 16.4951 10.9253C16.4951 10.8155 16.4735 10.7066 16.4314 10.6051C16.3894 10.5036 16.3278 10.4114 16.2501 10.3337C16.1724 10.256 16.0801 10.1943 15.9786 10.1523C15.8771 10.1102 15.7683 10.0886 15.6584 10.0886C15.5485 10.0886 15.4397 10.1102 15.3382 10.1523C15.2367 10.1943 15.1444 10.256 15.0667 10.3337V10.3503Z"
                                                fill="#FF7506"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md pl-8 pr-2 py-2 outline-none"
                                        value={retirementData.files ? retirementData.files.name : ''}
                                        readOnly
                                    />
                                </div>
                                <label className="cursor-pointer bg-orange-100 text-orange-700 py-2 px-4 rounded-md border border-orange-300 hover:bg-orange-200">
                                    Chọn tệp tải lên...
                                    <input type="file" onChange={handleFileChange} accept=".pdf,.jpeg,.jpg" className="hidden" />
                                </label>
                            </div>

                            <p className="font-bold"></p>
                            <p className="text-sm text-gray-500 ">Kiểu file .pdf, .jpeg, .jpg. Dung lượng tối đa 100MB.</p>


                        </div>

                    </div>
                ))}

                {/* Footer Buttons */}
                <div className="modal-footer flex justify-end gap-4 mt-6">
                    <Button className="secondary" size="big" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button className="primary" size="big">
                        Xác nhận
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DetailTestManagement;
