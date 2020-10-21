import Axios from "axios";
import React, { useEffect, useState } from "react";
import AllPeopleCard from "./AllPeopleCard";

const AllPeople = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch AllPeople
  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      const results = await Axios(`https://swapi.dev/api/people/?page=${page}`);
      setPeople(results.data);
      setIsLoading(false);
    };
    fetchPeople();
  }, [page]);

  // Get the peopleID
  const getId = (peopleId) =>
    peopleId
      .split("/")
      .filter((i) => i)
      .pop();

  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const loadPrevious = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  const loadNext = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">List of People</h2>
      <div className="row d-flex justify-content-center">
        {people.results?.map((i, key) => {
          return <AllPeopleCard data={i} number={getId(i.url)} key={key} />;
        })}
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary btn-sm mr-2"
          onClick={(e) => loadPrevious(e)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm ml-2"
          onClick={(e) => loadNext(e)}
          disabled={page >= people.count / 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPeople;
