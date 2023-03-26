import React from "react";
import ViewProfileComponent from "./ViewProfile";
import {useSelector} from "react-redux";


const ProfileComponent = () => {
    const profileData = useSelector(state => state.profile);
    return(
        <ViewProfileComponent key={profileData._id} profileData={profileData[0]}/>
    );
}

export default ProfileComponent;
