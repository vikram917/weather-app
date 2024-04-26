"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "@/api/api";
import InfiniteScroll from 'react-infinite-scroll-component';
import { City } from '@/types/city';
import CityTable from '@/components/CityTable';

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [page, setPage] = useState(1); // Initialize page to 1
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchDataFromApi();
  }, []); // Fetch data only on component mount

  const fetchDataFromApi = async () => {
    try {
      const data = await fetchData();
      setCities((prevCities) => [...prevCities, ...data]);
      setPage(page + 1); // Increment page for the next fetch
      setHasMore(data.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadMoreCities = () => {
    fetchDataFromApi();
  };

  return (
    <main className='p-10'>
   
      <InfiniteScroll
        dataLength={cities.length}
        next={loadMoreCities}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more cities to load</p>}
      >
         <CityTable cities={cities}/>
      </InfiniteScroll>
      
    </main>
  );
}
