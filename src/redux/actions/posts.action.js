import axios from "axios";
const { postsActionTypes } = require("../action-types/posts-action.type");

/**
 * This function fetches posts 
 */
export const getPosts = () => async (dispatch) => {
	let url = `https://jsonplaceholder.typicode.com/posts/?_limit=10`;
	try {
		let posts = await axios.get(url);
		const { status, data } = posts;
		if (status === 200) {
			dispatch({
				type: postsActionTypes.GET_POSTS,
				payload: data,
			});
			return posts;
		}
	} catch (error) {
		if (error.response) {
			return error.response;
		}
	}
};