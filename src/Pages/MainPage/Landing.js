import React from "react";

// components
import BooksPreview from "components/BooksPreview/BooksPreview";
import QuoteSection from "./Components/QuoteSection/QuoteSection";
import Authors from "../MainPage/Components/Popular_Author/Authors";

export default function Landing() {
  return (
    <>
      <main>
        <QuoteSection />
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <BooksPreview />
        </section>

        <section className="pt-20 pb-48">
          <Authors />
        </section>
      </main>
    </>
  );
}