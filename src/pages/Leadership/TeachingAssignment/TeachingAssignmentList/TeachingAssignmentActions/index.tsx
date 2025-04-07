import IconImages from "../../../../../components/IconImages";
const TeachingAssignmentActions = () => {
    return (
        <div className="bg-white sm:rounded-t-lg overflow-hidden antialiased md:py-4">
            <div className="flex justify-end items-center bg-white p-2">
                <div className="flex gap-2">
                    <div className="flex gap-4 items-center justify-center">
                        <img
                            src={IconImages.iconTrashBinOutlineOrange}
                            alt="Delete"
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                        <div style={{ border: '1px solid gray', height: '30px' }}></div>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded">
                            + Thêm mới
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingAssignmentActions;
