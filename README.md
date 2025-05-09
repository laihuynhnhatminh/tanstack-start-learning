# Tanstack Start

## How to name branches

To maintain a consistent and organized workflow, follow these guidelines for
naming branches:

- **Release**: Use `release/<version>` for branches preparing a new release.  
  _Example_: `release/v1.0.0`

- **Hotfix**: Use `hotfix/<short-description>` for urgent fixes to production.  
  _Example_: `hotfix/login-crash`

- **Feature**: Use `feature/<short-description>` for new features or
  enhancements.  
  _Example_: `feature/user-profile-page`

- **Bugfix**: Use `bugfix/<short-description>` for non-urgent bug fixes.  
  _Example_: `bugfix/payment-error`

## Tech stack

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces with reusable
  components.
- **Tanstack Start**: A React framework for server-side rendering, static site
  generation, and simplified routing.
- **Shadcn**: A collection of reusable, customizable UI components for rapid
  development.
- **Tailwind**: A utility-first CSS framework for styling with a highly
  customizable design system.
- **React-query**: A library for fetching, caching, and managing server-state in
  React applications.

## Folder Structure

This Tanstack application follows a modular folder structure for maintainability
and scalability. Below is an overview of the top-level directories and the
co-location strategy used within the `app` folder.

### Top-Level Folders

- **`app/`**: Contains the Tanstack app router pages and routes. Each page
  follows a co-location structure (see below).
- **`components/`**: Reusable UI components used across the application.
- **`constants/`**: Static values and configuration constants (e.g., API
  endpoints, app settings).
- **`enums/`**: TypeScript/JavaScript enums for defining fixed sets of values.
- **`hooks/`**: Custom React hooks for reusable logic.
- **`i18n/`**: Internationalization setup and translation files.
- **`lib/`**: Shared libraries, utilities, or external API integrations.
- **`messages/`**: Localized messages or content strings.
- **`styles/`**: Global styles, Tailwind configuration, or CSS files.
- **`types/`**: TypeScript type definitions and interfaces.
- **`utils/`**: General utility functions and helpers.

### Co-Location Structure in `app/` (To be updated to Tanstack, was formally NextJS)

Each page or route within the `app/` folder uses a co-location approach to keep
related files together. For example, a page folder like `app/dashboard/` might
contain:

- **`_components/`**: Page-specific UI components (e.g., `DashboardHeader.tsx`).
- **`_hooks/`**: Page-specific custom hooks (e.g., `useDashboardData.ts`).
- **`_models/`**: Page-specific data models or TypeScript types (e.g.,
  `DashboardModel.ts`).
- **`page.tsx`**: The main page component for the route.

_Example_:

```bash
  app/
  ├── dashboard/
  │   ├── _components/
  │   │   ├── DashboardHeader.tsx
  │   │   └── DashboardChart.tsx
  │   ├── _hooks/
  │   │   └── useDashboardData.ts
  │   ├── _models/
  │   │   └── DashboardModel.ts
  │   └── page.tsx
  ├── login/
  │   ├── _components/
  │   ├── _hooks/
  │   └── page.tsx
  └── layout.tsx
```

## Getting Started

- First, run this command to copy the env file and then add the missing env
  variable if needed:

```bash
./setup-env.sh
```

- Install all dependencies

```bash
npm install
```

- Boot development mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.
