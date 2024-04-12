import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [resortData, setResortData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState({});

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setResortData(data))
    }, [])


    const authInfo = {
        user,
        resortData,
        loading,
        userProfile,
        signUpUser,
        signInWithGoogle,
        signInUser,
        signOutUser,
        setUserProfile
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