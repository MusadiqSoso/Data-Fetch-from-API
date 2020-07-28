import   React  from 'react';
import {Provider} from 'react-redux';
import { store } from './redux/store/store';
import HomePage from './pages/Home.page';
import Layout from "./container/layout.container"
import  PostsPage from "../src/pages/photos/Photos.page"


function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>

    
  
  );
}



export default App;
