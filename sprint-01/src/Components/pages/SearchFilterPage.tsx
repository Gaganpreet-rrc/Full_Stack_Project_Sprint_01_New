import React from "react";
import SearchFilter from "../../components/searchFilter/SearchFilter";

type SearchFilterPageProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchFilterPage({ search, setSearch }: SearchFilterPageProps) {
  return <SearchFilter search={search} setSearch={setSearch} />;
}
