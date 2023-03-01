import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faUpload} from "@fortawesome/free-solid-svg-icons";

const postItem = (
    {
        item =   {
          "icon" : "apple.jpeg",
          "topic" : "Elon Musk",
          "handle" : "elonmusk",
          "time" : "23h",
          "title" : "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
          "card_image" : "inspiration4x.png",
          "card_title" : "Countdown: Inspiration4 mission to scope | Netflix Official Site ",
          "card_body" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Atque dolores iure, officia pariatur qui quia temporibus veniam voluptas! Adipisci assumenda corporis dicta dolore dolorum hic ipsa placeat rerum! Amet, necessitatibus.",
        }
    }
) => {
  return(
      <div className="row">
          <div className="col-1  mt-2">
            <img className="img-fluid rounded-circle" alt="" src={`/images/${item.icon}`}/>
          </div>
          <div className="col-11">
            <div>
              <b>{item.topic}</b> <FontAwesomeIcon icon={faCheckCircle} className="text-primary"/> <span
                className="text-secondary">@{item.handle} . {item.time}</span>
            </div>
            <div>
              {item.title}
            </div>
            <div className="card border border-secondary" style={{"width": "95%"}}>
              <img src={`/images/${item.card_image}`}
                   className="card-img-top border border-secondary" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{item.card_title}</h5>
                <p className="card-text text-secondary">{item.card_body}</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 "><FontAwesomeIcon icon={faComment} className="text-secondary"/> <span
                  className="ms-3">4.2k</span></div>
              <div className="col-3 "><FontAwesomeIcon icon={faRetweet} className="text-secondary"
                                         aria-hidden="true"/> <span
                  className="ms-3">4.2k</span></div>
              <div className="col-3 "><FontAwesomeIcon icon={faHeart} className="text-secondary"/> <span
                  className="ms-3">4.2k</span></div>
              <div className="col-3 "><FontAwesomeIcon icon={faUpload} className="text-secondary"/></div>
            </div>
          </div>
        </div>
  );
};
export default postItem;
