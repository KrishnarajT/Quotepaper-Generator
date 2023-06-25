import React, { createContext, useState } from "react";

export const quoteContext = createContext();

const QuoteContextProvider = (props) => {
    
    const [quotes, setQuotes] = useState({
        quote: "hi",
        sayer: ""
    });

    const fetchQuote = async (setIsLoading) => {
        setIsLoading(true);
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuotes({
            quote: data.content,
            sayer: data.author,
            tag: data.tags
        });
    };

	return (
		<div>
			<quoteContext.Provider value={{ quotes, fetchQuote }}>
				{props.children}
			</quoteContext.Provider>
		</div>
	);
};

export default QuoteContextProvider;
