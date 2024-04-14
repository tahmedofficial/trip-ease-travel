import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";


const SignIn = () => {

    const [showPassword, setShowPassword] = useState(true);
    const { signInUser, signInWithGoogle, signInWithFacebook, successNotify, errorNotify } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Sign In User
        signInUser(email, password)
            .then(() => {
                successNotify("Logged in successfully")
                navigate(location?.state ? location.state : "/")
            }
            )
            .catch(error => {
                if (error) {
                    errorNotify("Enter a valid email and password")
                }
            }
            )

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                successNotify("Logged in successfully")
                navigate(location?.state ? location.state : "/")
            }
            )
            .catch(error => {
                if (error.code === "auth/account-exists-with-different-credential") {
                    errorNotify("Email address already exists")
                }
            })
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(() => {
                successNotify("Logged in successfully")
                navigate(location?.state ? location.state : "/")
            }
            )
            .catch(error => {
                if (error.code === "auth/account-exists-with-different-credential") {
                    errorNotify("Email address already exists")
                }
            })
    }


    return (
        <div>
            <form onSubmit={handleSignIn} className="flex flex-col gap-5 items-center px-4 mt-24">
                <div className="flex flex-col gap-2">
                    <span>Email</span>
                    <input
                        className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                        type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Pssword</span>
                    <div className="relative">
                        <input
                            className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                            type={showPassword ? "password" : "text"} name="password" placeholder="Password" />
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-4">
                            {
                                showPassword ? <FaEye />
                                    : <FaEyeSlash />
                            }
                        </div>
                    </div>
                </div>
                <button className="btn rounded-xl mt-5 hover:bg-slate-500 bg-ctm-primary-color text-white w-96">Log In</button>
            </form>

            <div className="flex items-center justify-center">
                <h3>Do not have Account ?</h3>
                <Link to="/signUp">
                    <button className="btn btn-active btn-link">Sign Up</button>
                </Link>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 px-5">
                <div className="text-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline text-ctm-primary-color hover:bg-ctm-primary-color border-ctm-primary-color text-lg">
                        <FaGoogle className="text-2xl" />
                        <h3>Login With Google</h3>
                    </button>
                </div>

                <div className="text-center">
                    <button onClick={handleFacebookSignIn} className="btn btn-outline text-ctm-primary-color hover:bg-ctm-primary-color border-ctm-primary-color text-lg">
                        <FaFacebookF className="text-2xl" />
                        <h3>Login With Facebook</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;