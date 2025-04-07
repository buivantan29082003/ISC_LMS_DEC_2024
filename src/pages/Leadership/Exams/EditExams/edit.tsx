import React, { useState } from 'react';
import Dropdown from '../../../../components/Dropdown';
import { DropdownOption } from '../../../../components/Dropdown/type';
import CheckboxComponent from '../../../../components/CheckBox';
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { CustomMultiSelect, OptionType } from '../../../../components/CustomMultiSelect';
import DateInput from '../../../../components/Date';
import dayjs from 'dayjs';

const graderOptions: OptionType[] = [
  { value: 'Nguyễn Văn D', label: 'Nguyễn Văn D' },
  { value: 'Trần Thị D', label: 'Trần Thị D' },
  { value: 'Lê Văn A', label: 'Lê Văn A' },
  { value: 'Phạm Thị B', label: 'Phạm Thị B' },
];

const classList = ['9A1', '9A2'];
const classOptions: OptionType[] = classList.map((cls) => ({ value: cls, label: cls }));

const EditExamSchedule: React.FC = () => {
  const navigate = useNavigate();

  // Giá trị khởi tạo cho form sửa
  const [examTitle, setExamTitle] = useState('Thi cuối học kỳ I');
  const [duration, setDuration] = useState(180);
  const [examDate, setExamDate] = useState<dayjs.Dayjs | null>(dayjs('2020-10-23'));

  // Radio lựa chọn lớp
  const [classOption, setClassOption] = useState<'all' | 'basic' | 'advanced' | 'custom'>('all');
  const [selectedCustomClasses, setSelectedCustomClasses] = useState<OptionType[]>([]);

  // Checkbox học kỳ
  const [isCheckedHK1, setIsCheckedHK1] = useState(true);
  const [isCheckedHK2, setIsCheckedHK2] = useState(false);

  // Phân công chấm thi
  const [gradingOption, setGradingOption] = useState<'all' | 'custom'>('all');
  const [selectedGraders, setSelectedGraders] = useState<OptionType[]>([
    { value: 'Nguyễn Văn D', label: 'Nguyễn Văn D' },
    { value: 'Trần Thị D', label: 'Trần Thị D' },
  ]);
  const [classAssignments, setClassAssignments] = useState<{ [className: string]: OptionType[] }>(() => {
    const initialState: { [className: string]: OptionType[] } = {};
    classList.forEach((cls) => {
      initialState[cls] = [];
    });
    return initialState;
  });

  // Dropdown
  const [selectedSchoolYear, setSelectedSchoolYear] = useState<DropdownOption | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<DropdownOption | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<DropdownOption | null>(null);

  const handleSchoolYearChange = (option: DropdownOption) => {
    setSelectedSchoolYear(option);
  };

  const handleGradeChange = (option: DropdownOption) => {
    setSelectedGrade(option);
  };

  const handleSubjectChange = (option: DropdownOption) => {
    setSelectedSubject(option);
  };

  const handleHK1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedHK1(event.target.checked);
  };

  const handleHK2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedHK2(event.target.checked);
  };

  const handleClassOptionChange = (option: 'all' | 'basic' | 'advanced' | 'custom') => {
    setClassOption(option);
    if (option !== 'custom') {
      setSelectedCustomClasses([]);
    }
  };

  const handleGradingOptionChange = (option: 'all' | 'custom') => {
    setGradingOption(option);
    if (option !== 'custom') {
      const clearedAssignments: { [className: string]: OptionType[] } = {};
      classList.forEach((cls) => {
        clearedAssignments[cls] = [];
      });
      setClassAssignments(clearedAssignments);
    }
  };

  const handleSelectedGradersChange = (options: any) => {
    setSelectedGraders(options as OptionType[]);
  };

  const handleClassAssignmentChange = (className: string, newValue: any) => {
    setClassAssignments((prev) => ({
      ...prev,
      [className]: newValue as OptionType[],
    }));
  };

  const handleClose = () => {
    navigate('/leadership/exams', { replace: true });
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedExamSchedule = {
      examTitle,
      duration,
      examDate,
      schoolYear: selectedSchoolYear?.value,
      grade: selectedGrade?.value,
      subject: selectedSubject?.value,
      classOption,
      customClasses: classOption === 'custom' ? selectedCustomClasses.map((cls) => cls.value) : null,
      semester: {
        hk1: isCheckedHK1,
        hk2: isCheckedHK2,
      },
      gradingOption,
      gradersForAll: selectedGraders.map((g) => g.value),
      gradersForClasses: Object.entries(classAssignments).map(([cls, teachers]) => ({
        className: cls,
        graders: teachers.map((t: OptionType) => t.value),
      })),
    };
    console.log('Updated exam schedule:', updatedExamSchedule);
    navigate('/leadership/exams');
  };

  const isSaveDisabled = !examTitle.trim() || !examDate || !selectedSubject || (gradingOption === 'all' && selectedGraders.length < 1);

  return (
    <div className="modal-overlay">
      <div className="modal-container bg-white rounded-lg shadow-lg w-full max-w-4xl scale-[0.9] max-h-[105vh] overflow-y-auto">
        <h2 className="text-center text-xl font-bold mb-4">Chỉnh sửa lịch thi</h2>
        <form onSubmit={handleSave}>
          {/* Phần thông tin chung */}
          <div className="grid grid-cols-[175px_1fr] gap-x-6 gap-y-4 items-center">
            <label className="text-right font-medium whitespace-nowrap justify-self-start">Niên khóa:</label>
            <div>
              <div className="flex items-center gap-4 justify-between">
                <Dropdown
                  options={[
                    { value: '2021-2022', label: '2021-2022' },
                    { value: '2023-2024', label: '2023-2024' },
                    { value: '2025-2026', label: '2025-2026' },
                  ]}
                  onSelect={handleSchoolYearChange}
                  selectedOption={selectedSchoolYear}
                  handleOptionClick={handleSchoolYearChange}
                  placeholder="Niên khóa"
                  border="visible"
                  borderColor="black"
                  size="short"
                  iconColor="#FF7506"
                  status="normal"
                  disabled={false}
                  showArrow={true}
                  backgroundColorSelected="rgb(79 164 204)"
                />

                <div className="flex items-center">
                  <label className="font-medium whitespace-nowrap flex-shrink-0 w-16">Khối:</label>
                  <Dropdown
                    options={[
                      { value: '9', label: 'Khối 9' },
                      { value: '10', label: 'Khối 10' },
                      { value: '11', label: 'Khối 11' },
                    ]}
                    onSelect={handleGradeChange}
                    selectedOption={selectedGrade}
                    handleOptionClick={handleGradeChange}
                    placeholder="Khối"
                    border="visible"
                    borderColor="black"
                    size="short"
                    iconColor="#FF7506"
                    status="normal"
                    disabled={false}
                    showArrow={true}
                    backgroundColorSelected="rgb(79 164 204)"
                    className="justify-end"
                  />
                </div>
              </div>
            </div>

            {/* Lớp học */}
            <label className="text-right font-medium whitespace-nowrap justify-self-start">
              Lớp học <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-[1fr_1fr_1fr_0.5fr] gap-4 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="classOption"
                  className="w-5 h-5 accent-blue-500"
                  checked={classOption === 'all'}
                  onChange={() => handleClassOptionChange('all')}
                />
                Tất cả lớp
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="classOption"
                  className="w-5 h-5 accent-blue-500"
                  checked={classOption === 'basic'}
                  onChange={() => handleClassOptionChange('basic')}
                />
                Lớp cơ bản
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="classOption"
                  className="w-5 h-5 accent-blue-500"
                  checked={classOption === 'advanced'}
                  onChange={() => handleClassOptionChange('advanced')}
                />
                Lớp nâng cao
              </label>
              <div></div>
              <label className="flex items-center gap-2 col-span-1">
                <input
                  type="radio"
                  name="classOption"
                  className="w-5 h-5 accent-blue-500"
                  checked={classOption === 'custom'}
                  onChange={() => handleClassOptionChange('custom')}
                />
                Tùy chọn
              </label>
              {classOption === 'custom' && (
                <div className="col-span-3">
                  <CustomMultiSelect
                    options={classOptions}
                    value={selectedCustomClasses}
                    onChange={(options) => setSelectedCustomClasses(options as OptionType[])}
                    placeholder="Chọn lớp"
                  />
                </div>
              )}
            </div>

            {/* Môn thi */}
            <label className="text-right font-medium whitespace-nowrap justify-self-start">
              Môn thi <span className="text-red-500">*</span>
            </label>
            <div>
              <Dropdown
                options={[
                  { value: 'toan', label: 'Toán' },
                  { value: 'ly', label: 'Lý' },
                  { value: 'hoa', label: 'Hóa' },
                ]}
                onSelect={handleSubjectChange}
                selectedOption={selectedSubject}
                handleOptionClick={handleSubjectChange}
                placeholder="Môn thi"
                border="visible"
                borderColor="black"
                iconColor="#FF7506"
                status="normal"
                disabled={false}
                showArrow={true}
                backgroundColorSelected="rgb(79 164 204)"
                headerClassName="w-full"
              />
            </div>

            {/* Tên kỳ thi */}
            <label className="text-right font-medium whitespace-nowrap justify-self-start">
              Tên kỳ thi <span className="text-red-500">*</span>
            </label>
            <div>
              <input
                type="text"
                className="border border-black rounded px-2 py-1 w-full focus:border-blue-500"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                placeholder="Nhập tên kỳ thi..."
              />
            </div>

            {/* Học kỳ */}
            <label className="text-right font-medium whitespace-nowrap justify-self-start"></label>
            <div className="flex flex-wrap items-center gap-4">
              <CheckboxComponent
                label="Học kỳ 1"
                isChecked={isCheckedHK1}
                isIndeterminate={false}
                onChange={handleHK1Change}
                customStyles={{
                  container: { display: 'flex', alignItems: 'center' },
                  label: { color: '#000', fontWeight: '500', fontSize: '14px' },
                }}
              />
              <CheckboxComponent
                label="Học kỳ 2"
                isChecked={isCheckedHK2}
                isIndeterminate={false}
                onChange={handleHK2Change}
                customStyles={{
                  container: { display: 'flex', alignItems: 'center' },
                  label: { color: '#000', fontWeight: '500', fontSize: '14px' },
                }}
              />
            </div>

            {/* Thời lượng làm bài */}
            <label className="text-right font-medium whitespace-nowrap justify-self-start">
              Thời lượng làm bài <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="border rounded px-2 py-1 w-24 focus:border-blue-500"
                value={duration}
                min={0}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
              <span className="font-medium">Phút</span>
            </div>

            {/* Ngày làm bài */}
            <label className="text-right font-medium whitespace-nowrap justify-self-start">
              Ngày làm bài <span className="text-red-500">*</span>
            </label>
            <div>
              <DateInput value={examDate} onChange={setExamDate} width="140px" />
            </div>
          </div>

          <hr className="my-4" />

          {/* PHÂN CÔNG CHẤM THI */}
          <div className="mt-4">
            <label className="font-medium text-orange-500">Phân công chấm thi</label>
            <div className="mt-2 grid grid-cols-[auto,1fr] gap-2 items-center">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-5 h-5 accent-blue-500"
                  checked={gradingOption === 'all'}
                  onChange={() => handleGradingOptionChange('all')}
                />
                <label>Áp dụng cho tất cả lớp</label>
              </div>
              <div className="relative">
                <CustomMultiSelect
                  options={graderOptions}
                  value={selectedGraders}
                  onChange={handleSelectedGradersChange}
                  placeholder={gradingOption === 'custom' ? '' : 'Chọn giáo viên'}
                  isDisabled={gradingOption === 'custom'}
                />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-[190px_1fr] gap-2 items-start">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-5 h-5 accent-blue-500"
                  checked={gradingOption === 'custom'}
                  onChange={() => handleGradingOptionChange('custom')}
                />
                <label>Tùy chọn</label>
              </div>
              {gradingOption === 'custom' && (
                <div className="flex flex-col gap-2">
                  {classList.map((cls) => (
                    <div key={cls} className="flex items-center gap-2">
                      <span className="font-semibold">{cls}</span>
                      <div className="relative flex-grow">
                        <CustomMultiSelect
                          options={graderOptions}
                          value={classAssignments[cls]}
                          onChange={(newValue) => handleClassAssignmentChange(cls, newValue)}
                          placeholder="Chọn giáo viên"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Nút Lưu / Hủy */}
          <div className="mt-6 flex justify-center gap-2">
            <Button className="secondary" size="big" onClick={handleClose} type="button">
              Hủy
            </Button>
            <Button
              className={` ${isSaveDisabled ? 'bg-[#C9C4C0] cursor-not-allowed' : 'primary'}`}
              size="big"
              type="button"
              disabled={isSaveDisabled}
            >
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExamSchedule;
