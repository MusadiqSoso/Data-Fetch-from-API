import React from "react";
import {  BrowserRouter as Router,Switch, Link,  Route, withRouter } from 'react-router-dom';
import UsersPage from "../pages/users/Users.page";
import PostsPage from "../pages/posts/Posts.page";
import PhotosPage from "../pages/photos/Photos.page";

const Layout = () => {
	
	return (
			<div>
                <div>
                <Router>
                <div>
                <Link to="/users" >Get Users</Link>
                </div>
                
                <div>
                <Link to="/posts" >Get Posts</Link>
                </div>
                
                <div>
                <Link to="/photos">Get Photos</Link>
                </div>
                
            
                <hr />

       <Switch>
        <Route exact path="/users" component ={withRouter(UsersPage)}/>
        <Route exact path="/posts" component ={withRouter(PostsPage)}/>
        <Route exact path="/photos" component ={withRouter(PhotosPage)}/>
        </Switch>
        </Router>
        </div>
			</div>
		);
	
};



export default (Layout);
