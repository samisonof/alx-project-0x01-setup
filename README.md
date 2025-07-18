# alx-project-0x01-setup
# alx-project-0x01-setup

This project is part of the ALX Frontend Specialization and demonstrates creating a simplified social platform using **Next.js**, **TypeScript**, and **TailwindCSS**.

## 📁 Project Structure

- **components/common/**: Reusable UI components like `Button`, `Card`, `Pill`, `PostModal`, `UserModal`, etc.
- **interfaces/**: TypeScript interfaces for data modeling.
- **pages/**: Pages for routing (`/posts`, `/users`, etc.).
- **public/assets/images/**: Static image assets.

## 🚀 Features Implemented

### ✅ Task 0–3: Setup & UI Components
- Initialized project with Next.js, TypeScript, TailwindCSS.
- Created reusable components: `Button`, `Card`, and `Pill`.
- Supported size and shape props for `Button` component.
- Rendered different button variants under `/landing`.

### ✅ Task 4: Post Modal
- Created a `PostModal` component for submitting posts.
- Used controlled inputs and lifted state.
- Integrated modal in `/posts` page.

### ✅ Task 5: User Modal
- Created a `UserModal` form for adding new users.
- Form fields include:
  - Name, username, email, phone, website
  - Address: street, suite, city, zipcode, geo (lat/lng)
  - Company: name, catchPhrase, bs
- Integrated modal in `/users` page.
- Dynamically updates user list when form is submitted.

## 🧠 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📷 Screenshots

> You can add screenshots here by uploading them to `public/assets/images/` and referencing them with `![Alt Text](./public/assets/images/screenshot.png)`

## 💻 Running Locally

Install dependencies:

```bash
npm install
