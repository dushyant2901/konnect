import React from "react";
import { useUser } from "../../context";
import { useNavigate } from "react-router";
import { UserCard } from "../../components";
import "./Search.css";

const Search = () => {
  const { searchInput, searchedUsers } = useUser();
  const navigate = useNavigate();
  if (searchInput.length < 1) {
    navigate("/");
  }
  console.log({ searchedUsers, searchInput });
  return (
    <section className="search">
      <h3>Search Results</h3>
      {searchedUsers?.length === 0 ? (
        <p>No such user found</p>
      ) : (
        <>
          {searchedUsers?.map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
        </>
      )}
    </section>
  );
};

export default Search;
