import React from "react";
import DayInfo from "./DayInfo";
import Image from "next/image";
import { WeatherData } from "@/types/weather";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const Card = ({ weatherData }: WeatherCardProps) => {
  return (
    <div className="h-full">
      <div className="h-3/5 text-center border rounded-md">
        <div className=" rounded-md">
          <h1 className="text-xl font-semibold text-slate-600">Temprature</h1>
        </div>
        <div className="h-full">
          <Image src={"/tempgraph.png"} width={1000} height={80} alt="" />
        </div>
      </div>
      <div className="flex h-2/5 space-x-4">
        <DayInfo />
        <DayInfo />
        <DayInfo />
        <DayInfo />
      </div>
    </div>
  );
};

export default Card;
