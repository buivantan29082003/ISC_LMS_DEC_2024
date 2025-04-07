import React from 'react'

const index = () => {
    const teachers = ['Hoàng Mỹ Trưng', 'Nguyễn Kỷ Nguyên', 'Mộc Tâm Tâm'];
    return (
        <aside className="text-white bg-white ">
            <div className="bg-gray-900 p-4" style={{ borderRadius: '10px 10px 0px 0px' }}>
                <h2 className="text-lg font-bold">GV Lương Hoàng</h2>
                <div className="mt-4">
                    <label className="block text-sm">Niên khóa</label>
                    <select className="w-full bg-gray-800 p-2 rounded mt-1">
                        <option>2020-2021</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className="block text-sm">Bộ Môn</label>
                    <select className="w-full bg-gray-800 p-2 rounded mt-1">
                        <option>Toán Đại Số</option>
                    </select>
                </div>
            </div>
            <h3 className="mt-6 text-md font-semibold bg-orange-500 p-3 rounded-lg">Tổ An</h3>
            {teachers.map((teacher, index) => (
                <button key={index} className="block w-full text-left p-3 mt-2  text-black rounded-lg bg-orange-50 border border-orange-500">
                    {teacher}
                </button>
            ))}
        </aside>
    )
}

export default index