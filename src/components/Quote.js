import React, { useContext, useEffect, useState } from "react";
import { quoteContext } from "../contexts/quoteContext";
import { Button } from "flowbite-react";
import LoadingSpinner from "./Spinner.js";
import { imageContext } from "../contexts/ImageContext";

const Quote = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { quotes, fetchQuote } = useContext(quoteContext);
    const { quote, sayer, tag } = quotes;
    const { image, fetchImages } = useContext(imageContext);
    
	const handleFetchQuote = () => {
		setIsLoading(true);
        fetchQuote(setIsLoading);
	};

	useEffect(() => {
        handleFetchQuote();
    }, []);
    
    useEffect(() => {
        console.log(tag);
        fetchImages(setIsLoading, [tag]);
    }, [tag]);
	return (
		<div>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div>
					<h1 className="text-2xl font-bold">Quote</h1>
					<p className="text-xl">{quote}</p>
					<p className="text-xl">{sayer}</p>
				</div>
			)}
			<br />
			<Button
				onClick={handleFetchQuote}
				disabled={isLoading}
				className=""
			>
				Fetch Quote
            </Button>
		</div>
	);
};

export default Quote;
