import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="bg-ctm-footer-color py-20 mt-24">
            <div className="footer p-10 text-base-content md:w-5/6 mx-auto">
                <nav className="text-ctm-gray-color">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-ctm-gray-color">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-ctm-gray-color">
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">+99 3948236448</a>
                    <a className="link link-hover">Down town hold road</a>
                    <a className="link link-hover">New Jersey</a>
                    <a className="link link-hover">program</a>
                </nav>
                <nav className="text-ctm-gray-color">
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4" data-aos="fade-up" data-aos-duration="1000">
                        <FaSquareFacebook className="text-3xl hover:text-blue-500 duration-300" />
                        <FaTwitter className="text-3xl hover:text-blue-500 duration-300" />
                        <FaLinkedin className="text-3xl hover:text-blue-500 duration-300" />
                    </div>
                </nav>
            </div>
            <div className="border-t border-slate-500 mt-4" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="text-white text-lg text-center mt-6">Copyright © 2024 - All right reserved by TripEase Company Ltd</h3>
            </div>
        </footer>
    );
};

export default Footer;