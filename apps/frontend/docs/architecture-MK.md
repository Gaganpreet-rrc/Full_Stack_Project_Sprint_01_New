Architecture Layout – Manjot Kaur
### 1. useLogin Hook
### What it does:
- Manages login presentation state including logged-in users list, success/error messages, and login/logout handlers.

### Logic & separation:
- Contains only presentation logic (state management and UI interaction). It does not validate credentials or access data directly. It calls the LoginService to handle authentication logic. This keeps UI concerns separate from business and data logic.

### Where used:
- Used in Login.tsx. The component calls useLogin() and uses the returned state and functions (handleLogin, handleLogout, loggedInUsers, message) to control the UI.

### 2. LoginService Service

### What it does:
- Handles authentication business logic such as validating username and password and returning appropriate error messages.

### Logic & separation:
- Contains only business rules (checking if user exists and validating password). It does not manage UI state and does not directly store data. It interacts with LoginRepository to retrieve user data. This ensures business logic is centralized and reusable.

### Where used:
- Used inside the useLogin hook. The hook calls service.login() when a user submits the login form.

### 3. LoginRepository Repository

### What it does:
- Handles data access for login users. Provides CRUD operations (getAll, getByUsername, create, update, delete) and imports test data from testLoginData.

### Logic & separation:
- Contains only data access logic. It retrieves and modifies user data but does not handle validation or UI logic. A TypeScript type LoginUser defines the structure of user objects. This makes it easy to replace test data with a real backend later.

### Where used:
- Used inside LoginService. The service calls repository methods like getByUsername() to validate login credentials. The Login component does not directly access the repository.