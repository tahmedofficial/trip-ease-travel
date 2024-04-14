import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";


const About = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            {
                user ? <p>{user.email}</p> : ""
            }
        </div>
    );
};

export default About;