import React from 'react'

function Hero() {
  return (
    <div className="py-5 px-20 self-center bg-blue-100 text-emerald-950 border-x-10 border-y-15 border-emerald-300 font-sans">
      <div className="flex justify-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          Maxing our <span className="text-black font-bold">GPA</span>
        </h1>
      </div>
      <div className="flex justify-end">
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          one <span className="text-amber-400">class</span> at a time.
        </h2>
      </div>
    </div>
  );
}

export default Hero