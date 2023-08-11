import React from "react";
import "./Sort.css";
import { usePost } from "../../context";
import { sortTypes } from "../../utils/constants";

const Sort = () => {
  const { sortTypeHandler, sortBy } = usePost();
  return (
    <section className="sort">
      {sortTypes.map((sortType) => {
        return (
          <button
            className={`${
              sortType === sortBy ? "btn btn-primary" : "btn btn-secondary"
            }`}
            onClick={() => {
              sortTypeHandler(sortType);
            }}
            key={sortType}
          >
            {sortType}
          </button>
        );
      })}
    </section>
  );
};

export default Sort;
