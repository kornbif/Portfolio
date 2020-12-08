import { CURSOR_TYPE, TOGGLE_THEME } from "../types/globalType";

export const toggleCursor = (cursorStyles, cursorType) => (dispatch) => {
	console.log("dispatch");
	cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;

	dispatch({
		type: CURSOR_TYPE,
		cursorType,
	});
};

export const toggleTheme = (currentTheme) => (dispatch) => {
	if (currentTheme === "dark") {
		dispatch({
			type: TOGGLE_THEME,
			theme: "light",
		});
	} else {
		dispatch({
			type: TOGGLE_THEME,
			theme: "dark",
		});
	}
};
