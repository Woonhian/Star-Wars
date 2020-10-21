import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Star Wars</h1>
      <h2>
        Click{" "}
        <span>
          <Link to="/people">People</Link>
        </span>{" "}
        to view a list of people
      </h2>
    </div>
  );
};

export default Home;
