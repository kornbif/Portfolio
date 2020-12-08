import styled, { css } from "styled-components";

export const DarkLightMode = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 1px solid rgb(151, 151, 151);
	border-radius: 100%;
	/* z-index: 2; */

	.circle {
		position: relative;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		transform: rotate(${(props) => props.theme.switch}deg);
		transition: transform 0.5s linear;

		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 12;
		}

		&::before {
			background-color: #fff;
			top: 0%;
		}
		&::after {
			background-color: #000;
			top: 100%;
		}
	}

	.circle-selected {
		position: absolute;
		height: 20px;
		width: 20px;
		background-color: #dbd4d4;
		border-radius: 50%;
		top: 0%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.circle-toSelect {
		position: absolute;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 1;
	}
`;
