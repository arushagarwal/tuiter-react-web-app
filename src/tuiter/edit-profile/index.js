import React from "react";
import EditProfile from "./EditProfile";
import profileReducer from "../profile/profile"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import "../explore/index.css";

const store = configureStore({reducer: {profile: profileReducer}});


const EditProfileComponent = () => {
    return(
        <Provider store={store}>
            <EditProfile/>
        </Provider>
    );
}

export default EditProfileComponent;