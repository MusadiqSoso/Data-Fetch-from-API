import   React  from 'react';
import {Provider} from 'react-redux';
import { store } from './redux/store/store';
import {MainPage} from '../src/main.page';


function App() {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>

    
  
  );
}



export default App;
