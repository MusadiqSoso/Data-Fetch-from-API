import { postsActionTypes } from "../../action-types/posts-action.type";

const INITIAL_STATE = {
	posts: {}
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case postsActionTypes.GET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
}
