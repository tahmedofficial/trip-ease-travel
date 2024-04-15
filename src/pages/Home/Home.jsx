import { useContext } from "react";
import Banner from "../Banner/Banner";
import Carts from "../Carts/Carts";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const { resortData } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="grid mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 md:w-5/6 mx-auto" data-aos="fade-up" data-aos-duration="1000">
                {
                    resortData.map(resort => <Carts key={resort.id} resort={resort}></Carts>)
                }
            </div>
        </div>
    );
};

export default Home;