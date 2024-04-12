import { Link, NavLink } from "react-router-dom";
import profileImg from "../../../assets/images/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Home</NavLink></li>
        <li><NavLink to="/updateProfile" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Update Profile</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>About</NavLink></li>
        <li><NavLink to="/location" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Location</NavLink></li>
        <li><NavLink to="/signUp" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Sign Up</NavLink></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    return (
        <div className="bg-rose-50 pb-5 pt-7">
            <div className="navbar bg-rose-50 md:w-5/6 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col gap-3 dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="text-xl btn bg-white text-ctm-primary-color border-ctm-primary-color hover:bg-ctm-primary-color hover:text-white duration-300">TripEase</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="btn btn-circle tooltip" data-tip={user?.displayName}>
                        <img className="w-full h-full rounded-full border-2 border-ctm-primary-color" src={user ? user?.photoURL : profileImg} alt="ProfileImg" />
                    </div>
                    {
                        user ?
                            <Link to="/signIn">
                                <button onClick={handleSignOut} className="btn bg-ctm-primary-color text-white">Log Out</button>
                            </Link> :
                            <Link to="/signIn">
                                <button className="btn bg-ctm-primary-color text-white">Log In</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;