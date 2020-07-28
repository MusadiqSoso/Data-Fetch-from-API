import { combineReducers } from "redux";
import users from  "./users/users.reducer";
import posts from "./posts/posts.reducer";
import photos from "./photos/photos.reducer"



export default combineReducers({
    users,
    posts,
    photos

});