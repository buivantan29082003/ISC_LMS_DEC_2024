import { useState, useEffect } from 'react';

interface PopupProps {
  titleBig: string;
  titleSmall1: string;
  titleSmall2: string;
  titleSmall3: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  onSave?: (updatedSubject: any) => void;
  // Callback khi lưu
  selectedSubject?: any; // Optional
  onSavets?: () => void;
}

const Popup: React.FC<PopupProps> = ({ titleBig, titleSmall1, titleSmall2, titleSmall3, isOpen, onClose, className, selectedSubject, onSave }) => {
  const [name, setName] = useState(selectedSubject.name);
  const [status, setStatus] = useState(selectedSubject.status);
  const [description, setDescription] = useState(selectedSubject.description);

  useEffect(() => {
    setName(selectedSubject.name);
    setStatus(selectedSubject.status);
    setDescription(selectedSubject.description);
  }, [selectedSubject]);

  // Lưu thông tin môn học đã chỉnh sửa
  const handleSave = () => {
    const updatedSubject = { ...selectedSubject, name, status, description };
    onSave?.(updatedSubject); // Chỉ gọi nếu onSave có tồn tại
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 ${className}`} onClick={onClose}>
      <div className="flex justify-center items-center max-h-screen w-full" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-2xl p-6 w-full max-w-[884px] h-auto shadow-lg flex flex-col">
          <form className="w-full pt-3 px-6">
            <h2 className="text-center text-lg font-semibold mb-4">{titleBig}</h2>

            {/* Loại môn học */}
            <div className="flex flex-col md:flex-row items-center mb-4">
              <label className="md:w-3/12 w-full text-black-text font-bold text-base text-center md:text-left">{titleSmall1}:</label>
              <input
                type="text"
                className="w-full md:w-9/12 p-2 rounded-lg text-black-text cursor-pointer bg-gray-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Trạng thái */}
            <div className="flex flex-col md:flex-row items-center mb-4">
              <label className="md:w-3/12 w-full text-black-text font-bold text-base mb-2 md:mb-0 text-left">{titleSmall2}:</label>
              <div className="flex items-center gap-3 w-full md:w-9/12">
                <div
                  className={`relative w-12 h-6 rounded-full cursor-pointer ${status ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => setStatus(!status)}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${status ? 'translate-x-6' : 'translate-x-1'}`}
                  ></div>
                </div>
                <span className="text-sm">{status ? 'Đang hoạt động' : 'Vô hiệu hóa'}</span>
              </div>
            </div>

            {/* Ghi chú */}
            <div className="flex flex-col md:flex-row items-center mb-4">
              <label className="md:w-3/12 w-full text-black-text font-bold text-base text-center md:text-left">{titleSmall3}:</label>
              <input
                type="text"
                className="w-full md:w-9/12 p-2 rounded-lg text-black-text cursor-pointer bg-gray-100"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Nút hành động */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
              <button type="button" onClick={onClose} className="w-full md:w-40 h-12 py-2 bg-[#F2F2F2] text-black-text font-bold rounded-lg">
                Hủy
              </button>
              <button
                type="button"
                onClick={handleSave}
                className={`w-full md:w-40 py-2 font-bold rounded-lg ${
                  status ? 'bg-orange-text text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!status}
              >
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
