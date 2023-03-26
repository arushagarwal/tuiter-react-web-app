import React from "react";
import EditProfile from "./EditProfile";
import "../explore/index.css";
import {useSelector} from "react-redux";


const EditProfileComponent = () => {
    const profileData = useSelector(state => state.profile);
    return(
            <EditProfile key={profileData._id} profile={profileData[0]}/>
    );
}

export default EditProfileComponent;