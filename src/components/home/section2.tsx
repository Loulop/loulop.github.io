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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
