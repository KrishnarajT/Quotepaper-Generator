import React from "react";
import QuoteContextProvider from "./contexts/quoteContext";
import Quote from "./components/Quote";

function App() {
	return (
		<div className="App">
			<QuoteContextProvider>
				<Quote />
			</QuoteContextProvider>
		</div>
	);
}

export default App;
