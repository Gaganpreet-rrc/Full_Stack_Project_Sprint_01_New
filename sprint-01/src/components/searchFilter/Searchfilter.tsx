import React from "react";

import "./SearchFilter.css";
 
type SearchFilterProps = {

  search: string;

  setSearch: React.Dispatch<React.SetStateAction<string>>;

};
 
const SearchFilter = ({ search, setSearch }: SearchFilterProps) => {

  return (
<input

      type="text"

      placeholder="Search books..."

      value={search}

      onChange={(e) => setSearch(e.target.value)}

    />

  );

};
 
export default SearchFilter;

 