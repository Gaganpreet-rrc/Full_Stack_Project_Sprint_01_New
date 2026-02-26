import React, { createContext, useContext } from "react";
import { useBooks } from "../hooks/useBooks";

type LibraryContextType = ReturnType<typeof useBooks>;

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const booksHook = useBooks();
  return (
    <LibraryContext.Provider value={booksHook}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibraryContext = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibraryContext must be used within LibraryProvider");
  }
  return context;
};