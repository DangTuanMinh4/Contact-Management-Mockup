# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

This document defines the functional and non-functional requirements for the Contact Manager application.

The goal is to provide a clear specification for developers, reviewers, and future contributors.

---

### 1.2 Scope

Contact Manager is a frontend web application that allows users to manage contact information.

The application supports:

- Creating contacts
- Viewing contacts
- Updating contacts
- Deleting contacts
- Searching contacts

The current version operates without authentication or backend integration.

---

### 1.3 Definitions

| Term | Description |
|--------|--------|
| CRUD | Create, Read, Update, Delete |
| UI | User Interface |
| Contact | A person record containing basic information |
| Search | Filtering contacts using a keyword |

---

## 2. Product Overview

### 2.1 Product Perspective

The application is a standalone frontend system built with React.

Architecture:

```text
User
 ↓
UI Components
 ↓
Business Logic
 ↓
Mock Data / Service
```

---

### 2.2 Product Functions

The system allows users to:

- Create contacts
- Display contact list
- Edit contact information
- Delete contacts
- Search contacts
- Navigate through contact pages

---

### 2.3 User Characteristics

Target users:

- General users
- Students
- Recruiters
- Small business owners

Users are expected to have basic web browsing skills.

---

## 3. Functional Requirements

### FR-001 Create Contact

#### Description

The system shall allow users to create a new contact.

#### Input

| Field | Required |
|---------|---------|
| Name | Yes |
| Email | Yes |
| Phone | Yes |

#### Flow

```text
User Clicks Add Contact
        ↓
Fill Form
        ↓
Validate Input
        ↓
Save Contact
        ↓
Update Contact List
```

#### Acceptance Criteria

- Contact is added successfully.
- Contact appears in the list.
- Invalid input is rejected.

---

### FR-002 View Contact List

#### Description

The system shall display all available contacts.

#### Acceptance Criteria

- Contacts display in list form.
- Data loads correctly.
- Empty state is shown when no contacts exist.

---

### FR-003 Update Contact

#### Description

The system shall allow users to edit an existing contact.

#### Flow

```text
Select Contact
       ↓
Edit Information
       ↓
Save Changes
       ↓
Refresh Contact List
```

#### Acceptance Criteria

- Contact information updates successfully.
- Modified data is displayed immediately.

---

### FR-004 Delete Contact

#### Description

The system shall allow users to remove a contact.

#### Flow

```text
Select Contact
       ↓
Delete Action
       ↓
Confirmation
       ↓
Remove Contact
```

#### Acceptance Criteria

- Contact is removed successfully.
- List updates automatically.

---

### FR-005 Search Contact

#### Description

The system shall allow users to search contacts using keywords.

#### Search Fields

- Name
- Email
- Phone

#### Acceptance Criteria

- Matching contacts are displayed.
- Non-matching contacts are filtered out.
- Search updates dynamically.

---

### FR-006 Pagination

#### Description

The system shall support pagination for contact lists.

#### Acceptance Criteria

- Users can move between pages.
- Correct records are displayed per page.
- Current page is highlighted.

---

## 4. Data Requirements

### 4.1 Contact Model

```javascript
{
  id: number,
  name: string,
  email: string,
  phone: string
}
```

---

### 4.2 Validation Rules

#### Name

- Required
- Minimum 2 characters

#### Email

- Required
- Must follow email format

Examples:

```text
user@example.com
john@gmail.com
```

#### Phone

- Required
- Numeric characters only
- Minimum 8 digits

---

## 5. User Interface Requirements

### Contact List

The UI shall display:

- Contact Name
- Contact Email
- Contact Phone
- Edit Button
- Delete Button

---

### Contact Form

The UI shall allow:

- Create mode
- Edit mode

Input fields:

- Name
- Email
- Phone

Actions:

- Save
- Cancel

---

### Search Area

The UI shall provide:

- Search textbox
- Real-time filtering

---

### Pagination Area

The UI shall provide:

- Previous button
- Next button
- Page numbers

---

## 6. Non-Functional Requirements

### NFR-001 Performance

The application should:

- Render quickly
- Handle at least 100 contacts smoothly
- Provide responsive interactions

---

### NFR-002 Usability

The application should:

- Be easy to learn
- Use clear labels
- Provide intuitive navigation

---

### NFR-003 Maintainability

The codebase shall:

- Follow React best practices
- Use component-based architecture
- Separate business logic from presentation logic

---

### NFR-004 Scalability

The architecture should support future extensions such as:

- Backend integration
- Authentication
- Advanced filtering
- Contact groups

---

### NFR-005 Compatibility

Supported browsers:

- Google Chrome
- Microsoft Edge
- Firefox

Latest stable versions are recommended.

---

## 7. Assumptions

- Users have internet access.
- Modern browsers are available.
- Data is stored in memory or mock services.
- No backend API exists in v1.0.

---

## 8. Constraints

- Frontend-only implementation
- No authentication
- No database persistence
- No third-party integrations

---

## 9. Use Cases

### UC-01 Create Contact

**Actor:** User

**Precondition:**

- Application is loaded.

**Main Flow:**

1. User clicks Add Contact.
2. System displays form.
3. User enters contact information.
4. User submits form.
5. System validates input.
6. System saves contact.
7. System updates contact list.

**Postcondition:**

- New contact exists in the system.

---

### UC-02 Search Contact

**Actor:** User

**Main Flow:**

1. User enters keyword.
2. System filters contact list.
3. Matching contacts are shown.

---

### UC-03 Update Contact

**Actor:** User

**Main Flow:**

1. User selects Edit.
2. System loads contact data.
3. User modifies information.
4. User saves changes.
5. System updates contact.

---

### UC-04 Delete Contact

**Actor:** User

**Main Flow:**

1. User selects Delete.
2. System requests confirmation.
3. User confirms.
4. System removes contact.

---

## 10. Acceptance Criteria Summary

| ID | Requirement | Status |
|----|----|----|
| FR-001 | Create Contact | Required |
| FR-002 | View Contact List | Required |
| FR-003 | Update Contact | Required |
| FR-004 | Delete Contact | Required |
| FR-005 | Search Contact | Required |
| FR-006 | Pagination | Required |

---

## 11. Future Enhancements

Potential future versions may include:

- Authentication
- Authorization
- API Integration
- Database Storage
- Contact Groups
- Import / Export
- Dark Mode
- Dashboard
- Activity Logs

