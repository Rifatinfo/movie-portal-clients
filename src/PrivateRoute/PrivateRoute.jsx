import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span></div>
    }

    if (user) {
        return children;
    }

    return (
        <navigate to="/sign-in"></navigate>
    );
};

export default PrivateRoute;
