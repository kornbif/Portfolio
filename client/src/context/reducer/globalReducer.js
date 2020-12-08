import { TOGGLE_THEME, CURSOR_TYPE } from "../actions/types/globalType";

export const globalReducer = (state = {}, action) => {
	switch (action.type) {
		case TOGGLE_THEME: {
			return {
				...state,
				currentTheme: action.theme,
			};
		}
		case CURSOR_TYPE: {
			return {
				...state,
				cursorType: action.cursorType,
			};
		}

		default: {
			return state;
		}
	}
};
