import React, { useContext, useEffect, useState } from "react";
import { quoteContext } from "../contexts/quoteContext";
import { Button } from "flowbite-react";
import LoadingSpinner from "./Spinner.js";

const Quote = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleFetchQuote = () => {
		setIsLoading(true);
		fetchQuote(setIsLoading);
	};

	const { quotes, fetchQuote } = useContext(quoteContext);
	const { quote, sayer } = quotes;

	useEffect(() => {
		fetchQuote(setIsLoading);
	}, []);
	return (
		<div>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div>
					<h1 className="text-2xl font-bold">Quote</h1>
					<p className="text-xl">{quote}</p>
					<p className="text-xl">- {sayer}</p>
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
