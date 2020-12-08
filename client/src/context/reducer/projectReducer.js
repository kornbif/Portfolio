import * as actionTypes from "../actions/types/projectType";

export const projectReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.PROJECT_LIST_REQUEST:
			return { loading: true };
		case actionTypes.PROJECT_LIST_SUCCESS:
			return {
				loading: false,
				projects: action.payload,
			};
		case actionTypes.PROJECT_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
