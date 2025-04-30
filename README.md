Got it! Here’s the updated **README.md** with headers (`#`, `##`, etc.) for a clean, organized structure:

---

# Apollo Clone Frontend

This is the frontend for the **Apollo 24|7** destination page for **General Physicians**, built using **Next.js** and **TypeScript**. It features a fully responsive layout with a doctor listing and filtering system, powered by backend API calls.

## 🚀 How It Works

### 1. **Initial Page Load**

- On page load (`/pages/index.tsx`), the app sends a **GET request** to fetch a paginated list of doctors from the backend API:
  ```ts
  fetch(`${API_BASE_URL}/list-doctor-with-filter?page=1&limit=10`);
  ```

- The doctors are displayed in a **card layout** with details like name, specialization, consultation fee, rating, and location.

### 2. **Doctor Filtering**

- Users can filter doctors by:
  - **Location**
  - **Consultation Fee**
  - **Rating**
  - **Availability**

- Example API call to filter doctors by location and rating:
  ```ts
  fetch(`${API_BASE_URL}/list-doctor-with-filter?location=delhi&rating=4`);
  ```

- The UI automatically updates to show the filtered results.

### 3. **Pagination**

- The list of doctors is paginated (e.g., showing 10 doctors per page).
- The frontend keeps track of the current page number and updates the list when the user clicks **Next** or **Previous**:
  ```ts
  fetch(`${API_BASE_URL}/list-doctor-with-filter?page=${currentPage}&limit=10`);
  ```

### 4. **API Integration**

- Doctor data is fetched from the backend through API calls defined in `.env.local`:
  ```
  NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
  ```

- Example fetch for doctor data:
  ```ts
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/list-doctor-with-filter?page=1`);
  const data = await res.json();
  ```

### 5. **SEO Support**

- The page is optimized for SEO using **Next.js `<Head>`** tags. For example:
  ```tsx
  <Head>
    <title>General Physicians | Apollo Clone</title>
    <meta name="description" content="Find the best general physicians in your area." />
  </Head>
  ```

## 📁 Project Structure

```
ApolloCloneFrontend/
│
├── components/           # Reusable UI components like DoctorCard, Filters, Pagination
├── pages/                # Next.js pages
│   └── index.tsx         # Home/Destination page with data fetching
├── public/               # Static assets
├── styles/               # Global and modular CSS
├── utils/                # API calls and helper functions
├── types/                # TypeScript types/interfaces
├── .env.local            # Environment variables
└── README.md             # Project documentation
```

## 🛠️ Technologies Used

- **Next.js** for SSR (Server-Side Rendering) and SEO optimization
- **TypeScript** for type safety
- **Tailwind CSS** (or your preferred CSS framework) for responsive and flexible styling
- **REST API** for fetching doctor data from the backend

## 💡 Features

- ✅ **Doctor Listings**: Displays doctors with name, rating, fee, and location.
- ✅ **Filters**: Allows users to filter doctors by location, rating, and consultation fee.
- ✅ **Pagination**: Displays doctor data with pagination.
- ✅ **Responsive UI**: Fully responsive design, mobile-friendly.
- ✅ **SEO Optimization**: Off-page SEO for better search engine ranking.

## 🏃‍♂️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/Kumaraman6723/ApolloCloneFrontend.git
cd ApolloCloneFrontend
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser.

## 🌍 Environment Variables

Create a `.env.local` file and add your API base URL:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

