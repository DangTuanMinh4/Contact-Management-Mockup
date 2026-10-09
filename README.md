# 📇 Contact Manager

A professional frontend CRUD application built to demonstrate modern React development practices, focusing on clean architecture and a seamless user experience.

## 🚀 Overview

Contact Manager is a streamlined web application that allows users to efficiently organize and manage their contact lists. It implements a full set of CRUD operations with a strong emphasis on separation of concerns and maintainable code.

### Key Features
- **Full CRUD Lifecycle**: Effortlessly create, view, update, and delete contact records.
- **Intelligent Search**: Real-time filtering of contacts based on keyword input.
- **Efficient Pagination**: Optimized display of large datasets through a paginated list view.
- **Robust Validation**: Built-in form validation to ensure data integrity for names, emails, and phone numbers.
- **Modern UI/UX**: A responsive two-column layout (Sidebar + Main Content) powered by Bootstrap 5.

---

## 🛠️ Tech Stack

| Technology | Version/Role | Description |
| :--- | :--- | :--- |
| **React** | `^19.2.8` | Core UI library with the latest React Compiler for optimization. |
| **Vite** | `^8.3.0` | Next-generation frontend tooling for fast HMR and builds. |
| **Bootstrap 5** | `^5.3.8` | CSS framework for responsive design and layout. |
| **React-Bootstrap** | `^2.10.10` | Bootstrap components reimagined for React. |
| **JavaScript** | ES6+ | Modern JavaScript for clean and concise logic. |

---

## 🏗️ Architecture

The project follows a **4-Layer Architecture** to ensure that UI, business logic, and data access remain decoupled:

**`Page`** $\rightarrow$ **`Component`** $\rightarrow$ **`Feature Service`** $\rightarrow$ **`Mock Data / API`**

### Layer Responsibilities
1. **Page Layer (`/pages`)**: Manages page-level state, coordinates component interaction, and calls business services.
2. **Component Layer (`/components`)**: Pure presentational components that receive props and emit user actions.
3. **Feature Service Layer (`/features`)**: Contains the core business logic, data transformations, and CRUD operations.
4. **Data Layer**: Mock data used to simulate a backend API.

### Directory Structure
```text
src/
├── assets/             # Static assets (images, svgs)
├── components/         # UI Components (ContactForm, ContactList, etc.)
│   ├── ContactForm.jsx
│   ├── ContactList.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── features/           # Business Logic & Services
│   └── contacts/
│       └── contactsService.js
├── pages/              # Page-level containers
│   ├── ContactManagerPage.jsx
│   └── ContactManagerPage.css
├── App.jsx             # Root Application Component
└── main.jsx            # Entry point
```

---

## 🚦 Getting Started

### Prerequisites
- **Node.js** (Latest LTS recommended)
- **npm** (Installed with Node.js)

### Installation & Execution
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend-intern-mockup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

---

## 📜 License
MIT © Contact Manager Project Team
