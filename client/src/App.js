import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";

import { Provider } from "react-redux";
// import "./App.css";
import TodoForm from "./components/TodoForm";

// import NavBar from "./components/NavBar";
// import TodoList from "./components/TodoList";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

const App = () => {
	return (
		<Container>
			<Router>
				{/* <NavBar />
					<Container maxWidth="md">
						<Routes>
							<Route exact path="/" component={TodoList} />
							<Route path="/signin" component={Signin} />
							<Route path="/signup" component={Signup} />
						</Routes>
					</Container> */}
				<h2>Todo List App in Redux</h2>
				<TodoForm />
			</Router>
		</Container>
	);
};

export default App;
