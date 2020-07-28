import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/posts.action";
import Layout from "../../container/layout.container"

const PostsPage = (props) => {
	const { getPosts, posts } = props;
	const [loading, setLoading] = useState(false);

	const onGetPostsData = async () => {
		setLoading(true);
		let postData = await getPosts();
		if (postData.status === 200) {
			setLoading(false);
		} else {
			setLoading(false);
		}
	};

	useEffect(() => {
		onGetPostsData();
	}, []);

	if (loading) {
		return <span>Loading...</span>;
	} else {
		return (
			
			<div>
				
				{posts && posts.length > 0
					? posts.map((post, i) => {
							return (
								<div key={i} style={{ borderBottom: "1px solid #ccc" }}>
									<h3>{post.title}</h3>
								</div>
							);
					  })
					: "No posts found"}
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPosts })(PostsPage);
