import React from "react";
import SearchFilter from "../../Components/searchFilter/Searchfilter";
import { useLibraryContext } from "../../context/LibraryContext";

export default function SearchFilterPage() {
  const { search, setSearch } = useLibraryContext();
  return <SearchFilter search={search} setSearch={setSearch} />;
}