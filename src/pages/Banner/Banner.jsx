import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {


    return (
        <div className="carousel w-full py-10 bg-rose-50">

            {/* Slider-1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div className="grid md:grid-cols-3 w-full md:w-5/6 mx-auto items-center">
                    <div className="md:col-span-2 px-4 md:flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-semibold">
                            Exploring the Rich Tapestry of Spin Tourism
                        </h1>
                        <h3 className="py-5 text-lg">
                            Embark on a journey like no other as you discover the captivating allure of Spin, a land brimming with diverse landscapes, vibrant cultures, and immersive experiences. Nestled in the heart of the continent, Spin beckons travelers with its blend of ancient traditions and modern marvels.
                        </h3>
                        <div>
                            <button className="btn text-white bg-ctm-primary-color rounded-full px-10">Details View</button>
                        </div>                    </div>
                    <div className="md:col-span-1 p-4 pt-10">
                        <img src={slider1} className="h-96 rounded-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-ctm-primary-color text-white"><FaChevronLeft /></a>
                    <a href="#slide2" className="btn btn-circle bg-ctm-primary-color text-white"><FaChevronRight /></a>
                </div>
            </div>

            {/* Slider-2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="grid md:grid-cols-3 w-full md:w-5/6 mx-auto items-center">
                    <div className="md:col-span-2 px-4 md:flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-semibold">
                            A Journey through Time, Culture, and Natural Splendor.
                        </h1>
                        <h3 className="py-5 text-lg">
                            Prepare to be captivated by the allure of Vietnam, a country steeped in history, adorned with breathtaking landscapes, and enriched by a vibrant tapestry of culture. Embark on a journey of discovery as you traverse this gem of Southeast Asia, where ancient traditions blend harmoniously with modern-day marvels.
                        </h3>
                        <div>
                            <button className="btn text-white bg-ctm-primary-color rounded-full px-10">Details View</button>
                        </div>                    </div>
                    <div className="md:col-span-1 p-4 pt-10">
                        <img src={slider2} className="h-96 rounded-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-ctm-primary-color text-white"><FaChevronLeft /></a>
                    <a href="#slide3" className="btn btn-circle bg-ctm-primary-color text-white"><FaChevronRight /></a>
                </div>
            </div>

            {/* Slider-3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="grid md:grid-cols-3 w-full md:w-5/6 mx-auto items-center">
                    <div className="md:col-span-2 px-4 md:flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-semibold">
                            Journey through Indonesia Tourism Wonderland
                        </h1>
                        <h3 className="py-4 text-lg">
                            Welcome to Indonesia, where paradise awaits at every turn. With its vast archipelago comprising over 17,000 islands, Indonesia beckons travelers with its stunning natural beauty, rich cultural tapestry, and endless adventures.
                        </h3>
                        <div>
                            <button className="btn text-white bg-ctm-primary-color rounded-full px-10">Details View</button>
                        </div>
                    </div>
                    <div className="md:col-span-1 p-4">
                        <img src={slider3} className="h-96 rounded-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-ctm-primary-color text-white"><FaChevronLeft /></a>
                    <a href="#slide1" className="btn btn-circle bg-ctm-primary-color text-white"><FaChevronRight /></a>
                </div>
            </div>

        </div>
    );
};

export default Banner;