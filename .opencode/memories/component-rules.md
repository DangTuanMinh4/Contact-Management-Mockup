# Frontend Component Architecture & Design Rules

## 1. 4-Layer Architecture Hierarchy
All application logic must respect the strict 4-layer separation of concerns:
```text
Page Layer (src/pages/)
  ↓
Component Layer (src/components/)
  ↓
Feature Service Layer (src/features/)
  ↓
Mock Data / API Layer (src/features/**/mockData.js or api.js)
```

- **Page Layer (`src/pages/`)**:
  - Orchestrates overall page view, connects feature services with presentational components.
  - Manages high-level page state (current page, active search keyword, selected contact for editing, modal visibility).
- **Component Layer (`src/components/`)**:
  - Pure presentational and interactive UI blocks.
  - Receives data and callbacks strictly via props.
  - Avoids calling API or external mock services directly.
- **Feature Service Layer (`src/features/`)**:
  - Encapsulates business logic, data formatting, CRUD operations, and pagination/filtering algorithms.
- **Mock Data / Data Layer**:
  - In-memory data store with realistic mock items, simulating asynchronous API contracts.

## 2. Core Components Breakdown
- **`SearchBar.jsx`**:
  - Input field for keyword search with real-time change triggers (`onSearchChange`) and clear capability.
- **`ContactList.jsx`**:
  - Renders the responsive data table / list view of contact records.
  - Displays user avatar, name, email, phone, tags, and action buttons (`Edit`, `Delete`).
  - Renders accessible empty state when the contact list is empty.
- **`ContactForm.jsx`**:
  - Handles contact creation and modification modal/form.
  - Performs client-side validation (required name, valid email regex, valid phone format).
  - Emits `onSubmit` with validated payload or `onCancel` to dismiss.
- **`Pagination.jsx`**:
  - Calculates page numbers, handles `currentPage`, `pageSize`, `totalItems`, and emits `onPageChange(page)`.
  - Disables previous/next buttons on boundary pages.

## 3. Component Design Rules & Contract Standards
- **Single Responsibility Principle (SRP)**: Each component must focus on one specific UI task.
- **Pure & Controlled Components**: Make form elements controlled (`value` + `onChange`).
- **Defensive Prop Types & Defaults**:
  ```jsx
  const ContactList = ({ contacts = [], onEdit = () => {}, onDelete = () => {} }) => {
    // ...
  };
  ```
- **Custom Hooks for Complex Logic**: Extract re-usable stateful logic (e.g., search debounce, pagination calculations) into custom hooks when component logic exceeds ~100 lines.
