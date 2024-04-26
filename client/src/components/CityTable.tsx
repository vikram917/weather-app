import React from "react";
import { City } from "@/types/city";
import { useRouter } from "next/navigation";

const CityTable = ({ cities }: { cities: City[] }) => {
  const router = useRouter();

  const handleCityClick = (city: City) => {
    router.push(`/weather?city=${city.name}`);
  };

  return (
    <div className="flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden">
      <table className="items-center w-full text-center">
        <thead className="bg-blue-600 text-white text-xl">
          <tr>
            <th className="p-4 w-80">City</th>
            <th className="p-4 w-80">Country</th>
            <th className="p-4 w-80">Timezone</th>
            <th className="p-4 w-80">Logitude</th>
            <th className="p-4 w-80">Latitude</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr
              key={city.geoname_id}
              className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-200 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCityClick(city)}
            >
              <td className="p-2">{city.name}</td>
              <td className="p-2">{city.cou_name_en}</td>
              <td className="p-2">{city.timezone}</td>
              <td className="p-2">{city.coordinates.lon}</td>
              <td className="p-2">{city.coordinates.lat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;