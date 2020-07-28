import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/users.actions";
import Layout from "../../container/layout.container";

const UsersPage = (props) => {
	const { getUsers, users } = props;
	const [loading, setLoading] = useState(false);

	const onGetUserData = async () => {
		setLoading(true);
		let userData = await getUsers();
		if (userData.status === 200) {
			setLoading(false);
		} else {
			setLoading(false);
		} 
	};

	useEffect(() => {
		onGetUserData();
	}, []);

	if (loading) {
		return <span>Loading...</span>;
	} else {
		return (
			<div>
				
				{users && users.length > 0
					? users.map((user, i) => {
							return (
								<div key={i} style={{ borderBottom: "1px solid #ccc" }}>
									<h3>{user.name}</h3>
									<p>{user.email}</p>
								</div>
							);
					  })
					: "No user found"}
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	users: state.users.users,
});

export default connect(mapStateToProps, { getUsers })(UsersPage);
