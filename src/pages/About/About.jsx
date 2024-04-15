import { Helmet } from "react-helmet-async";
import vacationImg from "../../assets/images/about-vacation.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import AboutService from "../AboutService/AboutService";

const About = () => {

    const { serviceData } = useContext(AuthContext);

    return (
        <div className="md:w-5/6 mx-auto">
            <Helmet>
                <title>About</title>
            </Helmet>

            <h1 className="text-6xl my-16 text-center font-medium" data-aos="fade-up" data-aos-duration="1000">About Us</h1>

            <div className="lg:grid grid-cols-2 px-2 gap-6">
                <div className="col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <img className="rounded-xl" src={vacationImg} alt="" />
                    <h1 className="text-4xl md:text-5xl mt-6">The most recommended vacation rental</h1>
                    <h3 className="text-lg mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</h3>
                </div>

                <div className="col-span-1 mt-14 lg:mt-0" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-4xl text-center md:text-5xl font-medium">What we offer</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-10 lg:mt-16">
                        {serviceData.map(service => <AboutService key={service.id} service={service}></AboutService>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;