import React, { useContext, useEffect } from "react";
import QuoteContextProvider from "./contexts/quoteContext";
import Quote from "./components/Quote";
import ImageContextProvider from "./contexts/ImageContext";
import ContainerDiv from "./components/ContainerDiv";
function App() {
  return (
    <div className="App">
      <QuoteContextProvider>
        <ImageContextProvider>
          <ContainerDiv />
          <Quote />
        </ImageContextProvider>
      </QuoteContextProvider>
    </div>
  );
}

export default App;
