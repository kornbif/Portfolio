import styled from "styled-components";
import { motion } from "framer-motion";

export const PorjectContent = styled.div`
	width: 90%;
	height: 100%;
	padding: 3em 0;
	margin: 3em 0;
	margin: 0 auto;
`;

export const ProjectBox = styled.div`
	position: relative;
	height: 100%;
	margin: 5em 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	gap: 3em;
`;

export const CardNumber = styled(motion.span)`
	position: relative;
	width: auto;
	font-weight: 500;
	font-size: 1.2em;
	padding: 0 0.8em;
	color: ${({ theme }) => theme.text};

	&::before {
		content: "";
		position: absolute;
		height: 2px;
		width: 12px;
		top: 50%;
		left: 0%;
		transform-origin: center left;
		background: ${({ theme }) => theme.text};
	}
`;

export const CardThumbnail = styled.img`
	position: relative;
	width: 90%;
	height: 70%;
	align-self: flex-end;
	object-fit: contain;
	z-index: 1;
	transition: filter 0.4s ease-in-out;
`;

export const CardTitle = styled(motion.h1)`
	width: 60%;
	align-self: flex-end;
	padding: 0 1em;
	margin-top: 0px;
	color: ${({ theme }) => theme.text};
	z-index: 3;
`;

export const CardBox = styled(motion.div)`
	position: relative;
	width: 450px;
	height: 400px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-bottom: -100px;

	&:nth-child(even) {
		margin-top: 100px;
	}

	&:hover {
		${CardThumbnail} {
			filter: brightness(80%);
			/* &::after {
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: rgba(0, 0, 0, 0.7);
			} */
		}
	}
`;
