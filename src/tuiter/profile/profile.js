import {createSlice} from "@reduxjs/toolkit";

let profiles = [{
    _id: "12345",
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'https://upstatement.com/wp-content/themes/upstatement/content/img/portfolio/nu-brand/athletics-logo-circle-n-split.svg',
    bannerPicture: 'https://kubrick.htvapps.com/vidthumb/images/northeastern-university-1599864129.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}];

const profileSlice = createSlice({
    name:'profile',
    initialState:profiles,
    reducers:{
        updateProfile(state, action){
            const profile = state.find((profile) => profile._id === action.payload._id);
            profile.firstName = action.payload.firstName;
            profile.lastName = action.payload.lastName;
            profile.bio = action.payload.bio;
            profile.location = action.payload.location;
            profile.website = action.payload.website;
            profile.dateOfBirth = action.payload.dateOfBirth;

        }
    }
});


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;