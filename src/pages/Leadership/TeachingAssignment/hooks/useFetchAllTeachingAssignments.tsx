import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTeachingAssignments } from "../../../../services";
import { TeachingAssignment } from "../../../../types";
const useFetchTeachingAssignments = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const cache = useRef<Map<string, TeachingAssignment[]>>(new Map());

    const searchParams = new URLSearchParams(location.search);
    const initialPage = Number(searchParams.get("page")) || 1;
    const initialPageSize = Number(searchParams.get("pageSize")) || 8;

    const [data, setData] = useState<TeachingAssignment[]>([]);
    const [page, setPage] = useState(initialPage);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (page: number, pageSize: number) => {
        const cacheKey = `${page}-${pageSize}`;

        if (cache.current.has(cacheKey)) {
            setData(cache.current.get(cacheKey) || []);
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            const result = await getTeachingAssignments(page, pageSize);
            if (result.code === 0) {
                cache.current.set(cacheKey, result.data);
                setTimeout(() => {
                    setData(result.data);
                    setTotalPages(result.totalPages);
                    setLoading(false);
                }, 2000);
            } else {
                throw new Error(result.message);
            }
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams();
        params.set("page", page.toString());
        navigate({ search: params.toString() }, { replace: true });

        fetchData(page, pageSize);
    }, [navigate, page, pageSize]);

    return { data, page, pageSize, totalPages, loading, error, setPage, setPageSize };
};

export default useFetchTeachingAssignments;

