import { fetchInstance } from "../../../config";

export const deleteTeachingAssignment = async (id: number) => {
    return await fetchInstance.delete(`/teaching-assignments/${id}`);
};
