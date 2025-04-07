export interface Course {
  name: string;
  class: string;
  day: string;
  time: string;
  duration: string;
  status: 'Đã hoàn thành' | 'Chưa hoàn thành';
}
