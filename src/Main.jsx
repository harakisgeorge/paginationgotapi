import React, { useState } from "react";
import { Character } from "./Character";
import { Pagination } from "./Pagination";
import { useFetchData } from "./useFetchData";

export const Main = () => {
  const { data } = useFetchData();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div>
      <div className="character-container">
        {currentRecords.map((character, index) => (
          <Character character={character} key={index} />
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};