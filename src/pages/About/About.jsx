import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const About = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            {
                user ? <p>{user.email}</p> : ""
            }
        </div>
    );
};

export default About;