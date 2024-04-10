import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [resortData, setResortData] = useState([]);

    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setResortData(data))
    }, [])


    const authInfo = {
        resortData,
        signUpUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}