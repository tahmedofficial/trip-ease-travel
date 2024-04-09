import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Carts from "../Carts/Carts";

const Home = () => {

    const [resortData, setResortData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setResortData(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="grid mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 md:w-5/6 mx-auto">
                {
                    resortData.map(resort => <Carts key={resort.id} resort={resort}></Carts>)
                }
            </div>
        </div>
    );
};

export default Home;