import React from "react";

// component
import BooksPreview from "./Components/BookPreview/BooksPreview";
import QuoteSection from "./Components/QuoteSection/QuoteSection";

export default function Landing() {
  return (
    <>
      <main>
        <QuoteSection />
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <BooksPreview />
        </section>

     
      </main>
    </>
  );
}
