import PropTypes from "prop-types";
import { PiCoffeeBold } from "react-icons/pi";
import { LiaShowerSolid } from "react-icons/lia";
import { MdLocalLaundryService } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { GiKitchenScale } from "react-icons/gi";
import { TbIroning3 } from "react-icons/tb";
import { PiLockersBold } from "react-icons/pi";


const AboutService = ({ service }) => {

    const { id, Title, description } = service;

    return (
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
            {id === 1 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><PiCoffeeBold /></h1>}
            {id === 2 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><LiaShowerSolid /></h1>}
            {id === 3 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><MdLocalLaundryService /></h1>}
            {id === 4 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><TbAirConditioning /></h1>}
            {id === 5 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><FaWifi /></h1>}
            {id === 6 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><GiKitchenScale /></h1>}
            {id === 7 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><TbIroning3 /></h1>}
            {id === 8 && <h1 className="text-4xl p-6 bg-rose-300 rounded-full m-3 text-white"><PiLockersBold /></h1>}
            <div>
                <h3 className="text-xl font-medium">{Title}</h3>
                <h3 className="text-gray-600">{description}</h3>
            </div>
        </div>
    );
};

export default AboutService;

AboutService.propTypes = {
    service: PropTypes.object.isRequired
}