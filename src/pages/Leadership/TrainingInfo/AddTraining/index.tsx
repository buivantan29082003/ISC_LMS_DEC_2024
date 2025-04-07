import React, { useState } from 'react';

import calendar from '../../../../assets/icons/icon-calendar.png';
import paper from '../../../../assets/icons/u_paperclip.png';
import plus from '../../../../assets/icons/icon-plus-blue.png';
import minus from '../../../../assets/icons/icon_minus.png';
import CheckboxComponent from '../../../../components/CheckBox';
import Button from '../../../../components/Button';
import './style.css';
import { DropdownOption } from '../../../../components/Dropdown/type';
import { initialFormState, options } from './data';

const AddTrainingProgram: React.FC = () => {
  const [form, setForm] = useState(initialFormState);
  const [trainingPrograms, setTrainingPrograms] = useState<DropdownOption[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option: DropdownOption) => {
    setTrainingPrograms([...trainingPrograms, option]);
    setIsDropdownOpen(false);
  };

  const removeProgram = (index: number) => {
    setTrainingPrograms(trainingPrograms.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const isFormEnabled = form.startDate && form.endDate && form.isCompleted;

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white rounded-2xl p-6 w-full max-w-[884px] shadow-lg'>
        <div className="w-full pt-3 px-6 md:px-[60px] pb-10">
          <h2 className="text-2xl font-bold text-center mb-4 uppercase text-black-text">Thêm mới chương trình đào tạo</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">Giảng viên:</label>
              <input type="text" value={form.lecturer} disabled className="w-2/3 p-2 border rounded bg-gray-200" />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">
                Cơ sở đào tạo: <span className="text-orange-text">*</span>
              </label>
              <select
                name="institution"
                className={`w-2/3 p-2 border rounded ${!isFormEnabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''}`}
                onChange={handleChange}
                required
                disabled={!isFormEnabled}
              >
                <option value="">Lựa chọn</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">
                Chuyên ngành: <span className="text-orange-text">*</span>
              </label>
              <select
                name="major"
                className={`w-2/3 p-2 border rounded ${!isFormEnabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''}`}
                onChange={handleChange}
                required
                disabled={!isFormEnabled}
              >
                <option value="">Lựa chọn</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">
                Ngày bắt đầu: <span className="text-orange-text">*</span>
              </label>
              <div className="relative w-2/3">
                <input type="date" name="startDate" className="w-full p-2 border rounded pr-10" onChange={handleChange} />
                <img src={calendar} alt="calendar icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold"></label>
              <div className="flex items-center w-2/3">
                <CheckboxComponent
                  label="Đã kết thúc Chương trình đào tạo"
                  isChecked={form.isCompleted}
                  isIndeterminate={false}
                  onChange={(e) => setForm({ ...form, isCompleted: e.target.checked })}
                  customStyles={{ label: { textTransform: 'none' } }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">
                Ngày kết thúc: <span className="text-orange-text">*</span>
              </label>
              <div className="relative w-2/3">
                <input type="date" name="endDate" className="w-full p-2 border rounded pr-10" onChange={handleChange} />
                <img src={calendar} alt="calendar icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">
                Hình thức: <span className="text-orange-text">*</span>
              </label>
              <input
                className={`w-2/3 p-2 border rounded ${!isFormEnabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''}`}
                onChange={handleChange}
                required
                disabled={!isFormEnabled}
                value="Lorem Ipsum"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">
                Văn bằng/Chứng chỉ: <span className="text-orange-text">*</span>
              </label>
              <input
                className={`w-2/3 p-2 border rounded ${!isFormEnabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''}`}
                onChange={handleChange}
                required
                disabled={!isFormEnabled}
                value="Lorem Ipsum"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-bold">Tệp đính kèm:</label>
              <div className="relative w-2/3">
                <input type="file" name="attachment" className="hidden" id="fileInput" onChange={handleChange} disabled={!isFormEnabled} />
                <div className="flex items-center">
                  <div className="w-2/3 bg-gray-200 p-2 rounded flex items-center h-10">
                    <span className="mr-2 text-gray-500 flex items-center">
                      <img src={paper} alt="" className="w-6 h-6 inline-block" /> |
                    </span>
                    <input
                      type="text"
                      value={form.attachment ? form.attachment.name : ''}
                      disabled
                      className="flex-grow bg-gray-200 text-gray-500 border-none h-full"
                    />
                  </div>
                  <label
                    htmlFor="fileInput"
                    className={`w-1/3 ml-2 px-4 border border-orange-500 bg-orange-200 text-black-text cursor-pointer rounded flex items-center justify-center h-10 whitespace-nowrap text-center flex-shrink-0 ${!isFormEnabled ? 'cursor-not-allowed' : ''
                      }`}
                  >
                    Chọn tệp tải lên...
                  </label>
                </div>

                <p className="text-sm text-gray-500 italic mt-1">Kiểu file .pdf, .jpeg, .jpg. Dung lượng tối đa 100MB.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="flex">
                  <button onClick={() => removeProgram(index)} className="text-red-500">
                    <img src={minus} alt="Remove" className="w-6 h-6" />
                  </button>
                  <span className="flex-grow ml-3">{program.label}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="text-blue-500 cursor-pointer font-bold flex items-center" onClick={toggleDropdown}>
                <img src={plus} alt="" className="w-6 h-6 inline-block" />
                <span className="ml-2">Thêm chương trình đào tạo</span>
              </div>
              {isDropdownOpen && isFormEnabled && (
                <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-2 w-48">
                  {options.map((option) => (
                    <div key={option.value} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleOptionSelect(option)}>
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>{' '}
          </div>
          <div className="flex justify-center mt-4">
            <Button className="secondary" style={{ color: '#000', margin: 2, fontWeight: 'bold' }}>
              Hủy
            </Button>

            <Button className={isFormEnabled ? 'primary' : 'secondary'} style={{ margin: 2, fontWeight: 'bold' }} disabled={!isFormEnabled}>
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrainingProgram;
