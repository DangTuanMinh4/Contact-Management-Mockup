---
root: false
targets: ["*"]
description: "UI and UX design guidelines, Bootstrap 5 styling rules, layout, color palette, and accessibility"
globs: ["src/**/*.{jsx,css,html}", "docs/**/*.md"]
---
# UI & UX Design System Rules

## 1. Layout Structure
- **Two-Column Layout**:
  - **Sidebar (Left Column)**: Dedicated navigation rail containing logo, menu items (Home, Workspace, Chats, Contacts, Settings, Help), and user profile status.
  - **Main Content Area (Right Column)**: Page header with dynamic title/counter (e.g., `Contacts (102)`), action toolbar (Search bar, Import, Add New Contact button), and data table/list container.
- **Fluid & Responsive Grid**: Utilize Bootstrap 5 grid system (`container-fluid`, `row`, `col-*`) ensuring smooth transition across desktop, tablet, and mobile breakpoints.

## 2. Color Palette & Theming
- **Primary Brand Color**: Vibrant Indigo/Purple (e.g., `#6A5ACD`, `#5C4EBA`) for active sidebar items, primary buttons (`.btn-primary`), focus states, and key branding elements.
- **Secondary Actions**: Neutral / outline buttons (`.btn-secondary`, `.btn-outline-secondary`) for secondary actions like "Import" and "Cancel".
- **Background Tones**: Neutral White (`#FFFFFF`) for content cards/tables and Light Gray (`#F8F9FA`, `#F3F4F6`) for page canvas and subtle borders.
- **Status Badges & Tag Styles**:
  - `Active`: Light blue badge (`.badge.bg-info-subtle.text-info` or custom soft blue).
  - `Inactive`: Light gray badge (`.badge.bg-secondary-subtle.text-secondary`).
  - `Frequent user`: Warm amber / yellow badge (`.badge.bg-warning-subtle.text-warning`).
  - `New user`: Fresh green badge (`.badge.bg-success-subtle.text-success`).

## 3. Typography & Visual Hierarchy
- **Font Family**: Clean modern Sans-serif (`Segoe UI`, `Roboto`, `Helvetica Neue`, sans-serif).
- **Hierarchy**:
  - Page Titles / Headings: Bold, prominent (`h4`, `h5`, `.fw-bold`).
  - Table Headers: Uppercase or semibold, muted gray text (`.text-muted`, `.fw-semibold`).
  - Body / Contact Details: Clean regular text with muted secondary details (e.g., email / company text in `.text-muted.small`).

## 4. Interaction & UX Principles
- **Feedback & States**:
  - Provide distinct visual feedback for Hover, Active, Focus, and Disabled states.
  - Display Empty States (`No contacts found matching your search`) when queries yield no records.
  - Confirmation modals / prompts before executing irreversible operations (e.g., Delete Contact).
- **Accessibility (a11y)**:
  - Form inputs must have descriptive `placeholder`, `aria-label`, or associated `<label>`.
  - Icon-only buttons must have `aria-label` or `title` tooltip for screen readers.
  - Maintain WCAG AA compliant color contrast ratios for text and badges.
