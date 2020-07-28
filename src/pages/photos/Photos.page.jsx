import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../redux/actions/photos.actions";
import Layout from "../../container/layout.container";


const PhotosPage = (props) => {
	const { getPhotos, photos } = props;
	const [loading, setLoading] = useState(false);

	const onGetPhotosData = async () => {
		setLoading(true);
		let photosData = await getPhotos();
		if (photosData.status === 200) {
			setLoading(false);
		} else {
			setLoading(false);
		}
	};

	useEffect(() => {
		onGetPhotosData();
	}, []);

	if (loading) {
		return <span>Loading...</span>;
	} else {
		return (
			
			<div>
				
				{photos && photos.length > 0
					? photos.map((photo, i) => {
							return (
								<div key={i} style={{ borderBottom: "1px solid #ccc" }}>
									<h3><img src={photo.url}/></h3>
                                    <p>{photo.id}</p>
								</div>
							);
					  })
					: "No photos found"}
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	photos: state.photos.photos,
});

export default connect(mapStateToProps, { getPhotos })(PhotosPage);
