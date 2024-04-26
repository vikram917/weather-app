import React from "react";

const DayInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-md  w-80 space-y-10 mt-2 hover:bg-blue-500 hover:text-white hover:border-white">
      <div className="text-lg font-bold"><h1 className="text-2xl">Today</h1></div>
      <div className="text-8xl mr-2">☁️</div>
      <h1 className="text-xl">Humidity</h1>
      <h1 className="text-xl">30%</h1>
    </div>
  );
};

export default DayInfo;
