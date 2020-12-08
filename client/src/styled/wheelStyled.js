import styled from "styled-components";

const WheelStyled = styled.svg`
	/* SVG WHEEL */

	-webkit-animation: rotating 10s linear infinite;
	-moz-animation: rotating 10s linear infinite;
	-ms-animation: rotating 10s linear infinite;
	-o-animation: rotating 10s linear infinite;
	animation: rotating 10s linear infinite;

	position: absolute;
	top: 60%;
	right: 5%;
	transform: translate(-50%, -50%);

	path {
		fill: ${({ theme }) => theme.text};
	}

	&:hover {
		animation-play-state: paused;
	}
	@keyframes rotating {
		from {
			-ms-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;

export default WheelStyled;
