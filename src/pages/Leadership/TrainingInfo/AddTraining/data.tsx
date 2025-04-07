import { TrainingProgramForm } from "./type";

export const initialFormState: TrainingProgramForm = {
    lecturer: "Huỳnh Quốc Đại",
    institution: "",
    major: "",
    startDate: "",
    isCompleted: true,
    endDate: "",
    method: "",
    certificate: "",
    attachment: null,
};

export const options = [
    { value: "option1", label: "Lựa chọn 1" },
    { value: "option2", label: "Lựa chọn 2" },
    { value: "option3", label: "Lựa chọn 3" },
];
