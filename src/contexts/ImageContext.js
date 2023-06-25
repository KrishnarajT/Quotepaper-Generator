import React, { createContext, useState } from "react";
import axios from "axios";

export const imageContext = createContext();

const pixabay_api_key = "18846369-871c95044dd7c0f31f2b303e0";
const unsplash_api_key = "UBAXKPq5WgOxU9z7XjLZrt8B0hayG2dv8gh_vyGQg-0";
const pexels_api_key =
    "RfvKt0kQLXP7affcVkFgHWHcsRSD9CGKz91wOPBeLf7suLFEJJdjSWv3";
    
const ImageContextProvider = (props) => {
    
    const [images, setImages] = useState({
        query: "nature",
        image: ""
    });

    const fetchImages = async (setIsLoading, query) => {
        setIsLoading(true);
        const response = await axios.get(
            `https://pixabay.com/api/?key=${pixabay_api_key}&q=${query}&image_type=photo`
        );
        const data = await response.data;
        setImages({
            query: query,
            image: data.hits[0].largeImageURL
        });
        setIsLoading(false);
    };
	return (
		<div>
			<imageContext.Provider value={{ images, fetchImages }}>
				{props.children}
			</imageContext.Provider>
		</div>
	);
};

export default ImageContextProvider;
