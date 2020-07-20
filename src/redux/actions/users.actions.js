import axios from "axios";
const { mainActionTypes } = require("../action-types/users-actions.types");

/**
 * This function fetches user data
 */
export const getUsers = () => async (dispatch) => {
	let url = `https://jsonplaceholder.typicode.com/users/?_limit=10`;
	try {
		let users = await axios.get(url);
		const { status, data } = users;
		if (status === 200) {
			dispatch({
				type: mainActionTypes.GET_USERS,
				payload: data,
			});
			return users;
		}
	} catch (error) {
		if (error.response) {
			return error.response;
		}
	}
};
