import { useEffect, useState } from 'react';
import TabSwitch from '../../../../components/TabSwitch/TabSwitch';
import { tabs } from './data';
import { useSearchParams } from 'react-router';
const right = require('../../../../assets/icons/icon-arrow-right.png');

const InstructorProfile = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('general');
  const tabFromURL = searchParams.get('tab') || 'general';
  useEffect(() => {
    setActiveTab(tabFromURL);
  }, [tabFromURL]);
  return (
    <div>
      {activeTab === 'edit' ? (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-400 text-sm">Hồ sơ giảng viên</span>
          <img src={right} alt="next" className="w-2 h-2" />
          <h1 className="text-3xl font-bold text-black">Chỉnh sửa thông tin giảng viên</h1>
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-black mb-4">Hồ sơ giảng viên</h1>
      )}

      <TabSwitch tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default InstructorProfile;
