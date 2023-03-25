import React from "react";
// import postObjects from './post-objects.json';
import TuitItem from "./tuitItem";
import {useSelector} from "react-redux";


const TuitList = () => {
    const postObjects = useSelector(state => state.tuits)
    return(
        <div>
            {postObjects.map(post => <TuitItem key={post._id} item={post}/>)}
        </div>
    );
};

export default TuitList;