import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";


const ResortsDetails = () => {

    const { resortData } = useContext(AuthContext);
    const { id } = useParams();
    const resort = resortData.find(resort => resort.id == id);

    const { Image, estate_title, description, Area, Status, facilities, price, location, segment_name } = resort;

    return (
        <div className="card mx-4 lg:card-side md:grid md:grid-cols-3 bg-base-100 shadow-xl border mt-16">
            <figure className="col-span-1 p-5"><img className="lg:h-96 w-full rounded-xl" src={Image} alt="resort" /></figure>
            <div className="px-5 col-span-2 flex flex-col justify-center">
                <div>
                    <h1 className="text-2xl font-semibold">{estate_title}</h1>
                    <h3 className="text-lg">{description}</h3>
                    <div className="md:flex gap-10 ">
                        <div className="flex items-center gap-3 mt-4">
                            <h3 className="btn btn-sm btn-outline rounded-full px-5">{Area}</h3>
                            <h3 className="btn btn-sm btn-outline rounded-full px-5">{Status}</h3>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <h3 className="btn btn-sm btn-outline rounded-full px-5"><FaLocationDot />{location}</h3>
                            <h3 className="btn btn-sm btn-outline rounded-full px-5">{segment_name}</h3>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <h3 className="btn btn-sm btn-outline rounded-full px-5">{facilities[0]}</h3>
                            <h3 className="btn btn-sm btn-outline rounded-full px-5">{facilities[1]}</h3>
                            <h3 className="btn btn-sm btn-outline rounded-full px-5">{facilities[2]}</h3>
                        </div>
                        <h2 className="btn btn-sm btn-outline rounded-full px-5 mt-4 bg-purple-600 text-white "><AiFillDollarCircle />{price}</h2>
                    </div>
                </div>
                <div className="card-actions">
                    <Link to="/">
                        <button className="text-lg my-6 rounded-full px-10 btn bg-white text-ctm-primary-color border-ctm-primary-color hover:bg-ctm-primary-color hover:text-white duration-300">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResortsDetails;