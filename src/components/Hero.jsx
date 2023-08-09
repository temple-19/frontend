import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen/2 mx-auto text-center flex flex-col justify-center mt-9 mb-6">
        <p className="text-[#00df9a] font-bold p-2">
          FULL MENTORSHIP ON DISCORD
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Learn Real STRATEGIES
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Expertise in
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={['EUR/USD', 'USD/CAD', 'GBP/USD']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Message me and start a new stream of income TODAY
        </p>

        <a
          href="https://www.linkedin.com/in/temple-ozoadibe-793761256/"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          <button className="bg-[#00df9a] hover:bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Learn Forex Trading
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;