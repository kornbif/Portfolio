import { useState, useEffect } from "react";
import { Cursor } from "../styled/globalStyled";
// Context
import { useGlobalStateContext } from "../context/globalContext";

const CustomCursor = () => {
	const { globalState } = useGlobalStateContext();
	const { cursorType } = globalState;
	const [mousePosition, setMousePosition] = useState({
		x: 400,
		y: 400,
	});

	const onMouseMove = (event) => {
		const { pageX: x, pageY: y } = event;

		setMousePosition({ x, y });
	};

	useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<Cursor>
			<div
				className={`smallCircle ${!!cursorType ? "hovered" : ""} ${cursorType}`}
				style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
			></div>
			<div
				className={`bigCircle ${!!cursorType ? "hovered" : ""} ${cursorType}`}
				style={{
					left: `${mousePosition.x}px`,
					top: `${mousePosition.y}px`,
				}}
			></div>
		</Cursor>
	);
};

export default CustomCursor;
