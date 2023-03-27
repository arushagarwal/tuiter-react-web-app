import React, {useEffect} from "react";
import TuitItem from "./tuitItem";
import {useDispatch,useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    return(
        <ul className="list-group">
            {
                loading && <li className="list-group-item">Loading...</li>
            }
            {
                !loading && tuits.map(post => <TuitItem key={post._id} item={post}/> )
            }
        </ul>

    );
};

export default TuitList;