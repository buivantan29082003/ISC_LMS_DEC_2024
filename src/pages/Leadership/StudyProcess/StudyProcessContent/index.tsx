import SwitchTag from '../../../../components/SwitchTag';
import Collapsible from '../../../../components/Collapsible';
import '../style.scss';
import data, { summaryData, academicHonorRoll } from './data';
import { useState } from 'react';
import search from '../../../../assets/icons/fi_search.png';
import edit from '../../../../assets/icons/fi_edit.png';
import trash from '../../../../assets/icons/fi_trash-2.png';
import { Link } from 'react-router';

const StudyProcessContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const options = {
    labels: ['Học kỳ I', 'Học kỳ II'],
    paths: ['', ''],
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="class-info-container">
        <div className="class-info-box">
          <h3 className="title">Thông tin chung</h3>
          <div className="content">
            <div className="info-column">
              <p>
                <strong>Niên khóa:</strong> 2020 - 2021
              </p>
              <p>
                <strong>Khoa - Khối:</strong> Khối 6
              </p>
              <p>
                <strong>Mã lớp học:</strong> 2020-6A1
              </p>
              <p>
                <strong>Tên lớp học:</strong> 6A1
              </p>
            </div>
            <div className="info-column">
              <p>
                <strong>Giáo viên chủ nhiệm:</strong> Phạm Thị B
              </p>
              <p>
                <strong>Số lượng học viên:</strong> 45 học viên
              </p>
              <p>
                <strong>Loại lớp học:</strong> Lớp học căn bản
              </p>
              <p>
                <strong>Số lượng môn học:</strong> 10 môn học
              </p>
            </div>
            <div className="info-description">
              <p>
                <strong>Mô tả:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus quam vel aliquam lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="collapsible">
        <Collapsible title="Kết quả học tập">
          <p>
            <div className="p-4">
              <table className="w-full text-white bg-icon-color shadow-custom rounded-lg">
                <thead>
                  <tr>
                    {summaryData.map((item, index) => (
                      <th key={index} className="border p-2 font-Mulish text-Mulish-3 leading-Mulish-3">
                        {item.semester}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white text-black">
                  <tr>
                    {summaryData.map((item, index) => (
                      <td className="border p-2">
                        <div className="flex flex-row justify-around">
                          <div className="flex flex-col text-left">
                            <span className="font-bold pb-4 text-user-color font-Mulish text-Mulish-4 leading-Mulish-4">Học lực</span>
                            <span
                              key={index}
                              className={`font-Source-Sans-Pro text-Source-Sans-Pro-1 leading-Source-Sans-Pro-2 font-Source-Sans-Pro-3 ${
                                item.semester === 'Cả năm' ? 'text-green-500' : ''
                              }`}
                            >
                              {item.hocLuc}
                            </span>
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold pb-4 text-user-color font-Mulish text-Mulish-4 leading-Mulish-4">Hạnh kiểm</span>
                            <span
                              key={index}
                              className={`font-Source-Sans-Pro text-Source-Sans-Pro-1 leading-Source-Sans-Pro-2 font-Source-Sans-Pro-3 ${
                                item.semester === 'Cả năm' ? 'text-green-500' : ''
                              }`}
                            >
                              {item.hanhKiem}
                            </span>
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold pb-4 text-user- font-Mulish text-Mulish-4 leading-Mulish-4">Điểm trung bình</span>
                            <span
                              key={index}
                              className={`font-Source-Sans-Pro text-Source-Sans-Pro-1 leading-Source-Sans-Pro-2 font-Source-Sans-Pro-3 ${
                                item.semester === 'Cả năm' ? 'text-green-500' : ''
                              }`}
                            >
                              {item.avg}
                            </span>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 SwitchTag-StudyProcessContent">
                <SwitchTag
                  options={options}
                  // activeTab={activeTab}
                  // handleTabClick={handleTabClick}
                />
              </div>

              <table className="w-full mt-4 border-collapse shadow-custom rounded-lg">
                <thead>
                  <tr className="bg-icon-color text-white">
                    <th className="border rounded-tl-lg p-2 font-Mulish text-Mulish-4 leading-Mulish-4">Môn học</th>
                    <th className="p-2 font-Mulish font-Mulish text-Mulish-4 leading-Mulish-4">Chuyên cần</th>
                    <th className="p-2 font-Mulish font-Mulish text-Mulish-4 leading-Mulish-4">Kiểm tra đầu giờ</th>
                    <th className="p-2 font-Mulish font-Mulish text-Mulish-4 leading-Mulish-4">15 phút</th>
                    <th className="p-2 font-Mulish font-Mulish text-Mulish-4 leading-Mulish-4">45 phút</th>
                    <th className="p-2 font-Mulish font-Mulish text-Mulish-4 leading-Mulish-4">Cuối kỳ</th>
                    <th className="border rounded-tr-lg p-2 font-Mulish font-Mulish text-Mulish-4 leading-Mulish-4">Điểm trung bình</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="text-center">
                      {/* Môn học */}
                      <td
                        className={`border-r border-b-0 p-3 font-Source-Sans-Pro text-Source-Sans-Pro-1 leading-Source-Sans-Pro-1 font-Source-Sans-Pro-2 ${
                          index === data.length - 1 ? '' : 'table-cell'
                        }`}
                      >
                        {row.subject}
                      </td>

                      {/* Các điểm số */}
                      {row.scores.map((score, idx) => (
                        <td
                          key={idx}
                          className={`border-b-0 p-3 font-Source-Sans-Pro text-Source-Sans-Pro-1 leading-Source-Sans-Pro-1 font-Source-Sans-Pro-2 ${
                            index === data.length - 1 ? '' : 'table-cell'
                          }`}
                        >
                          {score}
                        </td>
                      ))}

                      {/* Điểm trung bình */}
                      <td
                        className={`border-l border-b-0 p-3 font-Source-Sans-Pro text-Source-Sans-Pro-1 leading-Source-Sans-Pro-1 font-Source-Sans-Pro-1${
                          row.average >= 7 ? 'text-green-500' : 'text-red-500'
                        } ${index === data.length - 1 ? '' : 'table-cell'}`}
                      >
                        {row.average}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </p>
        </Collapsible>
      </div>
      <div className="collapsible">
        <Collapsible title="Danh sách khen thưởng">
          <p>
            <div className="search-container float-right">
              <button className="search-button">
                <img src={search} alt="search" className="icon-search" />
              </button>
              <input type="text" className="search-input" placeholder="Tìm kiếm..." />
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-gray-300">
              <div className="max-h-64 overflow-y-auto custom-scrollbar">
                <table className="w-full border-collapse">
                  <thead className="bg-black-text text-white  sticky top-0 z-10">
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-left">Nội dung Kỷ luật</th>
                      <th className="text-left">Quyết định Kỷ luật</th>
                      <th className="text-left">Ngày quyết định</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicHonorRoll.map((student, index) => (
                      <tr key={student.stt} className="odd:bg-gray-100 even:bg-gray-200">
                        <td className="text-center">{student.stt}</td>
                        <td className="text-left break-words">{student.content}</td>
                        <td className="text-left">{student.decision}</td>
                        <td className="text-left">{student.date}</td>
                        <td className="text-center flex">
                          <Link to="update-discipline" className="p-1">
                            <img src={edit} alt="edit" className="w-5 h-5" />
                          </Link>
                          <Link to={`/delete/${student.stt}`} className="p-1">
                            <img src={trash} alt="trash" className="w-5 h-5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </p>
        </Collapsible>
      </div>
      <div className="collapsible">
        <Collapsible title="Danh sách kỷ luật">
          <p>
            <div className="search-container float-right">
              <button className="search-button">
                <img src={search} alt="search" className="icon-search" />
              </button>
              <input type="text" className="search-input" placeholder="Tìm kiếm..." />
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-gray-300">
              <div className="max-h-64 overflow-y-auto custom-scrollbar">
                <table className="w-full border-collapse">
                  <thead className="bg-black-text text-white  sticky top-0 z-10">
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-left">Nội dung Kỷ luật</th>
                      <th className="text-left">Quyết định Kỷ luật</th>
                      <th className="text-left">Ngày quyết định</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicHonorRoll.map((student, index) => (
                      <tr key={student.stt} className="odd:bg-gray-100 even:bg-gray-200">
                        <td className="text-center">{student.stt}</td>
                        <td className="text-left break-words">{student.content}</td>
                        <td className="text-left">{student.decision}</td>
                        <td className="text-left">{student.date}</td>
                        <td className="text-center flex">
                          <Link to="update-discipline" className="p-1">
                            <img src={edit} alt="edit" className="w-5 h-5" />
                          </Link>
                          <Link to={`/delete/${student.stt}`} className="p-1">
                            <img src={trash} alt="trash" className="w-5 h-5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </p>
        </Collapsible>
      </div>
    </>
  );
};

export default StudyProcessContent;
