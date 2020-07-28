import { usersActionTypes } from "../../action-types/users-actions.types";

const INITIAL_STATE = {
	users: ""
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case usersActionTypes.GET_USERS:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
}
