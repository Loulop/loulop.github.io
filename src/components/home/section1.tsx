import React from "react";
import useReco from "../../hooks/useReco";

const Section1 = React.forwardRef<HTMLElement>((props, forwardedRef) => {
  const recommendation = useReco();

  return (
    <section ref={forwardedRef} id="home" className="min-h-screen relative">
      <div className="absolute inset-0 bg-logo" />
      <div className="container mx-auto px-5 mb-20">
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
          <form className="flex flex-col mb-10 md:mb-16 max-w-xl">
            <input
              type="text"
              placeholder="Enter your full name"
              className="mb-3 border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-3 border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="flex flex-row">
              <div className="md:w-full" />
              <button
                className="w-full brand-bg-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                NOTIFY ME
              </button>
            </div>
          </form>
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
