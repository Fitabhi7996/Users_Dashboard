# User Management System

## Overview
This is a simple web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on user details using a mock backend API provided by JSONPlaceholder.

## Features
- View a list of users with details such as ID, Name, Username, Email, and Company.
- Add new users.
- Edit existing users.
- Delete users.
- Error handling for API requests.

## Backend API
This application interacts with the JSONPlaceholder API, specifically using the `/users` endpoint to fetch and manipulate user data.

## Technologies Used
- React.js
- Axios for HTTP requests
- JSONPlaceholder for mock backend API

## Getting Started
To start the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/user-management-system.git
```
1. Navigate to the project directory:
```bash
cd users
```
 
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Usage

Upon launching the application, you will see a list of users with their details.

- Use the "Add" button to add a new user. Fill in the required details and click "Add User".
- To edit a user, click the "Edit" button next to the user you want to modify. Update the details and click "Update User".

## Error Handling
If there is an error while fetching or manipulating user data from the backend API, an error message will be displayed to the user. The application will inform the user about the error and prompt them to try again later. This ensures a smooth user experience even in cases of unexpected errors or network issues.
