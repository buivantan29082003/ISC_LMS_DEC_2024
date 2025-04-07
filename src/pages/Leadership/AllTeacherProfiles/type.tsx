export interface ILecturerProfile {
    id: string;
    name: string;
    dob: string;
    gender: string;
    department: string;
    position: string;
    status: string;
}
export interface ResignationFormProps {
    ngayNghi: string;
    ghiChu: string;
    quyetDinhNghiViec: File | null;
    onCancel: () => void;
    onSubmit: (data: { ngayNghi: string; ghiChu: string; quyetDinhNghiViec: File | null }) => void;
}
