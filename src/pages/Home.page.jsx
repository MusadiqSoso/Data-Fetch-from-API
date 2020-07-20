import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/users.actions";

const HomePage = (props) => {
	const { getUsers } = props;
	const [loading, setLoading] = useState(false);

	const onGetUserData = async () => {
		let userData = await getUsers();
	};

	return (
		<div>
			<button onClick={() => getUsers()} type="button">
				click
			</button>
		</div>
	);
};

export default connect(null, { getUsers })(HomePage);
