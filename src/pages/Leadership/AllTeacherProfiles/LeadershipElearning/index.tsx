import createAxiosInstance from '../../../../utils/axiosInstance';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const avatar = require('../../../../assets/images/Frame 19.png');

const TeacherProfile = () => {
  const [teacherData, setTeacherData] = useState<any | null>(null);
  const [teacherInfo, setTeacherInfo] = useState<any | null>(null);
  const [teacherFamily, setTeacherFamily] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); 

  useEffect(() => {
    const axiosInstance = createAxiosInstance();

    const fetchData = async () => {
      try {
        const [teacherRes, infoRes, familyRes] = await Promise.all([
          axiosInstance.get(`https://fivefood.shop/api/teacherlists/${id}`),
          axiosInstance.get(`https://fivefood.shop/api/teacherinfos/${id}`),
          axiosInstance.get(`https://fivefood.shop/api/teacherfamilies/${id}`),
        ]);

        if (teacherRes.data.code === 0) {
          setTeacherData(teacherRes.data.data);
        } else {
          throw new Error('Lỗi khi tải dữ liệu giảng viên');
        }

        if (infoRes.data.code === 0) {
          setTeacherInfo(infoRes.data.data);
        } else {
          throw new Error('Lỗi khi tải thông tin giảng viên');
        }

        if (familyRes.data.code === 0) {
          setTeacherFamily(familyRes.data.data);
        } else {
          throw new Error('Lỗi khi tải thông tin gia đình');
        }
      } catch (err) {
        setError('Lỗi khi tải dữ liệu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (teacherData && teacherInfo && teacherFamily) {
      console.log('Teacher Data:', teacherData);
      console.log('Teacher Info:', teacherInfo);
      console.log('Teacher Family:', teacherFamily);
    }
  }, [teacherData, teacherInfo, teacherFamily]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {teacherData && (
        <>
          <div className="overflow-x-auto bg-white flex-grow px-4 md:px-10">
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="bg-background-2 text-white p-4 text-lg">Thông tin chung</div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <img src={avatar} alt="Avatar" className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="text-orange-600 font-bold">Thông tin giảng viên</h2>
                  <p>
                    <strong className="text-gray-500">Mã giảng viên:</strong>
                    <span className="text-gray-500">{teacherData?.teacherCode || 'Không có'}</span>
                  </p>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked className="form-checkbox text-blue-500" />
                    Sinh mã tự động
                  </label>
                  <p>
                    {' '}
                    <strong className="text-gray-500">Tổ - Bộ môn:</strong>
                    <span className="text-gray-500">{teacherData?.subjectGroupName || 'Không có'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Môn giảng dạy:</strong>{' '}
                    <span className="ml-4 text-gray-500">{teacherData.position || 'Không có'}</span>
                  </p>
                  <p>
                    {' '}
                    <strong className="text-gray-500">Họ và Tên:</strong>{' '}
                    <span className="ml-14 text-gray-500">{teacherData.fullName || 'Không có'}</span>
                  </p>
                  <p>
                    {' '}
                    <strong className="text-gray-500">Ngày sinh:</strong>{' '}
                    <span className="ml-14 text-gray-500">{teacherData.birthDate || 'Không có'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Giới tính:</strong>{' '}
                    <span className="ml-16 text-gray-500">{teacherData?.gender ? 'Nam' : 'Nữ'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Dân tộc:</strong>{' '}
                    <span className="ml-20 text-gray-500">{teacherData.ethnicity || 'Không có'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Ngày vào trường:</strong>
                    <span className="ml-1 text-gray-500">{teacherData.issueDate || 'Không có'}</span>
                  </p>
                </div>

                <div className="flex-1">
                  <p>
                    <strong className="text-gray-500">Quốc tịch:</strong>
                    <span className="text-gray-500">{teacherData?.nationality || 'Không có'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Tôn giáo:</strong>
                    <span className="text-gray-500">{teacherData?.religion || 'Không có'}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <strong className="text-gray-500">Trạng thái:</strong>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">{teacherData?.status ? '● Đang giảng dạy' : 'Nghỉ'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Môn kiêm nhiệm:</strong>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block">Vật lý</span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block">Toán</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Bí danh:</strong> <span className="text-gray-500">{teacherData.alias || 'Không có'}</span>
                  </p>
                </div>

                <div className="flex-1">
                  <h2 className="text-orange-600 font-bold">Địa chỉ liên hệ</h2>
                  <p>
                    <strong className="text-gray-500">Địa chỉ:</strong>{' '}
                    <span className="text-gray-500">{teacherInfo?.addressFull || 'Không có'}</span>
                  </p>
                  <p>
                    <strong className="text-gray-500">Email:</strong> <span className="text-gray-500">{teacherData?.email || 'Không có'}</span>{' '}
                  </p>
                  <p>
                    <strong className="text-gray-500">SDT:</strong> <span className="text-gray-500">{teacherData?.phone || 'Không có'}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden mb-6 flex flex-col items-center px-6 py-4">
              <div className="p-6 w-full max-w-5xl">
                <strong className="text-orange-text block mb-4 sm:text-left">Thông tin cá nhân</strong>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Cột 1 */}
                  <div className="grid gap-2">
                    <div>
                      <strong className="text-gray-500">CMND/CCCD:</strong> <span>{teacherInfo?.cccd || 'Không có'}</span>
                    </div>
                    <div>
                      <strong className="text-gray-500">Ngày cấp:</strong> <span>{teacherInfo?.issuedDate || 'Không có'}</span>
                    </div>
                    <div>
                      <strong className="text-gray-500">Nơi cấp:</strong> <span>{teacherInfo?.issuedPlace || 'Không có'}</span>
                    </div>
                  </div>

                  {/* Cột 2 */}
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={teacherInfo?.unionMember || false} readOnly />
                      <span className="text-gray-500">Đoàn viên</span>
                    </div>
                    <div>
                      <strong className="text-gray-500">Ngày vào Đoàn:</strong> <span>{teacherInfo?.unionDate || 'Không có'}</span>
                    </div>
                    <div>
                      <strong className="text-gray-500">Nơi vào Đoàn:</strong> <span>{teacherInfo?.unionPlace || 'Không có'}</span>
                    </div>
                  </div>

                  {/* Cột 3 */}
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={teacherInfo?.partyMember || false} readOnly />
                      <span className="text-gray-500">Đảng viên</span>
                    </div>
                    <div>
                      <strong className="text-gray-500">Ngày vào Đảng:</strong> <span>{teacherInfo?.partyDate || 'Không có'}</span>
                    </div>
                    <div>
                      <strong className="text-gray-500">Nơi vào Đảng:</strong> <span>{teacherData.partyJoinDate || 'Không có'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden mb-6 p-6 bg-white shadow-md">
              <strong className="text-orange-text block mb-4 sm:text-left text-lg">Thông tin gia đình</strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Người liên hệ 1 */}
                <div className="grid gap-2">
                  <p>
                    <strong className="text-gray-600">Người liên hệ:</strong>
                    <span className="text-gray-700 ml-2">{teacherFamily?.guardianName}</span>
                  </p>
                  <p>
                    <strong className="text-gray-600">Địa chỉ:</strong>
                    <span className="text-gray-700 ml-2">{teacherFamily?.guardianAddressFull}</span>
                  </p>
                  <p>
                    <strong className="text-gray-600">SĐT:</strong>
                    <span className="text-gray-700 ml-2">{teacherFamily?.guardianPhone}</span>
                  </p>
                </div>
                {/* Người liên hệ 2 */}
                <div className="grid gap-2">
                  <p>
                    <strong className="text-gray-600">Người liên hệ 2:</strong>
                    <span className="text-gray-700 ml-2">{teacherFamily?.name1}</span>
                  </p>
                  <p>
                    <strong className="text-gray-600">Địa chỉ:</strong>
                    <span className="text-gray-700 ml-2">{teacherData?.address1}</span>
                  </p>
                  <p>
                    <strong className="text-gray-600">SĐT:</strong>
                    <span className="text-gray-700 ml-2">{teacherData?.phone1}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherProfile;
