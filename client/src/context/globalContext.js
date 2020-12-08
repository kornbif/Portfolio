import { createContext, useReducer, useContext } from "react";
import { globalReducer } from "./reducer/globalReducer";
import { projectReducer } from "./reducer/projectReducer";

// DEFINE CONTEXT
const GlobalStateContext = createContext({});
const GlobalDispatchContext = createContext({});

// Reducer

export const GlobalProvider = ({ children }) => {
	const [globalState, globalDispatch] = useReducer(globalReducer, {
		currentTheme:
			window.localStorage.getItem("theme") === null
				? "dark"
				: window.localStorage.getItem("theme"),
		cursorType: false,
		cursorStyles: ["pointer", "hovered"],
	});

	const [projectState, projectDispatch] = useReducer(projectReducer, {
		loading: true,
		projects: [],
	});

	return (
		<GlobalDispatchContext.Provider value={{ globalDispatch, projectDispatch }}>
			<GlobalStateContext.Provider value={{ globalState, projectState }}>
				{children}
			</GlobalStateContext.Provider>
		</GlobalDispatchContext.Provider>
	);
};

// CUSTOM HOOKS TO USE DISPATCH & STATE

export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
