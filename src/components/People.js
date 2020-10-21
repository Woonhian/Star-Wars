import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const People = () => {
  // Access match.params of the current route
  const { id } = useParams();

  const [people, setPeople] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      const results = await Axios(`https://swapi.dev/api/people/${id}`);
      setPeople(results.data);
      setIsLoading(false);
    };
    fetchPeople();
  }, []);

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
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{people.name}</h2>
      <div className="text-center">
        <h5 className="text-capitalize text-monospace">
          Gender: {people.gender}
        </h5>
        <h5 className="text-capitalize text-monospace">
          Birth Year: {people.birth_year}
        </h5>
        <h5 className="text-capitalize text-monospace">
          Height: {people.height}
        </h5>
        <h5 className="text-capitalize text-monospace">Mass: {people.mass}</h5>
        <h5 className="text-capitalize text-monospace">
          Eye Color: {people.eye_color}
        </h5>
        <h5 className="text-capitalize text-monospace">
          Hair Color: {people.hair_color}
        </h5>
        <h5 className="text-capitalize text-monospace">
          Skin Color: {people.skin_color}
        </h5>
      </div>
    </div>
  );
};

export default People;
