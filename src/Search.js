import React, { useState } from "react";

const Search = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul></ul>
    </div>
  );
};

export default Search;
