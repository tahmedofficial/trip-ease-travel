import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import profileImg from "../../assets/images/profile.jpg"
import { updateProfile } from "firebase/auth";


const UpdateProfile = () => {

    const { user, successNotify, errorNotify } = useContext(AuthContext);

    const [editField, setEditField] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        setEditField(!editField);
        const name = event.target.name.value;
        const photo = event.target.photo.value;

        // Update Profile
        updateProfile(user, {
            displayName: name || user.displayName,
            photoURL: photo || user.photoURL,
        })
            .then(() => {
                successNotify("Updated Successfully")
                setLoading(true)
            }
            )
            .catch(() => errorNotify("Something wrong"))

    }

    if (loading) {
        setLoading(false);
    }

    return (
        <div className="md:w-5/6 mx-auto px-3">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="flex justify-center mt-10">
                <img className="h-20 w-20 rounded-full border border-ctm-primary-color" src={user ? user?.photoURL : profileImg} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 mt-5 font-medium">
                {user ? <h3 className="bg-ctm-footer-color text-white text-lg py-3 px-10 rounded-xl">{user.displayName}</h3> : "Name"}
                {user ? <h3 className="bg-ctm-footer-color text-white text-lg py-3 px-10 rounded-xl">{user.email}</h3> : "Email"}
                {user ? <h3 className="bg-ctm-footer-color text-white py-3 px-10 rounded-xl">{user.photoURL}</h3> : "photoURL"}
            </div>
            {
                editField ? <form onSubmit={handleUpdateProfile} className="flex flex-col gap-5 items-center px-4 mt-16">
                    <div className="flex flex-col gap-2">
                        <span>Name</span>
                        <input
                            className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                            type="text" name="name" placeholder={user.displayName} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Photo</span>
                        <input
                            className="bg-ctm-gray-color outline-none h-12 w-96 rounded-xl pl-4"
                            type="text" name="photo" placeholder={user.photoURL} />
                    </div>
                    <button className="btn rounded-xl mt-5 hover:bg-slate-500 bg-ctm-primary-color text-white w-96">Update</button>
                </form> :
                    <button onClick={() => setEditField(!editField)} className="btn bg-ctm-primary-color text-white rounded-full px-10 flex mx-auto mt-16">Edit Profile</button>
            }
        </div>
    );
};

export default UpdateProfile;