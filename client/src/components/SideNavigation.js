import React from "react";
import { NavLink as Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

// Styled
import { SideNav } from "../styled/sideNavStyled";

const SideNavigation = ({ onCursor }) => {
	return (
		<SideNav
			animate={{ x: 0, opacity: 1 }}
			initial={{ x: 72, opacity: 0 }}
			transition={{ duration: 1, ease: [0.6, 0.05, -0.1, 0.9] }}
		>
			<ul>
				<li>
					<NavHashLink
						exact
						to="/"
						onMouseEnter={() => onCursor("hovered")}
						onMouseLeave={onCursor}
						activeClassName="nav-active"
					>
						Home
					</NavHashLink>
				</li>
				<li>
					<NavHashLink
						to="/#projects"
						onMouseEnter={() => onCursor("hovered")}
						onMouseLeave={onCursor}
						activeClassName="nav-active"
						smooth
					>
						Projects
					</NavHashLink>
				</li>
				<li>
					<NavHashLink
						to="/about/#me"
						onMouseEnter={() => onCursor("hovered")}
						onMouseLeave={onCursor}
						activeClassName="nav-active"
						smooth
					>
						About
					</NavHashLink>
				</li>
				<li>
					<NavHashLink
						to="/contact/#hire"
						onMouseEnter={() => onCursor("hovered")}
						onMouseLeave={onCursor}
						activeClassName="nav-active"
						smooth
					>
						Contact
					</NavHashLink>
				</li>
			</ul>
		</SideNav>
	);
};

export default SideNavigation;
