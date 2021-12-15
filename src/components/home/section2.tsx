import React from "react";

const Section2 = React.forwardRef<HTMLElement>((props, forwardedRef) => {
  return (
    <section
      ref={forwardedRef}
      id="about-us"
      className="min-h-screen gray-6-bg-color flex flex-grow"
    >
      <div className="container mx-auto px-5 flex flex-col ">
        <div className="flex justify-center">
          <h1 className="mb-10 mt-20 md:my-20 text-3xl md:text-5xl text-center font-bold header">
            About Us
          </h1>
        </div>
        <p className="text-center text-base md:text-lg md:px-12 gray-1-color">
          Our Mission is to bring highest quality recommender as a service to
          our clients though a simple to dashboard and API. We aspire to provide
          AI powered recommendation service that scales up to millions of users
          and products. Do you manage a small digital agency that runs several
          e-shops? Or do you operate a CMS product used by thousands of
          customers?
          <br />
          Join us the journey, and give customers more of what they love :)
        </p>
        <div className="flex-grow" />
        <footer className="flex items-center text-base font-bold gray-4-color">
          <span>© Loulop 2021, Seoul, South Korea</span>
        </footer>
      </div>
    </section>
  );
});

export default Section2;
