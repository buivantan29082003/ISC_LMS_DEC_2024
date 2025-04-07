import { TableColumn } from "./type";


export const columns: TableColumn[] = [
    { key: "id", label: "ID" },
    { key: "classId", label: "Mã lớp" },
    { key: "startDate", label: "Ngày bắt đầu", isDate: true },
    { key: "endDate", label: "Ngày kết thúc", isDate: true },
 
];
