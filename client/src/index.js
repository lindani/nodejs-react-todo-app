import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Provider } from "react-redux";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import store from "./redux/store";

const theme = createTheme({
	palette: {
		primary: {
			main: "#006064",
		},
		secondary: {
			main: "#e91e63",
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Provider>
);
