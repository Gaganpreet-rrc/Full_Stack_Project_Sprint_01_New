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
# Service Definition
- Reviewed my team member’s `LoginService` implementation and provided feedback.
- Ensured the service strictly contains business logic.
- Confirmed proper separation from presentation and data access layers before committing changes.

# Login Service
- Handles authentication business logic (validates username and password).
- Uses `LoginRepository` to retrieve user data.
- Keeps business rules separate from UI and data access logic.

# Login Repository
- Manages CRUD operations for login users.
- Uses TypeScript test data (`testLoginUsers`) to simulate external data.
- Handles only data access logic, no UI or validation logic.

# Login Component
- Uses `useLogin` hook to manage login UI state.
- Does not directly access service or repository.
- Demonstrates the Hook → Service → Repository architecture flow.

# Architecture Document
- Located at `docs/architecture-MK.md`.
- Explains hooks, services, and repository structure.
- Describes separation of presentation, business, and data concerns.