import { photosActionTypes } from "../../action-types/photos-action.type";

const INITIAL_STATE = {
	photos: {}
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case photosActionTypes.GET_PHOTOS:
			return {
				...state,
				photos: action.payload,
			};
		default:
			return state;
	}
}
