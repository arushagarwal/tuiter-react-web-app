import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";


import TuitStats from "./tuitStats";

const TuitItem = (
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="row border border-muted rounded">
            <div className="col-1  mt-2">
                <img className="img-fluid rounded-circle" alt="" src={`/images/${item.icon}`}/>
            </div>
            <div className="col-11">
                <div>
                    <b>{item.userName}</b> <FontAwesomeIcon icon={faCheckCircle} className="text-primary"/> <span
                    className="text-secondary">{item.handle} . {item.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(item._id)}></i>
                </div>
                <div>
                    {item.tuit}
                </div>

                <TuitStats/>
            </div>
        </div>
    );
};
export default TuitItem;
