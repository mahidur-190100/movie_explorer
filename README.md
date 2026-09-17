🎬 Movie Explorer

Movie Explorer is a simple and responsive React application where users can browse TV shows, search for specific titles, and view detailed information in a modal.

🚀 Features

Home page with navbar, hero section, and footer

Movie listing page

Search shows by title

Fetches data from TVMaze API

Responsive movie card layout

Movie details modal

Displays poster, title, rating, release date, genre, and summary

Mobile-friendly responsive design

🛠️ Technologies Used

React

JavaScript

React Router DOM

CSS

Vite

TVMaze API

🌐 API Used

This project uses the free TVMaze API.

All Shows:

https://api.tvmaze.com/shows

Search Shows:

https://api.tvmaze.com/search/shows?q=QUERY

Example:

https://api.tvmaze.com/search/shows?q=batman

No API key is required.



🔍 Search Functionality

Users can type a show name in the search bar and click the Search button.

The application sends a request to:

https://api.tvmaze.com/search/shows?q=SEARCH_TEXT

The returned results are displayed as movie/show cards.

🎞️ Movie Details

Clicking the See Details button opens a modal containing:

Movie/show poster

Title

Rating

Release date

Genre

Overview / summary

The modal can be closed using the close button.

📱 Responsive Design

The movie grid changes depending on screen size:

Desktop: 4 columns

Tablet: 2–3 columns

Mobile: 1 column

📌 Assignment Objective

The objective of this project is to build a responsive Movie Explorer application using React where users can browse shows, search by title, and view detailed information in a modal.