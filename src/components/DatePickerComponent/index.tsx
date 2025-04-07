import React, { useState, useEffect, useRef, useCallback } from "react";
import { IconCalendarOutline } from "../Icons";
import ActionButtons from "./actionButtons";
import NextMonthButton from "./nextMonthButton";
import PrevMonthButton from "./prevMonthButton";
import WeekDays from "./weekDays";

export default function DatePicker1() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const daysContainerRef = useRef<HTMLDivElement>(null);
    const datepickerContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (daysContainerRef.current) {
            renderCalendar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate, isCalendarOpen]);

    const renderCalendar = useCallback(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const daysContainer = daysContainerRef.current;
        if (!daysContainer) return;
        daysContainer.innerHTML = "";

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement("div");
            daysContainer.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.className =
                "flex h-[38px] w-[38px] items-center justify-center rounded-[7px] border-[.5px] border-transparent text-dark hover:border-stroke hover:bg-background-orange-1 hover:text-white hover:bg-gray-2 sm:h-[46px] sm:w-[47px] dark:text-black dark:hover:border-dark-3 dark:hover:bg-dark mb-2 text-base cursor-pointer";
            dayDiv.textContent = i.toString();
            dayDiv.addEventListener("click", () => {
                const selectedDateValue = `${month + 1}/${i}/${year}`;
                setSelectedDate(selectedDateValue);
                daysContainer
                    .querySelectorAll("div")
                    .forEach((d) => d.classList.remove("bg-background-orange-1", "text-white"));
                dayDiv.classList.add("bg-background-orange-1", "text-white", "dark:text-black");
            });
            daysContainer.appendChild(dayDiv);
        }
    }, [currentDate]);

    useEffect(() => {
        if (daysContainerRef.current) {
            renderCalendar();
        }
    }, [currentDate, isCalendarOpen, renderCalendar]);



    const handlePrevMonth = () => {
        setCurrentDate(
            (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1)),
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1)),
        );
    };

    const handleApply = () => {
        if (selectedDate) {
            setIsCalendarOpen(false);
        }
    };

    const handleCancel = () => {
        setSelectedDate(null);
        setIsCalendarOpen(false);
    };

    const handleToggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement | null; 
        if (
            target &&
            datepickerContainerRef.current &&
            !datepickerContainerRef.current.contains(target) &&
            target.id !== "datepicker" &&
            target.id !== "toggleDatepicker"
        ) {
            setIsCalendarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <section className="bg-white">
            <div className="container">
                <div className="mx-auto w-full max-w-[510px]">
                    <div className="relative mb-3">
                        <input
                            id="datepicker"
                            type="text"
                            placeholder="Chọn ngày"
                            className="h-12 w-full appearance-none rounded-lg border border-stroke bg-white pl-4 pr-12 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2"
                            value={selectedDate || ""}
                            readOnly
                            onClick={handleToggleCalendar}
                        />
                        <span
                            id="toggleDatepicker"
                            onClick={handleToggleCalendar}
                            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-dark-5 border rounded-e-md border-stroke border-s-1"
                        >
                            <IconCalendarOutline className="text-orange-text size-5" />
                        </span>
                    </div>


                    {isCalendarOpen && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-5 z-50 ">
                            <div
                                ref={datepickerContainerRef}
                                id="datepicker-container"
                                className="w-[400px] rounded-xl bg-white p-4 shadow-lg dark:bg-dark-2 dark:shadow-box-dark"
                            >
                                <div className="flex items-center justify-between pb-1">
                                    <PrevMonthButton onClick={handlePrevMonth} />
                                    <span id="currentMonth" className="text-xl font-medium capitalize">
                                        {currentDate.toLocaleDateString("vi-VN", {
                                            month: "long",
                                            year: "numeric",
                                        })}

                                    </span>
                                    <NextMonthButton onClick={handleNextMonth} />
                                </div>
                                <WeekDays />
                                <div ref={daysContainerRef} className="grid grid-cols-7 text-center text-sm font-medium sm:text-sm  text-black">
                                    {/* Days will be rendered here */}
                                </div>
                                <ActionButtons onCancel={handleCancel} onApply={handleApply} />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
