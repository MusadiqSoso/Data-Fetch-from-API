import axios from "axios";
const { photosActionTypes } = require("../action-types/photos-action.type");

/**
 * This function fetches photos
 */
export const getPhotos = () => async (dispatch) => {
	let url = `https://jsonplaceholder.typicode.com/photos/?_limit=10`;
	try {
		let photos = await axios.get(url);
		const { status, data } = photos;
		if (status === 200) {
			dispatch({
				type: photosActionTypes.GET_PHOTOS,
				payload: data,
			});
			return photos;
		}
	} catch (error) {
		if (error.response) {
			return error.response;
		}
	}
};