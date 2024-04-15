import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [resortData, setResortData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const successNotify = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const errorNotify = (message) => toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const provider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
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

    useEffect(() => {
        fetch("/service.json")
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])


    const authInfo = {
        user,
        resortData,
        loading,
        serviceData,
        setUser,
        signUpUser,
        signInWithGoogle,
        signInWithFacebook,
        signInUser,
        signOutUser,
        successNotify,
        errorNotify
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