import axios from 'axios';
// import Tuits from "../../tuiter-node-server-app/controllers/tuits/tuits";
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API,tuit);
    return response.data;
}
export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);
    return response.data;
}
export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}