import  React,{useEffect, useState} from "react";
import  {connect} from "react-redux";
import { get10Users, get10Photos,get10Posts } from "./redux/actions/main.actions";


export const MainPage = (props) => {
    const [loading, setLoading] = useState(false);
    const { get10Users, get10Photos, get10Posts} = props;
    

      const onGetUsers = async () => {
        setLoading(true);
        let allUsers = await get10Users();
        console.log("all users", allUsers);
       }
  
       const onGetPosts = () => {
        setLoading(true);
        get10Posts(() => {
          setLoading(false);
        })
       }
  
       const onGetPhotos = () => {
        setLoading(true);
        get10Photos(() => {
          setLoading(false);
        })
       }

       useEffect(() => {
       onGetUsers();
      }, []);
    
     

    return(
        <div>
     {/* <div>Users:
       <ul> {users.map(user => <li> {user.name} </li>)}  </ul>
     </div>
     <div>Posts:
       <ul> {posts.map(post => <li> {post.title} </li>)}  </ul>
     </div>
     <div>Photos:
       <ul> {photos.map(photo => <li> {photo.url} </li>)}  </ul>
     </div> */}
    </div>
    );
    
}

const mapStateToProps = (state) => ({
    users: state.users,
    posts: state.posts,
    photos: state.photos,
  });
export default connect(mapStateToProps,{get10Users,get10Posts,get10Photos})(MainPage);