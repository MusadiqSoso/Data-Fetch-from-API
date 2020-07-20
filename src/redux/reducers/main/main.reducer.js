import {mainActionTypes} from "../../action-types/main-actions.types";

const INITIAL_STATE = {
    users: {},
    posts: {},
    photos:{},
};

export default function reducer(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case mainActionTypes.GET_10_USERS:
            return{
                ...state,
                users: action.payload,
            };
        case mainActionTypes.GET_10_POSTS:
            return{
                ...state,
                posts: action.payload,
            };
        case mainActionTypes.GET_10_PHOTOS:
            return{
                ...state,
                photos: action.payload,
            };
            default:
                return state;
    }
}