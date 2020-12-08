import React, { useEffect } from "react";
// Components
import Wheel from "../components/Wheel";
import {
	ButtonStyled,
	Container,
	WatermarkBox,
	WatermarkText,
} from "../styled/globalStyled";
import { Banner, BannerTitle, Headline } from "../styled/homeStyled";
//pages
import Projects from "./Projects";
import NextSection from "../components/home/NextSection";

const Home = ({ onCursor }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const parent = {
		initial: { y: 150 },
		animate: {
			y: 0,

			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const child = {
		initial: { y: 150, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: [0.6, 0.05, -0.01, 0.9],
			},
		},
	};
	return (
		<Container>
			<Banner>
				<BannerTitle variants={parent} initial="initial" animate="animate">
					<Headline weight="500" size="1em" variants={child}>
						Brylle Duka
					</Headline>
					<Headline bold variants={child}>
						CREATIVE DESIGN &
					</Headline>
					<WatermarkText top="20%" left="5%" size="9em" variants={child}>
						CREATIVE
					</WatermarkText>

					<Headline bold variants={child}>
						WEB DEVELOPMENT
					</Headline>
					<WatermarkText top="60%" left="30%" size="9em" variants={child}>
						DEVELOPMENT
					</WatermarkText>
					<Headline
						style={{ marginBottom: "2em" }}
						weight="500"
						size="1em"
						variants={child}
					>
						UI/UX Designer & Web Developer
					</Headline>
					<ButtonStyled
						initial={{ x: -400, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: {
								duration: 2,
								ease: [0.6, 0.05, -0.01, 0.9],
								delay: 1,
							},
						}}
						outline
						onClick={() => console.log("click")}
						onMouseEnter={() => onCursor("hovered")}
						onMouseLeave={onCursor}
					>
						Contact me
					</ButtonStyled>
				</BannerTitle>

				<Wheel onCursor={onCursor} />
			</Banner>
			<WatermarkBox
				animate={{ x: 0 }}
				initial={{ x: -400 }}
				transition={{ duration: 1, ease: [0.6, 0.05, -0.1, 0.9] }}
			/>
			<Projects onCursor={onCursor} />
			<NextSection
				title="About Me"
				destination="/about/#me"
				onCursor={onCursor}
			/>
		</Container>
	);
};

export default Home;
