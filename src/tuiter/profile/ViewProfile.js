import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const ViewProfileComponent = ({
          profileData={
              _id:'12345',
              firstName: 'Dhruv',
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
    return(
        <div className="mt-2 ">
            <div className="d-flex justify-content-start">
                <div><i className="bi bi-arrow-left h4"></i></div>
                <div>
                    <h5 className="ps-4 font-weight-bold mb-0">{profileData.firstName} {profileData.lastName}</h5>
                    <small className="text-secondary p-0 ms-4 lh-1 mt-0">6,114 Tweets</small>
                </div>
            </div>
            <div className="position-relative mb-5 ">
                <img className=" img-fluid mt-3 rounded " src={profileData.bannerPicture} alt=""/>
                <img className="position-absolute img-overlay" src={profileData.profilePicture} alt=""/>
                <Link to="/tuiter/edit-profile" className="btn btn-outline-secondary text-dark float-end mt-2 me-3 rounded-pill"> Edit Profile</Link>
            </div>
            <div className="pt-4 ">
                <h3 className="mb-0 font-weight-bold">{profileData.firstName} {profileData.lastName}</h3>
                <div className="text-secondary pt-0 mt-0 lh-1">{profileData.handle}</div>
            </div>
            <p className="mt-3">{profileData.bio}</p>
            <div className="d-flex flex-row">
                <div className="p-3 ">
                    <i className="bi bi-geo-alt"></i> {profileData.location}
                </div>
                <div className="p-3 ">
                    <i className="bi bi-balloon"></i> Born {profileData.dateOfBirth}
                </div>
                <div className="p-3 ">
                    <i className="bi bi-calendar3"></i> Joined {profileData.dateJoined}
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-3">{profileData.followingCount} Following</div>
                <div className="p-3">{profileData.followersCount} Followers</div>
            </div>

        </div>
    );
}

export default ViewProfileComponent;