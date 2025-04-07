// Định nghĩa kiểu dữ liệu
export interface SearchData {
  subject: string;
  class: string;
  classId: string;
  startTime: string;
  startHour: string;
}

// Định nghĩa kiểu cho từng option trong Dropdown
export interface IFileOption {
    value: string;
    label: string;
  }