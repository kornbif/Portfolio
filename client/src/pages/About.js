import React from "react";
// Components
import HeaderTitle from "../components/HeaderTitle";
import NextSection from "../components/home/NextSection";
import {
	AboutContainer,
	ParagraphContent,
	ShuffleWord,
	Word,
} from "../styled/aboutStyled";
import { ButtonStyled, Container, WatermarkBox } from "../styled/globalStyled";
// Icons
import { IconWrap, IconBox, IconContainer } from "../styled/aboutStyled";
import * as SimpleIcons from "@styled-icons/simple-icons";

const variants = {
	hover: {
		scale: 1.2,

		originX: 0,
	},
};

const About = ({ onCursor }) => {
	return (
		<Container id="me">
			<AboutContainer>
				<HeaderTitle>ABOUT ME</HeaderTitle>
				<ParagraphContent>
					Hi! I’m Brylle Japhet Duka, graduate of BS Information Technology, a
					UI/UX designer and a web developer who loves{" "}
					<ShuffleWord>
						<Word>programming.</Word>
						<Word>coding.</Word>
						<Word>coffee.</Word>
					</ShuffleWord>
				</ParagraphContent>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<ButtonStyled
						onMouseEnter={() => onCursor("hovered")}
						onMouseLeave={onCursor}
					>
						Resume
					</ButtonStyled>
					<IconContainer>
						<IconBox>
							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.ReactLogo size="52" title="ReactJs" />
							</IconWrap>
							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.Postgresql size="52" title="Postgresql" />
							</IconWrap>
							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.Apollographql size="52" title="Apollographql" />
							</IconWrap>
							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.Graphql size="52" title="Graphql" />
							</IconWrap>
						</IconBox>
						<IconBox>
							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.NodeDotJs size="52" title="NodeDotJs" />
							</IconWrap>

							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.Mongodb size="52" title="Mongodb" />
							</IconWrap>

							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.Javascript size="52" title="Javascript" />
							</IconWrap>

							<IconWrap
								variants={variants}
								whileHover="hover"
								onMouseEnter={() => onCursor("hovered")}
								onMouseLeave={onCursor}
							>
								<SimpleIcons.Sass size="52" title="Sass" />
							</IconWrap>
						</IconBox>
					</IconContainer>
				</div>
			</AboutContainer>
			<WatermarkBox />
			<NextSection
				title="Contact"
				destination="/contact/#hire"
				onCursor={onCursor}
			/>
		</Container>
	);
};

export default About;
