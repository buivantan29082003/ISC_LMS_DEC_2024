import { fetchInstance } from "../../../config";

export const getTeachingAssignments = async (page: number, pageSize: number) => {
    return await fetchInstance.get(`/teaching-assignments?page=${page}&pageSize=${pageSize}`);
};

