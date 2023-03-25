import React from "react";
import ViewProfileComponent from "./ViewProfile";
import profileReducer from "./profile";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
const store = configureStore({reducer: {profile: profileReducer}});


const ProfileComponent = () => {
    return(
        <Provider store={store}>
            <ViewProfileComponent/>
        </Provider>
    );
}

export default ProfileComponent;
