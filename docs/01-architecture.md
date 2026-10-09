# Architecture

## Overview

This project is a React + Vite application that implements a Contact Management system. The architecture follows a simple layered approach to separate UI, business logic, and data access responsibilities.

The goal is to keep components reusable, maintainable, and easy to scale as the application grows.

---

## Project Structure

```text
src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
│
├── components/
│   ├── ContactForm.jsx
│   ├── ContactList.jsx
│   ├── Pagination.jsx
│   ├── SearchBar.jsx
│   └── Test.jsx
│
├── features/
│   └── contacts/
│       └── contactsService.js
│
├── pages/
│   ├── ContactManagerPage.jsx
│   └── ContactManagerPage.css
│
├── App.jsx
└── main.jsx

public/
├── favicon.svg
└── icons.svg
```

---

## Architecture Layers

The application follows a layered architecture:

```text
Page
 ↓
Component
 ↓
Feature Service
 ↓
Mock Data / API
```

### Page Layer

Responsible for:

- Organizing page layout
- Managing page-level state
- Coordinating interaction between components
- Calling business services

Current page:

- ContactManagerPage

---

### Component Layer

Responsible for:

- Rendering UI
- Receiving props
- Emitting user actions
- Remaining reusable and independent

Components:

- ContactList
- ContactForm
- SearchBar
- Pagination

These components should not contain business rules or direct data access logic.

---

### Feature Service Layer

Responsible for:

- Business logic
- CRUD operations
- Data transformation
- Communication with APIs or mock data

Current service:

```text
features/
└── contacts/
    └── contactsService.js
```

Responsibilities:

- Create contacts
- Retrieve contact lists
- Update contact information
- Delete contacts
- Filter and search contacts

---

### Data Layer

Currently:

```text
Mock Data
```

Future:

```text
REST API
Database
```

The service layer acts as an abstraction so the UI remains unchanged when switching from mock data to a real backend.

---

## Module Responsibilities

### ContactManagerPage

Responsibilities:

- Main contact management screen
- State management
- Event handling
- Service coordination

Examples:

- Load contacts
- Handle create/update/delete actions
- Handle filtering and pagination

---

### ContactList

Responsibilities:

- Display contact data
- Render list items
- Trigger edit/delete callbacks

Inputs:

- contacts
- loading state
- handlers

---

### ContactForm

Responsibilities:

- Create new contacts
- Edit existing contacts
- Form validation

Inputs:

- contact data
- submit callback

Outputs:

- create/update events

---

### SearchBar

Responsibilities:

- Search user input
- Filter contacts by keyword

Outputs:

- search query updates

---

### Pagination

Responsibilities:

- Page navigation
- Display page controls

Inputs:

- current page
- total pages

Outputs:

- page change events

---

### contactsService

Responsibilities:

- Contact CRUD operations
- Data filtering
- Data access abstraction

Example API:

```javascript
getContacts()
createContact(contact)
updateContact(id, contact)
deleteContact(id)
searchContacts(keyword)
```

---

## Application Flow

### Initial Load

```text
main.jsx
    ↓
App.jsx
    ↓
ContactManagerPage
    ↓
contactsService.getContacts()
    ↓
Render ContactList
```

---

### Create Contact

```text
ContactForm
    ↓
Submit
    ↓
ContactManagerPage
    ↓
contactsService.createContact()
    ↓
Refresh state
    ↓
ContactList re-render
```

---

### Search Contact

```text
SearchBar
    ↓
Search keyword
    ↓
ContactManagerPage
    ↓
contactsService.searchContacts()
    ↓
Filtered contacts
    ↓
ContactList
```

---

## State Management

Current approach:

```text
React Hooks
├── useState
├── useEffect
└── Component Props
```

Suitable for:

- Small projects
- Single-page applications
- Local UI state

Future options:

- Context API
- Redux Toolkit
- Zustand

---

## Design Principles

### Separation of Concerns

Each layer has a single responsibility:

- Pages manage workflows
- Components render UI
- Services manage data

---

### Reusability

Components should:

- Be independent
- Accept props
- Avoid feature-specific logic

---

### Maintainability

Business logic must not be embedded directly into UI components.

Recommended:

```text
UI → Service → Data
```

Avoid:

```text
UI → Data
```

---

### Scalability

New features should follow the same structure:

```text
features/
├── contacts/
├── users/
├── products/
└── orders/
```

Each feature contains its own services and business logic.

---

## Coding Rules

### Components

✅ Use functional components

✅ Use React Hooks

✅ Keep components small and focused

✅ Prefer composition over large components

❌ Avoid duplicated UI logic

❌ Avoid direct data manipulation

---

### Services

✅ Keep business logic inside services

✅ Centralize data access

✅ Use async functions for API-ready design

Example:

```javascript
export async function getContacts() {
  return contacts;
}
```

---

### Files & Folders

✅ Reusable UI → `/components`

✅ Feature logic → `/features`

✅ Page screens → `/pages`

✅ Static assets → `/assets`

❌ Do not place business logic inside components

❌ Do not place page logic inside reusable components

---

## Future Improvements

Potential enhancements:

- REST API integration
- Form validation library (React Hook Form)
- State management with Redux Toolkit or Zustand
- Unit testing with Vitest
- Integration testing with React Testing Library
- TypeScript migration
- Error boundaries
- Authentication & authorization
- Backend persistence

---

## Summary

The project follows a lightweight layered architecture:

```text
UI (Pages & Components)
          ↓
Business Logic (Services)
          ↓
Data Source (Mock Data / API)
```

This structure improves maintainability, scalability, and separation of concerns while remaining simple enough for small to medium-sized React applications.