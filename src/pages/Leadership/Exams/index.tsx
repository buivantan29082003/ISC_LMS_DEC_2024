import React, { useState } from 'react';
import SwitchTabCustom from '../../../components/SwitchTabCustom';
import Button from '../../../components/Button';
import ManageExamSchedule from './ManageExamSchedule/ExamSchedule';
import ExamPage from './ExamListTable';
import DropdownSelectionComponent from '../../../components/DropdownSelection';
import { useNavigate } from 'react-router-dom';

const ExamSchedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('table');
  const navigate = useNavigate();

  // Danh sách tab
  const tabs = [
    { label: 'Xem theo bảng', value: 'table', content: <ManageExamSchedule /> },
    { label: 'Xem theo lịch', value: 'calendar', content: <ExamPage /> },
  ];

  const option_date = ['2020-2021', '2019-2020', '2018-2019', '2017-2018'];
  const option_selectClass = ['6A', '6B', '6C'];
  const option_selectBlock = ['Khối 6', 'Khối 7', 'Khối 8'];
  // Hàm đổi tab
  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const getActiveTabContent = () => {
    const foundTab = tabs.find(function (tab) {
      return tab.value === activeTab;
    });
    return foundTab ? foundTab.content : null;
  };
  const goCreate = () => {
    navigate(`/leadership/exams/create-exam-schedule`);
  };

  return (
    <div>
      <h1 className="text-[#373839] text-5xl font-bold mb-8">Quản lý lịch thi</h1>
      <div className=" flex items-center gap-4 mt-4">
        <div className="flex gap-4">
          <DropdownSelectionComponent label="Niên khóa" options={option_date} width={144} />
          <DropdownSelectionComponent label="Chọn lớp" options={option_selectClass} width={144} />
          <DropdownSelectionComponent label="Chọn khối" options={option_selectBlock} width={144} />
        </div>
        <SwitchTabCustom className="h-[48px]" tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="flex-grow"></div>

        <Button className="primary" size="big" onClick={goCreate}>
          <span className="text-lg">+</span> Thêm mới
        </Button>
      </div>

      {/* Nội dung tab */}
      <div className="mt-4">{getActiveTabContent()}</div>
    </div>
  );
};

export default ExamSchedule;
