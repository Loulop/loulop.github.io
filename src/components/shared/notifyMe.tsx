import React from "react";

const NotifyMe = () => {
  return (
    <form
      className="flex flex-col mb-10 md:mb-16 max-w-xl"
      action="https://github.us20.list-manage.com/subscribe/post"
    >
      <input type="hidden" name="u" value="892ee37f2445ce1319bdde5d6" />
      <input type="hidden" name="id" value="1a577e4925" />

      <input
        type="text"
        name="MERGE1"
        id="MERGE1"
        size={25}
        placeholder="Enter your full name"
        className="mb-3 border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <input
        type="email"
        name="MERGE0"
        id="MERGE0"
        size={25}
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
  );
};

export default NotifyMe;
