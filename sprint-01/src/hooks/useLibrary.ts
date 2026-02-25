import { useState } from "react";
import type { Book } from "../types/Book";

export function useLibrary() {
  const [isGridView, setIsGridView] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const toggleView = () => setIsGridView(prev => !prev);
  const openModal = (book: Book) => {
    setSelectedBook(book);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedBook(null);
    setShowModal(false);
  };

  return {
    isGridView,
    toggleView,
    showModal,
    openModal,
    closeModal,
    selectedBook,
  };
}