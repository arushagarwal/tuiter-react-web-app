import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profileData = useSelector(state => state.profile);
    console.log(profileData);
    return(
        <div className="mt-2">
            <div className="d-flex justify-content-between">
                <div>
                    <i className="bi bi-x-lg float-left"></i>
                    <span className="ms-3 ps-3 float-left">Edit Profile</span>
                </div>
                <button className="float-right btn btn-dark rounded-pill">Save</button>
            </div>
            <div className="position-relative mb-5">
                <img className=" img-fluid mt-3 rounded mh-75 " src='https://kubrick.htvapps.com/vidthumb/images/northeastern-university-1599864129.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' alt=""/>
                <img className="position-absolute img-overlay " src='https://upstatement.com/wp-content/themes/upstatement/content/img/portfolio/nu-brand/athletics-logo-circle-n-split.svg' alt=""/>
            </div>
            <form className="pt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={profileData.firstName+" "+profileData.lastName} placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea type="text" className="form-control" id="password" value={profileData.bio} placeholder="Enter bio"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" value={profileData.location} placeholder="Enter location"/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control" id="website" value={profileData.website} placeholder="Enter website"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dob ">Birth Date</label>
                    <input type="date" className="form-control" id="dob" value={profileData.dateOfBirth} placeholder="Enter date"/>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;