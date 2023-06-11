import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import SearchResultVideoCard from "./SearchResultVideoCard";

import { Context } from "../context/contextApi";
import { fetchDataFromApi } from "../utils/api";

const SearchResult = () => {
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);
  const [results, setResults] = useState();
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      // console.log("search result", res);
      setResults(res?.data?.contents);
      console.log("results", results);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] overflow-y-auto h-full bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {results &&
            results.map((item, index) => {
              return (
                <SearchResultVideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
