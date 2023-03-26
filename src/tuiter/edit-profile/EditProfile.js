import React, {useState}  from "react";
import {useDispatch} from "react-redux";
import {updateProfile} from "../profile/profile";
import {Link} from "react-router-dom";

const EditProfile = ({
    profile={
        _id:'12345',
        firstName: 'Jose',
        lastName: 'Annunziato',
        handle: '@jannunzi',
        profilePicture: 'https://upstatement.com/wp-content/themes/upstatement/content/img/portfolio/nu-brand/athletics-logo-circle-n-split.svg',
        bannerPicture: 'https://kubrick.htvapps.com/vidthumb/images/northeastern-university-1599864129.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '1968-07-07',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 223
        }
    }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState(profile.firstName + " " + profile.lastName)
    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }

    const [bio, setBio] = useState(profile.bio)
    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        setBio(bioValue);
    }

    const [location, setLocation] = useState(profile.location)
    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        setLocation(locationValue);
    }

    const [website, setWebsite] = useState(profile.website)
    const websiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        setWebsite(websiteValue);
    }

    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)
    const dateOfBirthChangeHandler = (event) => {
        const dateOfBirthValue = event.target.value;
        setDateOfBirth(dateOfBirthValue);
    }

    const updateForm = (profile) => {
        const nameSeparated = name.split(" ");
        const newProfile = {
            ...profile,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
            bio: bio,
            firstName: nameSeparated[0],
            lastName: nameSeparated[1]
        };
        dispatch(updateProfile(newProfile))
    }



    return(
        <div className="mt-2">
            <div className="d-flex justify-content-between">
                <div>
                    <Link className="bi bi-x-lg float-left" to="/tuiter/profile"></Link>
                    <span className="ms-3 ps-3 float-left">Edit Profile</span>
                </div>
                <Link type="submit" to="/tuiter/profile" onClick={()=>updateForm(profile)} className="float-right btn btn-dark rounded-pill">Save</Link>
            </div>
            <div className="position-relative mb-5">
                <img className=" img-fluid mt-3 rounded mh-75 " src='https://kubrick.htvapps.com/vidthumb/images/northeastern-university-1599864129.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' alt=""/>
                <img className="position-absolute img-overlay " src='https://upstatement.com/wp-content/themes/upstatement/content/img/portfolio/nu-brand/athletics-logo-circle-n-split.svg' alt=""/>
            </div>
            <form className="pt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={nameChangeHandler} value={name} placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea type="text" className="form-control" id="bio" onChange={bioChangeHandler} value={bio} placeholder="Enter bio"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" onChange={locationChangeHandler} value={location} placeholder="Enter location"/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control" id="website" onChange={websiteChangeHandler} value={website} placeholder="Enter website"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dob ">Birth Date</label>
                    <input type="date" className="form-control" id="dob" onChange={dateOfBirthChangeHandler} value={dateOfBirth} placeholder="Enter date"/>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;