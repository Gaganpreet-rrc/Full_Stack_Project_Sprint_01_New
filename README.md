# Project Name
## Team Name: Library Management

### Team Members
- Gaganpreet Kaur
- Harmanpreet Kaur
- Manjot Kaur
- Parneet Kaur

### Project Description
This project is a Library Management Application. It allows users to explore books, track borrowed books, and interact with other users through book recommendations and reviews.

### User Stories

- As a user, I want to view and manage a library book list so that I can keep track of available and saved books.
- As a user, I want to search and filter books by title, author, or category so that I can quickly find books I’m interested in.
- As a user, I want to log in so that my book list and preferences are saved for future use.
- As a user, I want to view library tips and recommendations so that I can make better reading choices and use library resources effectively.


### Manjot Contribution:
# Service Definition:
- Reviewed my team member’s `LoginService` implementation and provided feedback.
- Ensured the service strictly contains business logic.
- Confirmed proper separation from presentation and data access layers before committing changes.

# Login Service:
- Handles authentication business logic (validates username and password).
- Uses `LoginRepository` to retrieve user data.
- Keeps business rules separate from UI and data access logic.

# Login Repository:
- Manages CRUD operations for login users.
- Uses TypeScript test data (`testLoginUsers`) to simulate external data.
- Handles only data access logic, no UI or validation logic.

# Login Component:
- Uses `useLogin` hook to manage login UI state.
- Does not directly access service or repository.
- Demonstrates the Hook → Service → Repository architecture flow.

# Architecture Document:
- Located at `docs/architecture-MK.md`.
- Explains hooks, services, and repository structure.
- Describes separation of presentation, business, and data concerns.
=======
### Harmanpreet Contribution:
- Services (T.2 & T.4)
  - Defined `searchService` to handle search validation and filtering logic, ensuring business rules are consistent and reusable. Used this service in `SearchFilter`, `BookList`, and `BookListPage` components.
  - The service is accessed through the useSearchFilter hook, maintaining proper separation between UI and business logic.

- Repositories and Test Data (I.1 & I.2)
    - Created searchFilterRepo to manage search history with methods to add, get, update, and remove search terms, using test data for initialization.
    - The repository is accessed through searchService and useSearchFilter, ensuring components do not directly interact with data storage logic.

- Component(I.3)
    - Created the useSearchFilter custom hook to encapsulate search validation, history management and navigation logic, ensuring business and persistence logic are separated from the UI layer.
    - Refactored the SearchFilter component to use the useSearchFilter hook so the component focuses only on UI rendering and user interaction.

- Architecture Document (I.4)
    - Created docs/architecture-Harman.md explaining the responsibilities and interaction of useSearchFilter, searchService and searchFilterRepo clearly documenting separation of concerns and usage.
### Gaganpreet Contribution:

- **Hooks (T.1 & T.4)**  
  - Created useBooks and useLibrary hooks to manage book and view state.  
  - Hooks are used in multiple components (Home, BookList) to avoid prop drilling and share state across pages.

- **Repositories (I.1 & I.2)**  
  - Built bookListRepo to handle CRUD operations on books.  
  - Repository uses test data to simulate external data and supports adding, updating, and removing books.  

- **Components (I.3)**  
  - Updated BookList and Home components to follow the Hook-Service-Repository pattern.  
  - Components use hooks for state, services for validation, and repository indirectly for data.  

- **Architecture Document (I.4)**  
  - Created docs/architecture-GK.md explaining the use of hooks, services, and repositories, and how each separates concerns.

## Backend & Frontend Integration (I.1 – I.4) - Parneet

            ### I.1 Back-end Resource Endpoint

            For the Library Tips feature, I created backend endpoints to handle requests from the frontend.  
            Routes were set up to handle getting tips, adding new tips, and deleting tips.

            Each request follows a proper structure:
            - Routes → Controllers → Services → Prisma → Database

            This ensures that all requests are validated, processed correctly, and connected to the database.

            ---

            ### I.2 Resource Database Schema

            I added a new Prisma model called `LibraryTip` to store tips in the database.

            The model includes:
            - `id` (primary key)
            - `title`
            - `description`

            The design follows proper database structure (Third Normal Form), where all fields depend on the primary key and there is no duplicate data.

            ---

            ### I.3 Front-end Repository sends requests to back-end

            I replaced the frontend test data with real API calls to the backend.

            The repository now:
            - Fetches tips using GET requests
            - Adds tips using POST requests
            - Deletes tips using DELETE requests

            This connects the frontend with the backend so that data is no longer temporary.

            ---

            ### I.4 Application State Persistence

            The application now stores data in the backend database instead of temporary frontend memory.

            For the Library Tips feature:
            - Tips are saved in the database
            - The frontend retrieves data from the backend on page load
            - Changes (add/delete) are reflected immediately

            Example:
            - If a user adds a tip and refreshes the page, the tip is still there
            - If a tip is deleted and the page is refreshed, it remains deleted

            This shows that the application state persists across sessions.