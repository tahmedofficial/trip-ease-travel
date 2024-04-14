import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(true);
    const { signUpUser, successNotify, errorNotify } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;

        // validation
        if (password.length < 6) {
            errorNotify("Password must be 6 characters")
            return
        }

        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            errorNotify("Enter an uppercase letter")
            return
        }

        if (!/^(?=.*[a-z]).+$/.test(password)) {
            errorNotify("Enter an lowercase  letter")
            return
        }

        // Sign up method
        signUpUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then()
                    .catch()

                successNotify("Registered Successfully")
                navigate("/")
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <form onSubmit={handleSignUp} className="flex flex-col gap-5 items-center px-4 mt-24">
                <div className="flex flex-col gap-2">
                    <span>Name</span>
                    <input
                        className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                        type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Email</span>
                    <input
                        className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                        type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Photo Url</span>
                    <input
                        className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                        type="text" name="photo" placeholder="Photo Url" />
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
                <button className="btn rounded-xl mt-5 hover:bg-slate-500 bg-ctm-primary-color text-white w-96">Register</button>
            </form>

            <div className="flex items-center justify-center">
                <h3>Already have Account ?</h3>
                <Link to="/signIn">
                    <button className="btn btn-active btn-link">Log In</button>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;