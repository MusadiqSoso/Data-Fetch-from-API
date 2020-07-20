import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import HomePage from "./pages/Home.page";

function App() {
	return (
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
}

export default App;
