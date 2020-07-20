import { mainActionTypes } from "../../action-types/users-actions.types";

const INITIAL_STATE = {
	users: {},
	posts: {},
	photos: {},
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case mainActionTypes.GET_USERS:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
}
