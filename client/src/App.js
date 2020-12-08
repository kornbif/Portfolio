import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Context
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from "./context/globalContext";

// components
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Styled
import { DarkTheme, GlobalStyle, LightTheme } from "./styled/globalStyled";
import Cursor from "./components/CustomCursor";

// import { AnimatePresence } from "framer-motion";

// action
import { toggleCursor } from "./context/actions/action/globalActions";
import Footer from "./pages/Footer";

function App() {
	const location = useLocation();
	const { globalState } = useGlobalStateContext();
	const { currentTheme, cursorStyles } = globalState;
	const { globalDispatch } = useGlobalDispatchContext();

	const onCursor = (type) => {
		toggleCursor(cursorStyles, type)(globalDispatch);
	};

	return (
		<ThemeProvider theme={currentTheme === "light" ? LightTheme : DarkTheme}>
			<GlobalStyle />
			<Cursor />
			<Header onCursor={onCursor} />
			<SideNavigation onCursor={onCursor} />
			{/* <AnimatePresence exitBeforeEnter> */}
			<Switch location={location} key={location.key}>
				<Route path="/contact">
					<Contact onCursor={onCursor} />
				</Route>
				<Route path="/about">
					<About onCursor={onCursor} />
				</Route>

				<Route path="/">
					<Home onCursor={onCursor} />
				</Route>
			</Switch>
			{/* </AnimatePresence> */}

			<Footer onCursor={onCursor} />
		</ThemeProvider>
	);
}

export default App;
