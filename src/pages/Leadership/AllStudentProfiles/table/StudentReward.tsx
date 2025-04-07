import React from 'react';

interface StudentReward {
  studentId: string;
  name: string;
  birthDate: string;
  gender: string;
  rewardCount: number;
}

const StudentRewardsTable: React.FC = () => {
  const rewardData: StudentReward[] = [
    {
      studentId: '20206A',
      name: 'Trần Trung',
      birthDate: '10/10/2002',
      gender: 'Nam',
      rewardCount: 2,
    },
    {
      studentId: '20206A',
      name: 'Nguyễn Ngọc Tuyết',
      birthDate: '10/10/2002',
      gender: 'Nữ',
      rewardCount: 2,
    },
    // Add more student reward data as needed
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mr-7">
      <table className="w-full">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Mã học viên</th>
            <th className="px-4 py-3 text-left">Tên học viên</th>
            <th className="px-4 py-3 text-left">Ngày sinh</th>
            <th className="px-4 py-3 text-left">Giới tính</th>
            <th className="px-4 py-3 text-left">Số lần khen thưởng</th>
            <th className="px-4 py-3 text-right">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {rewardData.map((student, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 transition-colors">
              <td className="px-4 py-3">{student.studentId}</td>
              <td className="px-4 py-3">{student.name}</td>
              <td className="px-4 py-3">{student.birthDate}</td>
              <td className="px-4 py-3">{student.gender}</td>
              <td className="px-4 py-3">{student.rewardCount}</td>
              <td className="px-4 py-3 text-right">
                <button className="text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50">
        <span className="text-sm text-gray-600">Hiển thị 8 hàng trong mỗi trang</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&lt;</button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">...</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">100</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default StudentRewardsTable;
