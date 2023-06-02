import React from "react";

const Introrabbit = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden space-y-16">
      <h2 className="text-center text-xl font-semibold mt-7 md:text-3xl">
        Rabbit Eye Experiment
      </h2>
      <p className="text-center text-lg m-4 md:text-2xl">
        Instill Drugs One By One And Observe Their Effects On The Rabbit's Eye. Tabulate The Data And Draw Conclusions.
      </p>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <a href="#experiment-main">Proceed</a>
      </button>
    </div>
  );
};

export default Introrabbit;
