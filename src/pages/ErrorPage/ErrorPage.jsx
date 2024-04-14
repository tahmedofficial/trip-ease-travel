import { Link } from "react-router-dom";
import img from "../../assets/images/error.jpg"
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Helmet>
                <title>Error</title>
            </Helmet>
            <div className="flex justify-center mt-16">
                <img className="w-72 md:w-2/4 lg:w-1/4" src={img} alt="" />
            </div>
            <Link to="/">
                <button className="text-4xl mt-10 hover:bg-slate-400 duration-300 rounded-full font-semibold bg-ctm-footer-color text-white py-3 px-12">
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;