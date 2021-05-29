import { useState, useEffect } from "react";

const { Fragment } = require("react");

const Quote = (props) => {
  const [quote, setQuote] = useState([]);
  async function getData() {
    const response = await fetch("https://api.quotable.io/random?maxLength=50");
    const data = await response.json();
    console.log(`${data.content} —${data.author}`);
    setQuote(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-4xl">
                {quote.content}
              </h1>
              <p className="mt-4 text-lg text-blueGray-200">{quote.author}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Quote;