import React, { useState } from 'react';
import AllTest from './AllTest';
import TestFinal from './TestFinal';
import TestUpComing from './TestUpComing';
const TestList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Tất cả bài kiểm tra', component: <AllTest /> },
    { id: 1, title: 'Bài kiểm tra sắp tới', component: <TestUpComing /> },
    { id: 2, title: 'Bài kiểm tra đã hoàn thành', component: <TestFinal /> },
  ];
  return (
    <>
      <div className="w-full mx-auto p-4">
        {/* Tab Buttons */}
        <div className="flex border-b border-white h-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-6 font-medium transition duration-300 focus:outline-none
        ${
          activeTab === tab.id
            ? 'bg-background-orange-1 text-white border border-border-orange rounded-t-lg'
            : 'bg-white text-black border border-orange-300 rounded-t-lg hover:bg-border-orange'
        }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 bg-white shadow-md rounded-b-lg border border-white">{tabs[activeTab].component}</div>
      </div>
    </>
  );
};

export default TestList;
