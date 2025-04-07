import React, { useState, useEffect } from 'react';
import minus from '../../../../assets/icons/icon_minus.png';
import plus from '../../../../assets/icons/icon_plus.png';
import caretdown from '../../../../assets/icons/caret_down.png';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import { Subject, SubjectGroup, Teacher } from './type';
import createAxiosInstance from '../../../../utils/axiosInstance';
import AlertwithIcon from '../../../../components/AlertwithIcon';
const axiosInstance = createAxiosInstance(true);

const API_URL = process.env.REACT_APP_API_URL;

const DepartmentSettings: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [subjectGroup, setSubjectGroup] = useState<SubjectGroup | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [teacherList, setTeacherList] = useState<Teacher[]>([]);
  const [hiddenSubjects, setHiddenSubjects] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9999);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/subject-groups/${id}`)
        .then((response) => setSubjectGroup(response.data.data))
        .catch((error) => console.error('Error fetching department data:', error));
    }
  }, [id]);

  useEffect(() => {
    if (subjectGroup?.teacherId) {
      axiosInstance.get(`${API_URL}/teacherlists`, {
        params: { page, pageSize, sortColumn, sortOrder, search },
      })
        .then((response) => {
          setTeacherList(response.data.data)
          console.log("teacher: ", teacherList);
        }
        )
        .catch((error) => console.error('Error fetching department data:', error));
    }
  }, [subjectGroup]);


  useEffect(() => {
    if (subjectGroup?.id) {
      axios.get(`${API_URL}/subjects/get-by-subject-group?subjectGroupId=${id}`)
        .then((response) => setSubjects(response.data.data))
        .catch((error) => console.error('Error fetching subjects:', error));
    }
  }, [subjectGroup]);

  const handleHideSubject = (subjectId: number) => {
    setHiddenSubjects((prevHidden) => [...prevHidden, subjectId]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subjectGroup) {
      setAlert({ message: "Chưa có dữ liệu tổ - bộ môn", type: "error" });
      return;
    }

    const selectedTeacherId = Number((document.getElementById("teacher-select") as HTMLSelectElement)?.value);
    const visibleSubjectIds = subjects
      .filter((subject) => !hiddenSubjects.includes(subject.id))
      .map((subject) => subject.id);

    const updateData = {
      name: subjectGroup.name,
      teacherId: selectedTeacherId,
      subjectId: visibleSubjectIds || [],
    };

    console.log("Cập nhật dữ liệu:", updateData);

    try {
      await axiosInstance.put(`${API_URL}/subject-groups/${id}`, updateData, {
        headers: { "Content-Type": "application/json" },
      });

      if (hiddenSubjects.length > 0) {
        await Promise.all(
          hiddenSubjects.map(async (subjectId) => {
            await axiosInstance.delete(`${API_URL}/subject-groups/delete-subject`, {
              params: { subjectGroupId: id, subjectId: subjectId },
            });
          })
        );
      }

      setAlert({ message: " Cập nhật thành công!", type: "success" });
    } catch (error: any) {
      console.error("Lỗi khi cập nhật:", error.response?.data || error.message);
      setAlert({ message: ` Cập nhật thất bại!`, type: "error" });
    }
  };

  useEffect(() => {
    console.log("Danh sách giáo viên đã cập nhật:", teacherList);

  }, [teacherList]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="fixed top-10 right-5 flex justify-end z-[100]">
        {alert && (
          <AlertwithIcon
            message={alert.message}
            type={alert.type}
            icon=""
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white rounded-2xl w-full max-w-3xl shadow-lg">
        <form className="w-full pt-3 px-6 md:px-[60px] pb-10" onSubmit={handleSubmit}>
          <h2 className="text-black-text text-center text-2xl font-bold mb-5">Thiết lập Tổ - Bộ môn</h2>

          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <label className="md:w-3/12 w-full text-black-text font-bold text-base mb-2 md:mb-0">Tổ - Bộ môn:</label>
            <input
              type="text"
              className="w-full md:w-9/12 p-2 border border-gray-300 rounded-lg text-black-text cursor-pointer"
              value={subjectGroup ? subjectGroup.name : "Chưa có dữ liệu"}
              readOnly
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <label className="md:w-3/12 w-full text-black-text font-bold text-base mb-2 md:mb-0">Trưởng tổ - Bộ môn:</label>
            <div className="relative w-full md:w-9/12">
              <select id="teacher-select" className="w-full p-2 border border-gray-300 rounded-lg text-black-text appearance-none">
                {teacherList.length > 0 ? (
                  teacherList.map((teacher, index) => (
                    <option key={index} value={teacher.id} selected={teacher.id === subjectGroup?.teacherId}>
                      {teacher.fullName}
                    </option>
                  ))
                ) : (
                  <option>Không có dữ liệu</option>
                )}
              </select>
              <img src={caretdown} alt="Dropdown" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none" />
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col items-start w-full">
            <p className="text-orange-text font-bold text-base mb-1">Danh sách môn học</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {subjects.length > 0 ? (
                subjects
                  .filter((subject) => !hiddenSubjects.includes(subject.id))
                  .map((subject, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-lg text-sm">
                      <img src={minus} alt="Remove" className="w-5 cursor-pointer" onClick={() => handleHideSubject(subject.id)} />
                      <span>{subject.name}</span>
                    </div>
                  ))
              ) : (
                <div className="flex items-center gap-3 rounded-lg text-sm">Không có môn học</div>
              )}
            </div>
            <Link to="/leadership/declare-data/subject-list">
              <button className="mt-4 text-blue-text font-bold flex items-center">
                <img src={plus} alt="Add" className="w-5 mr-2" /> Thêm môn học mới
              </button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <Link to="/leadership/declare-data">
              <button className="w-full md:w-40 h-12 py-2 bg-[#F2F2F2] text-black-text font-bold rounded-lg">Hủy</button>
            </Link>
            <button type="submit" className="w-full md:w-40 py-2 bg-orange-text text-white font-bold rounded-lg">Lưu</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentSettings;
