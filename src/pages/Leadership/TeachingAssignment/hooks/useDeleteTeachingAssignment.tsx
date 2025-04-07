import { useState } from "react";
import { IconSuccessFilled, IconWarningFill } from "../../../../components/Icons";
import { deleteTeachingAssignment } from "../../../../services";
import { TeachingAssignment } from "../../../../types";


const useDeleteTeachingAssignment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [alert, setAlert] = useState<{
        message: string;
        type: "success" | "error" | "warning" | "info";
        icon: React.ReactNode;
    } | null>(null);

    const deleteAssignment = async (id: TeachingAssignment["id"], onSuccess?: (msg: string) => void) => {
        setLoading(true);
        setError(null);
        setMessage(null);
        setAlert(null);

        try {
            const response = await deleteTeachingAssignment(id);
            if (response.code === 0) {
                setMessage(response.message);
                setAlert({
                    message: response.message,
                    type: 'success',
                    icon: <IconSuccessFilled />,
                });
                onSuccess?.(response.message);
            } else {
                throw new Error(response.message || "Xóa thất bại!");
            }
        } catch (err: any) {
            setError(err.message || "Xóa thất bại!");
            setAlert({
                message: err.message || "Xóa thất bại!",
                type: 'error',
                icon: <IconWarningFill />,
            });
        } finally {
            setLoading(false);
        }
    };

    return { deleteAssignment, loading, error, message, alert };
};

export default useDeleteTeachingAssignment;
