import StudentRetentionList from "./TeachingAssignmentList";
import TeachingAssignmentSidebar from "./TeachingAssignmentSidebar";
import React from 'react';

const TeachingAssignment: React.FC = () => {
    return (
        <div className="grid grid-cols-[0.6fr_2.4fr] pr-4 xl:grid-cols-[0.6fr_2.4fr] xl:gap-4">
            <div className="col-span-full xl:col-auto">
                <TeachingAssignmentSidebar />
            </div>
            <div className="col-span-full xl:col-auto">
                <StudentRetentionList />
            </div>
        </div>
    );
};

export default TeachingAssignment;
