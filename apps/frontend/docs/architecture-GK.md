# Architecture Layout – Gaganpreet Kaur

## 1. useBooks Hook
**What it does:** Manages book state (list, add, remove) and exposes functions for components.  
**Logic & separation:** Keeps UI separate from data logic; interacts with repository indirectly.  
**Where used:** BookList.tsx, Home.tsx via useLibraryContext.

## 2. bookListRepo Repository
**What it does:** Handles book data operations like add, get, update, remove.
**Logic & separation:** Only manages data; does not handle UI or validation.  
**Where used:** Accessed through useBooks hook in BookList.tsx and Home.tsx.

## 3. searchService Service
**What it does:** Validates book input or search terms.  
**Logic & separation:** Centralizes validation logic separate from UI and data.  
**Where used:** BookList.tsx and SearchFilter.tsx.

## 4. useLibrary Hook
**What it does:** Manages UI state like grid/list view toggling.  
**Logic & separation:** Keeps UI concerns separate from book state.  
**Where used:** BookList.tsx, Home.tsx.

## 5. useLibraryContext Context
**What it does:** Combines hooks and provides shared state via context.  
**Logic & separation:** Avoids prop drilling, gives components access to book and UI state.  
**Where used:** BookList.tsx, Home.tsx.