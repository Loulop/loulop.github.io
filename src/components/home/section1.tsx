import React from "react";
import useReco from "../../hooks/useReco";
import NotifyMe from "../shared/notifyMe";

const Section1 = React.forwardRef<HTMLElement>((props, forwardedRef) => {
  const recommendation = useReco();

  return (
    <section ref={forwardedRef} id="home" className="h-screen relative">
      <div className="absolute inset-0 bg-logo" />
      <div className="container mx-auto px-5">
        <h2 className="my-20 text-5xl font-bold text-center gray-1-color">
          COMING SOON!
        </h2>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            <span>
              Artificial Intelligence <br />
              Powered{" "}
            </span>
            <span className="brand-color">
              Recommender <br />
              as a Service
            </span>
          </h1>
          <p className="text-lg mb-5 md:mb-10">
            <span>Deliver highly personalized </span>
            <span className="brand-color font-bold text-xl">{`${recommendation} `}</span>
            <span>recommendations at scale.</span>
          </p>
          <NotifyMe />
        </div>
        <div>
          <button className="text-5xl mr-7 gray-1-color hover:text-gray-700">
            <span className="mdi mdi-github"></span>
          </button>
          <button className="text-5xl mr-7 gray-1-color hover:text-gray-700">
            <span className="mdi mdi-twitter"></span>
          </button>
          <button className="text-5xl mr-7 gray-1-color hover:text-gray-700">
            <span className="mdi mdi-instagram"></span>
          </button>
          <button className="text-5xl mr-7 gray-1-color hover:text-gray-700">
            <span className="mdi mdi-email"></span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Section1;
