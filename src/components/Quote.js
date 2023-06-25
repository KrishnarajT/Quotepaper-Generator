import React, { useContext, useEffect, useState } from "react";
import { quoteContext } from "../contexts/quoteContext";
import { Button } from "flowbite-react";
import LoadingSpinner from "./Spinner.js";
import { imageContext } from "../contexts/ImageContext";
import "../../src/input.css";

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
    <div className="h-screen">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex h-screen justify-center align-middle">
          <div className="flex h-full w-3/4 flex-col justify-center bg-transparent text-center">
            <blockquote className="rocher blockquote rounded-2xl border p-4 text-7xl text-white backdrop-blur-sm">
              {quote}
            </blockquote>
            <p className="rocher mint p-4 text-6xl text-white backdrop-blur-sm">
              {sayer}
            </p>
          </div>
        </div>
      )}
      <Button
        onClick={handleFetchQuote}
        disabled={isLoading}
        className="fixed bottom-0 right-0 m-4 opacity-20 hover:opacity-100"
        gradientDuoTone="tealToLime"
        outline
      >
        New Quote
      </Button>
    </div>
  );
};

export default Quote;
