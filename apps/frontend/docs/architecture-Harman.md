# Architecture – Harmanpreet Kaur

## 1. `useSearchFilter' Hook

**What it does:**  
The `useSearchFilter` hook manages the search input and keeps a list of past searches (history). It provides functions to:  
- Perform a search (`handleSearch`)  
- Remove items from search history (`handleRemove`)  
- The hook uses `searchService` to check if the input is valid and `searchFilterRepo` to save or retrieve search history. After a successful search, it automatically navigates to the Book List page.

**Why this logic is here:**  
Hooks are used to handle **component-specific state and behavior**. By putting search and history logic in a hook:  
- The `SearchFilter` component stays focused on the UI.  
- Input validation, history management, and navigation are **separated from UI rendering**.  
- The hook allows the logic to be **reused** or modified independently of the component.

**How it separates concerns:**  
- **UI (component)** only handles displaying elements.  
- **Business rules (service)** handle input validation and filtering.  
- **Data storage (repository)** manages search history.  
- This separation makes the code easier to test, debug, and maintain.

**Where it is used:**  
- Inside the `SearchFilter` component to manage input, validate searches, handle history, and navigate to the Book List page.  
- Can be reused in any component that requires similar search functionality.


## 2. `searchService`

**What it does:**  
The `searchService` contains business logic related to searching:  
- `validateSearch(term)` ensures the input is not empty and has at least 2 characters.  
- `filterBooks(books, term)` filters books in a list based on the search term.  

**Why this logic is here:**  
- Services manage **business rules** and decisions, keeping them separate from the UI and data storage.  
- This allows multiple components and hooks to **reuse the same logic** without duplicating code.  
- It ensures consistency, e.g., all searches are validated in the same way.

**How it separates concerns:**  
- Moves all **validation and filtering rules** out of the component and hook.  
- Makes the hook and components **focused on state and UI** rather than handling logic.  
- Future updates to validation rules only require changes in the service.

**Where it is used:**  
- In `useSearchFilter` to validate user input before saving it to history or navigating.  
- In `BookList` and `BookListPage` to validate new books added and to filter displayed books.  

## 3. `searchFilterRepo` Repository

**What it does:**  
The `searchFilterRepo` manages search history data. It provides methods to:  
- `getAll()` – get all past searches  
- `add(term)` – add a new search term  
- `getById(id)` – get a specific search by ID  
- `update(id, updated)` – update an existing search  
- `remove(id)` – delete a search item  

**Why this logic is here:**  
- Repositories handle **data storage and retrieval**, separating it from UI and business rules.  
- This keeps hooks and components focused on behavior and UI.  
- Makes it easier to replace or extend storage in the future, for example, switching from in-memory storage to a database.

**How it separates concerns:**  
- Ensures **all data management** is centralized in one place.  
- Hooks or components never directly modify storage, they always call the repository.  
- Maintains a **single source of truth** for search history, avoiding duplication or inconsistencies.

**Where it is used:**  
- The `useSearchFilter` hook uses it to read, add, and remove search history.  
- The repository can be reused in other components that need access to search history, making the architecture scalable.
