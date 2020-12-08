import React, { useEffect } from "react";
import { DarkLightMode } from "../styled/switchStyled";

import {
	useGlobalDispatchContext,
	useGlobalStateContext,
} from "../context/globalContext";
import { toggleTheme } from "../context/actions/action/globalActions";

const Switch = ({ onCursor }) => {
	const { globalDispatch } = useGlobalDispatchContext();
	const { globalState } = useGlobalStateContext();
	const { currentTheme } = globalState;

	// const toggleTheme = () => {
	// 	if (currentTheme === "dark") {
	// 		dispatch({
	// 			type: "TOGGLE_THEME",
	// 			theme: "light",
	// 		});
	// 	} else {
	// 		dispatch({
	// 			type: "TOGGLE_THEME",
	// 			theme: "dark",
	// 		});
	// 	}
	// };
	const onToggleTheme = () => {
		toggleTheme(currentTheme)(globalDispatch);
	};

	useEffect(() => {
		window.localStorage.setItem("theme", currentTheme);
	}, [currentTheme]);

	return (
		<DarkLightMode>
			<div className="circle-selected"></div>
			<div className="circle"></div>
			<div
				className="circle-toSelect"
				onClick={onToggleTheme}
				onMouseEnter={() => onCursor("hovered")}
				onMouseLeave={onCursor}
			></div>
		</DarkLightMode>
	);
};

export default Switch;
