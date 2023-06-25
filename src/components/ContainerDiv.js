import React, { useContext } from "react";
import { imageContext } from "../contexts/ImageContext";
const ContainerDiv = () => {
	const { image, changeBgImage } = useContext(imageContext);

	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
				height: "100vh",
				width: "100vw",
				position: "fixed",
				top: "0",
				left: "0",
                zIndex: "-1",
                filter: "brightness(0.9)",
                backgroundBlendMode: "multiply"
			}}
		></div>
	);
};

export default ContainerDiv;
