import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";


const Carts = ({ resort }) => {

    console.log(resort);
    const { Image, estate_title, description, Area, Status, facilities, price, location, segment_name } = resort;

    return (
        <div className="card bg-base-100 shadow-xl border-t">
            <figure className="p-6">
                <img src={Image} alt="Resort" className="rounded-xl h-64 w-full" />
            </figure>
            <div className="px-6">
                <h2 className="text-2xl font-semibold">{estate_title}</h2>
                <h3 className="text-lg mt-4">{description}</h3>
                <div className="flex gap-4 mt-4">
                    <h3 className="bg-ctm-gray-color px-5 py-1 rounded-full font-semibold text-ctm-primary-color">{Area}</h3>
                    <h3 className="bg-ctm-gray-color px-5 py-1 rounded-full font-semibold text-ctm-primary-color">{Status}</h3>
                </div>
                <div className="flex gap-4 mt-4">
                    <h3 className="bg-ctm-primary-color px-5 py-1 rounded-full font-semibold flex items-center gap-2 text-ctm-gray-color"><FaLocationDot />{location}</h3>
                    <h3 className="bg-ctm-primary-color px-5 py-1 rounded-full font-semibold text-ctm-gray-color">{segment_name}</h3>
                </div>
                <div className="flex gap-4 mt-4">
                    <h3 className="bg-ctm-gray-color px-5 py-1 rounded-full font-semibold text-ctm-primary-color">{facilities[0]}</h3>
                    <h3 className="bg-ctm-gray-color px-5 py-1 rounded-full font-semibold text-ctm-primary-color">{facilities[1]}</h3>
                    <h3 className="bg-ctm-gray-color px-5 py-1 rounded-full font-semibold text-ctm-primary-color">{facilities[2]}</h3>
                </div>
                <h2 className="btn btn-sm mt-4 bg-rose-600 hover:bg-rose-400 duration-300 text-white text-lg px-5 rounded-full"><AiFillDollarCircle />{price}</h2>

                <div className="card-actions">
                    <button className="text-lg my-6 rounded-full px-10 btn bg-white text-ctm-primary-color border-ctm-primary-color hover:bg-ctm-primary-color hover:text-white duration-300">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;

Carts.propTypes = {
    resort: PropTypes.object.isRequired
}