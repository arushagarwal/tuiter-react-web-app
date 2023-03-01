import React from "react";
import postObjects from './post-objects.json';
import PostItem  from "./post-item";


const HomePostsList = () => {
  return(
      <div>
        {postObjects.map(post => <PostItem key={post._id} item={post}/>)}
      </div>
  );
};

export default HomePostsList;