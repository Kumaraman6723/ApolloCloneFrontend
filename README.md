
How Apollo Clone Frontend Works
This project is a frontend-only clone of the Apollo 24|7 General Physicians destination page.
It is built using Next.js and TypeScript.

Main Flow:
Landing Page (pages/index.tsx):

When the user opens the website, they land on the destination page.

It shows a list of doctors — like name, specialization, fees, rating, and location.

Fetching Doctors:

On page load, a GET request is made to the backend API:
list-doctor-with-filter

It fetches doctors with optional filters like:

Location

Rating

Consultation Fees

Availability

The fetched list is displayed in a nice card/grid format.

Filters:

Users can apply filters (example: filter by city, or doctors with 4+ star rating).

When a filter is selected:

The frontend makes another API call with those filter query params.

The list updates based on the filter response.

Pagination:

Only a few doctors are shown per page (for example, 10 per page).

When the user clicks Next or Previous:

A new API call is triggered with the new page number.

The doctor list updates accordingly.

SEO:

The page uses Next.js Head tags (<Head>) for good off-page SEO.

Meta title, meta description, and other SEO-friendly tags are added.

TypeScript:

The code uses TypeScript to define types for doctor data, API responses, and props, making it more reliable and easier to maintain.

Design:

The UI is responsive (mobile and desktop friendly).

It uses a CSS framework like TailwindCSS (or plain CSS Modules) to style the page cleanly.
