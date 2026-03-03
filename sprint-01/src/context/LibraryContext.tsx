import React, { createContext, useContext } from "react";
import { useBooks } from "../hooks/useBooks";
import { useLibrary } from "../hooks/useLibrary";

type LibraryContextType = ReturnType<typeof useBooks> &
  ReturnType<typeof useLibrary>;

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const booksHook = useBooks();    
  const libraryHook = useLibrary();  

  return (
    <LibraryContext.Provider value={{ ...booksHook, ...libraryHook }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibraryContext = () => {
  const context = useContext(LibraryContext);
  if (!context) throw new Error("useLibraryContext must be used within LibraryProvider");
  return context;
};