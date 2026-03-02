import { useLibraryContext } from "../../context/LibraryContext";
import SearchFilter from "../../Components/searchFilter/Searchfilter";

export default function SearchFilterPage() {
  const { search, setSearch } = useLibraryContext();

  return <SearchFilter search={search} setSearch={setSearch} />;
}