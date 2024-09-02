# Flight Status Board✈️

## Overview

The **Flight Status Board** is a web application that displays real-time flight status information. It allows users to view details about specific flights, including the airline, origin, destination, departure time, and status.

## Features

- Display a list of flights with real-time status updates.
- View detailed information for a selected flight.
- Navigate back to the main list of flights.
- Error handling for failed data fetching.
- Loading spinner to indicate data is being fetched.

## Tech Stack

- **Frontend:** React 16, JavaScript, CSS
- **Routing:** React Router
- **State Management:** React Hooks
- **Testing:** Jest, React Testing Library
- **Utilities:** date-fns for date formatting

## Prerequisites

Ensure you have the following installed on your local development environment:

- **Node.js** (Version 16)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:phaneendraandukuri/flight-status-board.git
   cd flight-status-board
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

Additionally, This application is also hosted on web using netlify. You can visit this [Flight Status Board](https://flight-status-board.netlify.app)

## Running Tests

1. To run the tests:

   ```bash
   npm test
   ```

2. For testing custom hooks, ensure you are using React 16 and have installed the following dependencies:

   ```bash
   npm install @testing-library/react-hooks --save-dev
   ```
