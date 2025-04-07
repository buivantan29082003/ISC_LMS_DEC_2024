import SubjectManagementHeader from './header';
import SubjectManagementTable from './table';

const SubjectManagement: React.FC = () => {
  return (
    <>
      <div className="student-retention">
        <SubjectManagementHeader />
        <div className="content">
          <SubjectManagementTable />
        </div>
      </div>
    </>
  );
};

export default SubjectManagement;
