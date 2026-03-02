import { BookList } from "../BookList/bookList";
import { useLibrary } from "../../hooks/useLibrary";

type Props = {
  search: string;
};

export default function BookListPage({ search }: Props) {
  const { isGridView, toggleView } = useLibrary();

  return (
    <div>
      <h1>Library Books</h1>

      <button onClick={toggleView}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

      <BookList
        isGridView={isGridView}
        search={search}
      />
    </div>
  );
}
