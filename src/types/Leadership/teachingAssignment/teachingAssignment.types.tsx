export interface TeachingAssignment {
    id: number;
    startDate: string;
    endDate: string;
    description: string;
    userId: number;
    classId: number;
    subjectId: number;
    topicsId: number;
    active: boolean;
}

export interface TeachingAssignmentResponse {
    code: number;
    message: string;
    data: TeachingAssignment[];
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}
