import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SignIn = () => {

    const [showPassword, setShowPassword] = useState(true);
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    console.log("login page",location);
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Sign In User
        signInUser(email, password)
            .then(navigate(location?.state ? location.state : "/"))
            .catch()

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
        </div>
    );
};

export default SignIn;