import { WorkHistory } from './Types';

export const workHistoryData: WorkHistory[] = [
  {
    id: 1,
    organization: 'Trường Đại học Công nghệ',
    position: 'Giảng viên',
    startDate: '2020-08-15',
    endDate: '2022-06-30',
    isCurrent: false,
    subjectGroupsId: 101,
    teacherId: 201,
  },
  {
    id: 2,
    organization: 'Trường THPT Nguyễn Du',
    position: 'Giáo viên môn Toán',
    startDate: '2018-09-01',
    endDate: '2021-06-30',
    isCurrent: false,
    subjectGroupsId: 102,
    teacherId: 202,
  },
  {
    id: 3,
    organization: 'Trường Đại học XYZ',
    position: 'Giảng viên thỉnh giảng',
    startDate: '2022-09-01',
    endDate: '2023-12-31',
    isCurrent: false,
    subjectGroupsId: 103,
    teacherId: 203,
  },
  {
    id: 4,
    organization: 'Trường Đại học ABC',
    position: 'Giảng viên chính',
    startDate: '2023-01-01',
    endDate: '',
    isCurrent: true,
    subjectGroupsId: 104,
    teacherId: 204,
  },
];
