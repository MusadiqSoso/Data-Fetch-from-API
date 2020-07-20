import axios from "axios";
const {mainActionTypes} = require("../action-types/main-actions.types");

//this function fetches 10 users 
export const get10Users = () => async (dispatch) => {
    let url = `https://jsonplaceholder.typicode.com/users/?_limit=10`
    try {
        let users = await axios.get(url);
        const {success, data} = users.data;
        console.log("user", data);
        if(success) {
            dispatch({
                type: mainActionTypes.GET_10_USERS,
                payload: data,
            });
            return users.data;
        }
    }catch (error){
        
        if(error.response){
            return error.response;
        }
    }


}

export const get10Posts = () => async (dispatch) => {
    let url = `https://jsonplaceholder.typicode.com/posts/?_limit=10`
    try {
        let posts = await axios.get(url);
        const {success, data} = posts.data;
        console.log(data);
        if(success) {
            dispatch({
                type: mainActionTypes.GET_10_POSTS,
                payload: data,
            });
            return posts.data;
        }
    }catch (error){
        
        if(error.response){
            return error.response;
        }
    }


}

export const get10Photos = () => async (dispatch) => {
    let url = `https://jsonplaceholder.typicode.com/photos/?_limit=10`
    try {
        let photos = await axios.get(url);
        const {success, data} = photos.data;
        console.log(data);
        if(success) {
            dispatch({
                type: mainActionTypes.GET_10_PHOTOS,
                payload: data,
            });
            return photos.data;
        }
    }catch (error){
        
        if(error.response){
            return error.response;
        }
    }


}