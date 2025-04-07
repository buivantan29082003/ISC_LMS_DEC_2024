import { TableColumn } from "./type";

export const columns: TableColumn[] = [
  { key: "studentCode", label: "Mã học sinh" },
  { key: "studentName", label: "Tên học sinh" },
  { key: "dateOfBirth", label: "Ngày sinh", isDate: true },
  { key: "gender", label: "Giới tính" },
  { key: "transferFrom", label: "Chuyển từ" },
  { key: "transferSemester", label: "Học kỳ chuyển" },
  { key: "grade", label: "Khối" },
  { key: "transferDate", label: "Ngày chuyển", isDate: true },
];
