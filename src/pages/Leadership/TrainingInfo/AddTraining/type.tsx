export interface TrainingProgramForm {
    lecturer: string;
    institution: string;
    major: string;
    startDate: string;
    isCompleted: boolean;
    endDate: string;
    method: string;
    certificate: string;
    attachment: File | null;
}