import styled from "styled-components";
import { motion } from "framer-motion";

export const SideNav = styled(motion.nav)`
	position: fixed;
	top: 0;
	right: 4em;

	color: ${({ theme }) => theme.text};
	width: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;

	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		list-style: none;
		width: 100%;
		height: 50%;

		color: ${({ theme }) => theme.text};

		li {
			font-size: 1.2em;
			transform: rotate(90deg);
			a {
				color: ${({ theme }) => theme.text};
			}
		}
	}
`;
