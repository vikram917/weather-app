import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import WeatherCard from "./WeatherCard";

const WeatherChart = ({ data }) => {
  return (
    <div className="h-screen flex flex-col p-2 rounded-md space-y-4">
      <div className="flex flex-row p-2 space-x-4 items-center shadow-md rounded-lg bg-white">
        <Link href={"/city"}>
          <FontAwesomeIcon icon={faAngleLeft} className="h-6 text-slate-500" />
        </Link>
        <h1 className="text-2xl font-medium text-slate-600">{data.name}</h1>
        <input
          type="text"
          placeholder="Enter City"
          className="p-2 w-60 rounded-md text-center text-base text-gray-500 font-normal border border-slate-200"
        />
      </div>
      <div className="flex h-screen space-x-4">
        <div className="h-full w-2/5 flex space-x-4">
          <WeatherCard weatherData={data} />
        </div>
        <div className="w-full">
          <Card weatherData={data} />
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
