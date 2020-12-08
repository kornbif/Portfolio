import Axios from "axios";
import * as actionTypes from "../types/projectType";

export const listProject = () => async (dispatch) => {
	dispatch({
		type: actionTypes.PROJECT_LIST_REQUEST,
	});

	try {
		console.log("dispatch");
		const { data } = await Axios.get("/api/projects");

		dispatch({
			type: actionTypes.PROJECT_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: actionTypes.PROJECT_LIST_FAIL,
			payload: err.message,
		});
	}
};
