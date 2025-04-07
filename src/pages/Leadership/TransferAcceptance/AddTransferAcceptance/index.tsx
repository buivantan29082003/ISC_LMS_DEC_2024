import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DropdownSelectionComponent from '../../../../components/DropdownSelection';
import CalendarInput from '../../../../components/CalendarInput';
import Button from '../../../../components/Button';
// import searchIcon from '../../../../assets/icons/fi_search_primary.png';
import attachIcon from '../../../../assets/icons/u_paperclip.png';
import './index.css'
const AddTransferAcceptance = () => {
  const { register, handleSubmit } = useForm();
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFileName(event.target.files[0].name);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md max-w-[800px] px-8 pb-2">
      <h2 className="text-2xl font-semibold text-center mb-2">Tiếp nhận chuyển trường</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Tên học viên */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Tên học viên: <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full md:w-[585px]">
            <input
              {...register('studentName')}
              placeholder="Nguyễn Hữu Phucas"
              className="w-full p-2 bg-[#F2F2F2] rounded focus:border-orange-400 focus:ring-1 focus:ring-orange-200 outline-none"
            />
            {/* <img src={searchIcon} className="absolute right-3 top-2 text-gray-400 size-6" alt="icon tìm kiếm" /> */}
          </div>
        </div>

        {/* Mã học viên */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Mã học viên: <span className="text-red-500">*</span>
          </label>
          <input
            {...register('studentID')}
            placeholder="PC05360"
            className="w-full md:w-[585px] p-2 bg-[#F2F2F2] rounded focus:border-orange-400 focus:ring-1 focus:ring-orange-200 outline-none"
          />
        </div>

        {/* Ngày chuyển đến */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Ngày chuyển đến: <span className="text-red-500">*</span>
          </label>
          <div className="custom w-full md:w-[585px]">
            <CalendarInput />
          </div>
        </div>

        {/* Học kỳ chuyển */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Học kỳ chuyển: <span className="text-red-500">*</span>
          </label>
          <DropdownSelectionComponent width="585px" options={['Học kỳ I', 'Học kỳ II']} placeholder="Học kỳ I" />
        </div>

        {/* Tỉnh/Thành */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Tỉnh/Thành: <span className="text-red-500">*</span>
          </label>
          <DropdownSelectionComponent width="585px" options={['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng']} placeholder="Lựa chọn" />
        </div>

        {/* Quận/Huyện */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Quận/Huyện: <span className="text-red-500">*</span>
          </label>
          <DropdownSelectionComponent width="585px" options={['Quận 1', 'Quận 2', 'Quận 3']} placeholder="Lựa chọn" />
        </div>

        {/* Chuyển từ */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="block font-medium">
            Chuyển từ: <span className="text-red-500">*</span>
          </label>
          <input
            {...register('fromSchool')}
            placeholder="Cần ZTho"
            className="w-full md:w-[585px] p-2 bg-[#F2F2F2] rounded focus:border-orange-400 focus:ring-1 focus:ring-orange-200 outline-none"
          />
        </div>

        {/* Lý do */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <label className="block font-medium">Lý do:</label>
          <div className="w-full md:w-[585px]">
            <textarea
              {...register('reason')}
              className="w-full p-2 bg-[#F2F2F2] rounded focus:border-orange-400 focus:ring-1 focus:ring-orange-200 outline-none"
              rows={2}
              placeholder=""
            />
          </div>
        </div>

        {/* Tệp đính kèm */}
        <div className="flex flex-row items-center justify-between gap-4">
          <label className="font-medium">
            Tệp đính kèm: <span className="text-red-500">*</span>
          </label>
          <div className="w-full md:w-[585px] flex items-center space-x-2">
            <div className="flex items-center border rounded px-3 bg-[#F2F2F2] h-10 flex-grow">
              <img src={attachIcon} alt="icon" className="w-7 h-5 pr-1 border-r-2 text-orange-500" />
              <span className="text-gray-500 ml-2">{fileName || ' '}</span>
            </div>
            <label className="cursor-pointer border border-orange-500 px-4 py-2 rounded bg-orange-100 hover:bg-orange-200 transition h-10 flex items-center">
              Chọn tệp tải lên...
              <input type="file" {...register('attachment')} className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>
        <p className="text-sm lg:ml-[150px] text-gray-500 font-thin italic">Kích thước tệp không vượt quá 250MB.</p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button className="w-40 h-12 bg-gray-200 rounded-lg font-semibold">Hủy</button>
          <Button className="secondary" size="mini" width="160px" height="48px" style={{ color: 'white', fontWeight: '600' }}>
            Tiếp theo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTransferAcceptance;
