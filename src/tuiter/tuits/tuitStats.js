import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faUpload} from "@fortawesome/free-solid-svg-icons";

const TuitStats = () => {
    return (
        <div className="row mt-3">
            <div className="col-3 ">
                <FontAwesomeIcon icon={faComment} className="text-secondary"/>
                <span className="ms-3">4.2k</span>
            </div>
            <div className="col-3 ">
                <FontAwesomeIcon icon={faRetweet} className="text-secondary" aria-hidden="true"/>
                <span className="ms-3">4.2k</span>
            </div>
            <div className="col-3 ">
                <FontAwesomeIcon icon={faHeart} className="text-secondary"/>
                <span className="ms-3">4.2k</span>
            </div>
            <div className="col-3 ">
                <FontAwesomeIcon icon={faUpload} className="text-secondary"/>
            </div>
        </div>
    );
}

export default TuitStats;