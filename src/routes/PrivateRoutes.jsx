import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-spinner loading-lg text-ctm-primary-color"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
