import { Link, NavLink } from "react-router-dom";
import profileImg from "../../../assets/images/slider1.jpg"

const Navbar = () => {

    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>About</NavLink></li>
        <li><NavLink to="/signIn" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Sign In</NavLink></li>
        <li><NavLink to="/signUp" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-ctm-primary-color font-medium px-3 pb-2 border-ctm-primary-color" : "font-medium"}>Sign Up</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 md:w-5/6 mx-auto mt-4">
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
                <div className="btn btn-circle">
                    <img className="w-full h-full rounded-full border-2 border-ctm-primary-color" src={profileImg} alt="ProfileImg" />
                </div>
                <Link to="/signIn">
                    <button className="btn bg-ctm-primary-color text-white">Log In</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;