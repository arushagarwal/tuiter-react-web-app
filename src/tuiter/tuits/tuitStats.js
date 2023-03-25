import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faUpload} from "@fortawesome/free-solid-svg-icons";

import {useDispatch} from "react-redux";
import {increaseLikeCount} from "./tuits-reducer";

const TuitStats = ({
    post={
        "liked":"true",
        "likes":"4.2k",
        "replies":"4.2k",
        "retuits":"4.2k"
    }
                   }) => {
    const dispatch = useDispatch();
    const likeHandler = (todo) => {
        dispatch(increaseLikeCount(todo))
    }
    return (
        <div className="row mt-3">
            <div className="col-3 ">
                <FontAwesomeIcon icon={faComment} className="text-secondary"/>
                <span className="ms-3">{post.replies}</span>
            </div>
            <div className="col-3 ">
                <FontAwesomeIcon icon={faRetweet} className="text-secondary" aria-hidden="true"/>
                <span className="ms-3">{post.retuits}</span>
            </div>
            <div className="col-3 ">
                <button onClick={()=>likeHandler(post)} className="border-0 bg-white"><FontAwesomeIcon icon={post.liked ? solidHeart : faHeart} className={post.liked?"text-danger":"text-secondary"}/></button>
                <span className="ms-3">{post.likes}</span>
            </div>
            <div className="col-3 ">
                <FontAwesomeIcon icon={faUpload} className="text-secondary"/>
            </div>
        </div>
    );
}

export default TuitStats;