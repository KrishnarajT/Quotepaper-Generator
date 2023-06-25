import React, { createContext, useState } from "react";
import axios from "axios";
import { createClient } from "pexels";

export const imageContext = createContext();

const pixabay_api_key = "18846369-871c95044dd7c0f31f2b303e0";
const unsplash_api_key = "UBAXKPq5WgOxU9z7XjLZrt8B0hayG2dv8gh_vyGQg-0";
const pexels_api_key =
	"RfvKt0kQLXP7affcVkFgHWHcsRSD9CGKz91wOPBeLf7suLFEJJdjSWv3";
const client = createClient(pexels_api_key);

const ImageContextProvider = (props) => {
	const [image, setImages] = useState("");

	const fetchImages = async (setIsLoading, queries) => {
		setIsLoading(true);
		console.log(queries);
		let query = "nature";
		try {
			let query = [...queries];
			query = query.join("+");
            // if the query contains "famous quotes" change it to nature.
            if (query.includes("famous quotes")) {
				query = "nature";
			}
			console.log(query);
		} catch (error) {
			console.log(error);
			query = "nature";
		}

		// fetching images
		const pixabay_response = await axios.get(
			`https://pixabay.com/api/?key=${pixabay_api_key}&q=${query}&image_type=photo&pretty=true&per_page=200`
		);

		const numberOfPhotos = 30;

		const unsplash_response = await axios.get(
			`https://api.unsplash.com/search/photos/?query=${query}&client_id=${unsplash_api_key}&per_page=${numberOfPhotos}`
		);

		const pexels_response = await client.photos.search({
			query,
			per_page: 80,
		});

        let pix = pixabay_response.data.hits.map(
			(image) => image.largeImageURL
        );
        let uns = unsplash_response.data.results.map(
            (image) => image.urls.full
        );
        let pex = pexels_response.photos.map(
            (image) => image.src.large2x
        );

        const data = [...pix, ...uns, ...pex];
        console.log(data.length);

        // select one image at random:
		const randomImage = data[Math.floor(Math.random() * data.length)];
		console.log(randomImage);
		setImages(randomImage);
        setIsLoading(false);
	};
	return (
		<div>
			<imageContext.Provider value={{ image, fetchImages }}>
				{props.children}
			</imageContext.Provider>
		</div>
	);
};

export default ImageContextProvider;