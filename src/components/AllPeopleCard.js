import React from "react";
import { Link } from "react-router-dom";

const AllPeopleCard = ({ data, number }) => {
  return (
    <div className="col-2 mr-3 mb-5 border border-dark rounded text-center p-3">
      <Link to={`/people/${number}`}>
        <div>{data.name}</div>
      </Link>
    </div>
  );
};

export default AllPeopleCard;
