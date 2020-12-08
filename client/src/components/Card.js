import React from "react";

import {
	CardBox,
	CardNumber,
	CardThumbnail,
	CardTitle,
} from "../styled/projecStyled";
import { WatermarkText } from "../styled/globalStyled";

const Card = ({ boxNo, number, image, title, onCursor }) => {
	return (
		<CardBox
			boxNo={boxNo}
			onMouseEnter={() => onCursor("hovered")}
			onMouseLeave={onCursor}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.3 },
			}}
			whileTap={{ scale: 0.9 }}
		>
			<CardNumber>{number}</CardNumber>
			<CardThumbnail src={image}></CardThumbnail>
			<WatermarkText left="80%" top="70%" zindex="1">
				{number}
			</WatermarkText>
			<CardTitle>{title}</CardTitle>
		</CardBox>
	);
};

export default Card;
