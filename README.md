# E7GEZ - Restaurant Reservation System for Restaurant Management and Customer Service

This is a GitHub repository for a restaurant reservation project, which includes the frontend, backend, and admin dashboard components. The project aims to provide a comprehensive system for managing restaurant reservations, allowing customers to book tables and restaurant administrators to manage reservations efficiently. The project is developed as a graduation project for Coventry University in the Knowledge Hub Branch in Egypt.

Website can be accessed from these 2 links:

https://e7gez.netlify.app/ 

https://admin-e7gez.netlify.app/

## Features
The restaurant reservation project includes the following features:

### Frontend
* User-friendly interface for customers to view and book available tables.
* Reservation form for customers to provide booking details such as date, time, and number of guests.
* Confirmation page with reservation details after successful booking.
* Notification for customers upon reservation cancellation.
* Interactive user interface with modern design and responsive layout for various devices.

### Backend
* RESTful API for handling reservation requests from the frontend.
* Secure authentication and authorization for customer and admin roles.
* Database integration to store reservation details, customer information, and admin data.
* Reservation management system to handle booking, cancellation, and updating of reservations.
* Integration with third-party services for notifications and alerts.

### Admin Dashboard
* Admin panel to create restaurants, tables and manage users.
* Ability to add, edit, and delete reservations.
* Dashboard with analytics and statistics for monitoring reservation trends.
* User-friendly interface with a clean and modern design.

## Technologies Used

The restaurant reservation project is built using the following technologies:

#### Frontend:

* React.js
* Material-UI for UI components
* Axios for API communication

#### Backend:

* Node.js with Express framework
* Passport.js for authentication and authorization
* MongoDB for database management
* Mongoose as the ORM for MongoDB

#### Admin Dashboard:

* React.js
* Material-UI for UI components
* Axios for API communication

## Installation

To install and run the restaurant reservation project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/yourusername/e7gez-reservationapp.git
```

2. Change to the project directory:

```
cd e7gez-reservationapp
```

3. Install the dependencies for the frontend, backend, and admin dashboard components separately using npm or yarn. For example, for the frontend component:

```
cd client
npm install
```

4. Configure the backend by creating a .env file in the backend directory (api), and set the following environment variables:

```
MONGO = <your_mongodb_connection_string>
JWT = <your_secret_key_for_jwt>
```

5. Start the frontend, backend, and admin dashboard components separately. For example, for the frontend component:

```
cd client
npm start
```

6. Open a web browser and access the application at http://localhost:3000 for the frontend, http://localhost:8800 for the backend API, and http://localhost:3001 for the admin dashboard.

## Contributing

1. If you would like to contribute to the E7GEZ project, please follow these steps:

2. Fork the repository and create a new branch for your feature or bugfix.

3. Make changes to your branch and test thoroughly.

4. Submit a pull request with a detailed description of the changes made, any relevant documentation updates, and test cases.

5. Await feedback and address any review comments.

6. Once approved, your changes will be merged into the main repository.

## Contact
For any inquiries or issues, please contact Abdallah Ibrahim at abdallah.hussein.ibrahim@gmail.com.

Thank you

