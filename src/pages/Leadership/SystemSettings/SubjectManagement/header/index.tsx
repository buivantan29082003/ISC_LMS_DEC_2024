import Dropdown from '../../../../../components/Dropdown';
import { DropdownOption } from '../../../../../components/Dropdown/type';
import Button from '../../../../../components/Button';
import plus from '../../../../../assets/icons/Plus.jpg';
import Breadcrumb from '../../../../../components/AddressUrlStack/Index';
import { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const ClassManagementHeader: React.FC = () => {
  const [selectedYearOption, setSelectedYearOption] = useState<DropdownOption | null>(null);
  const [yearOptions, setYearOptions] = useState<DropdownOption[]>([]);

  // Gọi API lấy danh sách niên khóa
  useEffect(() => {
    const fetchAcademicYears = async () => {
      try {
        const response = await axios.get('https://fivefood.shop/api/academic-years');
        console.log('Dữ liệu API trả về (niên khóa):', response.data);

        if (!response.data || !Array.isArray(response.data.data)) {
          throw new Error('API không trả về danh sách niên khóa hợp lệ');
        }

        const formattedYears = response.data.data.map((year: any) => ({
          label: year.name,
          value: year.id.toString(),
        }));

        setYearOptions(formattedYears);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách niên khóa:', error);
      }
    };

    fetchAcademicYears();
  }, []);

  const addresses = [
    { linkName: 'Cài đặt hệ thống', link: '/' },
    { linkName: 'Thiết lập môn học', link: '/' },
  ];

  return (
    <>
      <div className="breadcrum ml-5">
        <Breadcrumb addressList={addresses} type={true} />
      </div>
      <div className="flex justify-between items-center pt-6 pl-3 mb-6 mr-[65px]">
        {/* Dropdown */}
        <div className="dropdown">
          <Dropdown
            placeholder="Niên khóa"
            size="short"
            options={yearOptions}
            selectedOption={selectedYearOption}
            onSelect={(option) => setSelectedYearOption(option)}
            handleOptionClick={(option) => setSelectedYearOption(option)} // Thêm dòng này
          />
        </div>

        <div className="flex justify-end">
          <Button className="primary" size="big">
            <img src={plus} alt="" />
            Thêm mới
          </Button>
        </div>
      </div>
    </>
  );
};

export default ClassManagementHeader;
