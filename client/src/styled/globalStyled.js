import styled, { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    *{
        padding:0;
        margin: 0;
        text-decoration: none;
        cursor: none;
      
    }

    html{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        /* font-family: 'Montserrat', sans-serif; */
        font-family: 'Oswald', sans-serif;
        background: ${({ theme }) => theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
	
    }

	.nav-active{
		font-weight: 700;
	}

`;

// themes
export const DarkTheme = {
	background: "#000",
	bgRGB: "0,0,0",
	text: "#fff",
	textRGB: "255,255,255",
	textTwo: "#F5F1F1",
	watermarkText: "#272727",
	watermarkBox: "#1E1E1E",
	switch: 180,
};

export const LightTheme = {
	background: "#F5F1F1",
	bgRGB: "245, 241, 241",
	textRGB: "38, 38, 38",
	text: "#262626",
	textTwo: "#2F2E2E",
	watermarkText: " #FDFCFC",
	watermarkBox: "#EAECEE",
	switch: 0,
};

// Global Components

export const Container = styled(motion.div)`
	flex-grow: 1;
	margin: 0 auto;
	padding: 1em;
	position: relative;
	width: auto;
	height: 100%;

	${(props) =>
		props.content &&
		css`
			width: 90%;
			padding: 3em 0;
			margin: 2em auto;
		`}

	${(props) =>
		props.desk &&
		css`
			height: 100vh;
			max-height: 1024px;
		`}
	@media (min-width: 1024px) {
		max-width: 960px;
	}

	@media (min-width: 1216px) {
		max-width: 1152px;
	}
	@media (min-width: 1366px) {
		max-width: 1300px;
	}

	@media (min-width: 1408px) {
		max-width: 1400px;
	}

	/* ----------- Non-Retina Screens ----------- */
	/* @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		max-width: 1366px;
	} */

	/* ----------- Retina Screens ----------- */
	/* @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
		max-width: 1366px;
	} */

	${(props) =>
		props.fluid &&
		css`
			/* padding: 0;
			margin: 0; */
			min-width: 100%;
		`}
`;

export const Flex = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	${(props) =>
		props.spaceBetween &&
		css`
			justify-content: space-between;
		`};
	${(props) =>
		props.spaceAround &&
		css`
			justify-content: space-around;
		`};

	${(props) =>
		props.flexEnd &&
		css`
			justify-content: flex-end;
		`};

	${(props) =>
		props.alignTop &&
		css`
			justify-content: flex-start;
		`};

	${(props) =>
		props.column &&
		css`
			flex-direction: column;
		`};

	${(props) =>
		props.noHeight &&
		css`
			height: 0;
		`};
`;

// Cursor

export const Cursor = styled.div`
	.smallCircle,
	.bigCircle {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 999;
		border-radius: 100%;
		transform: translate(-50%, -50%);
	}

	.smallCircle {
		width: 6px;
		height: 6px;
		background: ${({ theme }) => theme.text};
		transition: all 0.1s ease-in-out 0.01s;
		transition-property: width, height, border;
		will-change: width, height, transform, border;

		&.hovered {
			background: transparent !important;
		}
	}

	.bigCircle {
		width: 36px;
		height: 36px;
		border: 1px solid ${({ theme }) => theme.text};
		background-color: transparent;
		transition: all 0.003s ease-in-out;

		&.pointer {
			border: 2px solid ${({ theme }) => theme.text} !important;
		}
		&.hovered {
			background: transparent !important;
			width: 4em;
			height: 4em;
			border: 2px solid ${({ theme }) => theme.text};
		}
	}
`;
// BUTTON
export const ButtonStyled = styled(motion.button)`
	position: relative;
	width: ${(props) => (props.width ? props.width : "180px")};
	height: 50px;
	padding: 0.8em 1.3em;
	margin-right: 1.2em;
	outline: none;
	border: none;
	border-radius: 0.3em;
	color: ${({ theme }) => theme.background};
	background: ${({ theme }) => theme.textTwo};
	letter-spacing: 0.2em;
	z-index: 5;

	background-position: center;
	transition: background 0.8s;

	&:hover {
		background: ${({ theme }) => theme.textTwo};
		background: ${({ theme }) => theme.textTwo}
			radial-gradient(circle, transparent 1%, #505050 1%) center/15000%;
	}

	&:active {
		background-color: #505050;
		background-size: 100%;
		transition: background 0s;
	}

	${(props) =>
		props.outline &&
		css`
			background: transparent;
			border: 1px solid ${({ theme }) => theme.text};
			color: ${({ theme }) => theme.text};

			&::after {
				content: "";
				position: absolute;
				width: 50px;
				height: 2px;
				top: 50%;
				right: -30%;
				transform: translate(-50%, -50%);
				background: ${({ theme }) => theme.text};
			}

			&:hover {
				color: ${({ theme }) => theme.background};
			}
		`};
`;
// WATERMARKS
export const WatermarkText = styled(motion.h2)`
	position: absolute;
	font-size: ${(props) => (props.size ? props.size : "7em")};
	letter-spacing: 0.2em;
	width: 100%;
	top: ${(props) => (props.top ? props.top : "80%")};
	left: ${(props) => (props.left ? props.left : "46%")};
	transform: translate(-50%, -50%);
	color: ${({ theme }) => theme.watermarkText};
	white-space: nowrap;
	z-index: ${(props) => (props.zindex ? props.zindex : "-1")};

	${(props) =>
		props.right &&
		css`
			left: 0;
			right: ${props.right};
		`}
`;

export const WatermarkBox = styled(motion.div)`
	position: absolute;
	width: 1000px;
	height: 500px;
	background: ${({ theme }) => theme.watermarkBox};
	z-index: -2;
	top: ${(props) => (props.top ? props.top : "0%")};
	left: ${(props) => (props.left ? props.left : "-10%")};
`;

export const NextTitle = styled.span`
	position: relative;
	font-size: ${(props) => (props.size ? props.size : "1.2em")};
	font-weight: 400;
	margin-right: 0.2em;

	${(props) =>
		props.bold &&
		css`
			font-weight: 700;
		`}
`;

export const Next = styled(motion.div)`
	display: inline-flex;
	flex-direction: column;
	width: auto;
	text-transform: uppercase;
	color: ${({ theme }) => theme.text};
`;

export const NextContentTitle = styled.div`
	display: flex;
	align-items: center;
	width: auto;
	padding: 3em 0;

	svg {
		width: ${(props) => (props.svgWidth ? props.svgWidth : "142px")};

		rect {
			fill: ${({ theme }) => theme.text};
		}
	}
`;

export const BorderBottom = styled(motion.span)`
	display: block;
	background-color: ${({ theme }) => theme.text};
	height: 3px;
`;
