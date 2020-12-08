import React from "react";
import { Link } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";
import { HeaderNav, Logo } from "../styled/headerStyled";
import { Container, Flex } from "../styled/globalStyled";
import Switch from "./Switch";

const Header = ({ onCursor }) => {
	return (
		<HeaderNav
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: -72, opacity: 0 }}
			transition={{ duration: 1, ease: [0.6, 0.05, -0.1, 0.9] }}
		>
			<Container style={{ width: "auto" }}>
				<Flex spaceBetween noHeight>
					<Link to="/">
						<Logo
							onMouseEnter={() => onCursor("hovered")}
							onMouseLeave={onCursor}
						>
							<span>
								b<span className="hide">rylle</span>
							</span>
							<span>
								d<span className="hide">uka</span>
							</span>
						</Logo>
					</Link>
					<Switch onCursor={onCursor} />
				</Flex>
			</Container>
		</HeaderNav>
	);
};

export default Header;
