import { Navigate } from "react-router-dom";
import ResList from "../../components/PwdManager";

const Dashboard = () => {

  if (!localStorage.getItem('user')) {
    return <Navigate replace to="/login" />;
  } else {
    return (
        <ResList />
    );
  }
};
export default Dashboard;