import SwitchTag from '../../../../components/SwitchTag';
import Dropdown from '../../../../components/Dropdown';
import { DropdownOption } from '../../../../components/Dropdown/type';
import Button from '../../../../components/Button';
import Breadcrumb from '../../../../components/AddressUrlStack/Index';
import { useState } from 'react';
import '../style.scss';
import '../../../../styles/_variables.scss';

const StudyProcessHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const options = {
    labels: ['Thông tin chung', 'quá trình học tập'],
    paths: ['', ''],
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const [selectedGradeOption, setSelectedGradeOption] = useState<DropdownOption | null>(null);
  const [selectedYearOption, setSelectedYearOption] = useState<DropdownOption | null>(null);

  const gradeOptions: DropdownOption[] = [
    { label: 'Khối 1', value: 'grade-1' },
    { label: 'Khối 2', value: 'grade-2' },
    { label: 'Khối 3', value: 'grade-3' },
    { label: 'Khối 4', value: 'grade-4' },
  ];

  const yearOptions: DropdownOption[] = [
    { label: '2023-2024', value: '2023-2024' },
    { label: '2024-2025', value: '2024-2025' },
  ];

  const handleClick = () => {
    alert('Button clicked!');
  };

  const buttonStyle = {
    backgroundColor: 'var(--background-while)',
    color: 'var(--orange-text)',
    border: '1px solid var(--background-4)',
  };

  const addresses = [
    { linkName: 'Hồ sơ học viên', link: '/' },
    { linkName: 'Quá trình học tập', link: '/' },
  ];

  return (
    <>
      <div className="breadcrum ml-5">
        <Breadcrumb addressList={addresses} type={true} />
      </div>
      <div className="tab-dropdown-btn">
        <div className="tab">
          <SwitchTag
            options={options}
            // activeTab={activeTab}
            // handleTabClick={handleTabClick}
          />
        </div>
        <div className="dropdown">
          <Dropdown
            placeholder="Tất cả khối"
            size="short"
            options={gradeOptions}
            selectedOption={selectedGradeOption}
            onSelect={(option) => setSelectedGradeOption(option)}
            handleOptionClick={(option) => setSelectedGradeOption(option)}
          />
          <Dropdown
            placeholder="Niên khóa"
            size="short"
            options={yearOptions}
            selectedOption={selectedYearOption}
            onSelect={(option) => setSelectedYearOption(option)}
            handleOptionClick={(option) => setSelectedYearOption(option)}
          />
        </div>
        <div className="btn">
          <Button style={buttonStyle} width={'160'} height={'52'} onClick={handleClick}>
            Xuất file
          </Button>
        </div>
      </div>
    </>
  );
};

export default StudyProcessHeader;
