# Coffee Ordering Web Application Project

## Description

The Coffee Shop Project is a web application that provides a dynamic and interactive way for users to browse, customize, and purchase coffee. It includes predefined coffee types, integration with third-party sources for coffee data, and extensive customization options for users to create their own unique coffee blends.

## Features
Here’s how you can integrate the feature about viewing order history into the project description:

---

## Project Description

This project is a coffee ordering application that allows users to explore a variety of coffee options, customize their drinks, and place orders. Here are the key features:

- **Coffee Selection**: Users can choose from a predefined list of coffee types (e.g., Latte, Macchiato, Espresso, Americano) and view detailed information about each coffee, including its price, description, and customization options.
  
- **Customization**: The application enables users to customize their coffee orders by adding or modifying ingredients such as milk, sugar, and other extras. This allows users to create a unique coffee experience tailored to their preferences.

- **Order Placement**: Users can add their customized coffee selections to the cart, proceed to checkout, and place their order. 

- **Order History**: After placing an order, users can view their order history. This feature provides a list of past orders, including details such as order ID, items purchased, total cost, and shipping details. This helps users keep track of their previous purchases and re-order their favorite items easily.

---

Feel free to integrate this updated description into your README file or project documentation.

## Installation

Backend:

1. Clone the repo: git clone https://github.com/ZacheeNiyokwizera/Coffee-Ordering-Web-Appgit

2. cd into the backend folder: cd backend

3. Install the Node libraries required for development into your environment and run :

```npm install```

4. Create a copy of the .env file and name it .env, and fill it with the necessary credentials.

5. Run the application: You should already be familiar with running a Node application using your favourite IDE or directly from a terminal/command prompt using ```npm run dev```

6. Open your browser and navigate to ```http://localhost:5000/api/coffee```.

Frontend:

1. After cloning the repo in step 1 above in the backend section, cd into the root Folder folder and cd frontend

2. Install the dependencies: ```npm install```

3. Run the application: ```npm start```

4. Open your browser and navigate to http://localhost:3000. The Application should be running on localhost port 3000 i.e ```http://localhost:3000/```

Testing : To run tests, use the following command:

1. **Backend** : After cloning the repository, cd backend, install the required dependencies and run
   ```npm test``` or ```npx jest backend/getCoffeeController.test.ts```

1. **Frontend**: After cloning the repository, install the required dependencies and run
   ```npm test``` or ```npx jest test```

##Testing the main application logic :

I've made sure the core functionality of the application is well-tested. Specifically, I’ve added unit tests for the getCoffee API to ensure it accurately retrieves coffee data. Additionally, I've tested the UI functionalities, including fetching coffees, displaying them, customizing options, and adding items to the cart.

## For a real-life implementation of my coffee-ordering application on AWS :

I’d use several AWS services to ensure everything runs smoothly and scales effectively. First off, **Amazon EC2** would be great for hosting the backend, giving us a reliable environment to handle user requests. I’d also consider **AWS Lambda** for some serverless magic—like processing orders or generating user IDs—so we don’t have to worry about managing servers.

To store coffee images and static files, **Amazon S3** would be perfect, and we could use **Amazon CloudFront** to speed up delivery to users everywhere. For our database, **Amazon RDS** would manage user data and orders with ease, and **AWS DynamoDB** could handle things like session info or user preferences with high performance and low latency.

To keep things secure, **AWS IAM** would control access to all our resources, making sure only the right people and components have the right permissions. For keeping everything running smoothly, **AWS CodePipeline** and **AWS CodeBuild** would automate testing and deployment, so we can push updates quickly. Plus, **Amazon CloudWatch** would help us monitor performance and spot any issues fast.

This setup would make the app scalable, easy to maintain, and ready to grow, all while keeping testing and deployment as smooth as possible.



##Project Structure

The project is organized into two main parts: frontend and backend. Below is a detailed description of the structure and purpose of each folder and key files.

##Frontend
The frontend directory contains all the code and assets related to the client-side application, built with React.


frontend/
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
│
├── public/
│   ├── favicon.ico                  # Favicon for the application
│   ├── index.html                   # Main HTML file for the React app
│   ├── logo192.png                  # Logo for the application (192x192)
│   ├── logo512.png                  # Logo for the application (512x512)
│   ├── manifest.json                # Configuration for PWA (Progressive Web App)
│   └── robots.txt                   # Instructions for web crawlers
│
├── src/
│   ├── App.css                      # Global styles for the application
│   ├── App.tsx                      # Root component of the React application
│   ├── babel.config.js              # Babel configuration file
│   ├── declaration.d.ts             # TypeScript declaration file for custom types
│   ├── index.tsx                    # Entry point of the React application
│   ├── jest.config.ts               # Jest configuration file for testing
│   ├── react-app-env.d.ts           # TypeScript environment declarations for React
│   ├── setupTests.ts                # Setup file for configuring Jest tests
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── EmptyCart.tsx            # Component displayed when the cart is empty
│   │   ├── EmptyOrderHistory.tsx    # Component displayed when the order history is empty
│   │   ├── ErrorBoundary.tsx        # Component to handle JavaScript errors in components
│   │   ├── Footer.tsx               # Footer component for the application
│   │   ├── Navbar.tsx               # Navigation bar component
│   │   ├── cartPage/                # Components related to the cart page
│   │   │   ├── CartPage.test.tsx    # Tests for the CartPage component
│   │   │   └── CartPage.tsx         # Cart page component
│   │   ├── coffeeItem/              # Components related to individual coffee items
│   │   │   ├── CoffeeItem.test.tsx  # Tests for the CoffeeItem component
│   │   │   └── CoffeeItem.tsx       # Coffee item component
│   │   ├── coffeeList/              # Components related to displaying a list of coffees
│   │   │   ├── CoffeeList.test.tsx  # Tests for the CoffeeList component
│   │   │   └── CoffeeList.tsx       # Coffee list component
│   │   ├── error/                   # Error handling components
│   │   │   ├── Error.test.tsx       # Tests for the Error component
│   │   │   └── Error.tsx            # Error component
│   │   ├── loading/                 # Loading state components
│   │   │   ├── Loading.test.tsx     # Tests for the Loading component
│   │   │   └── Loading.tsx          # Loading component
│   │   └── notFound/                # Components for handling 404 errors
│   │       ├── NotFound.test.tsx    # Tests for the NotFound component
│   │       └── NotFound.tsx         # NotFound component
│   │
│   ├── context/                     # React context for global state management
│   │   └── CartContext.tsx          # Context provider and hooks for managing the cart
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useCoffeeData.test.ts    # Tests for the useCoffeeData hook
│   │   ├── useCoffeeData.ts         # Hook for fetching coffee data
│   │   ├── useOrderHistory.ts       # Hook for managing order history
│   │   └── useUserId.ts             # Hook for generating and managing user ID
│   │
│   ├── models/                      # TypeScript interfaces for data models
│   │   ├── CartItem.ts              # Model for cart items
│   │   ├── Coffee.ts                # Model for coffee items
│   │   └── Order.ts                 # Model for orders
│   │
│   ├── pages/                      # Page components for different views
│   │   ├── Checkout.test.tsx        # Tests for the Checkout page
│   │   ├── Checkout.tsx             # Checkout page component
│   │   ├── OrderHistory.tsx         # Order history page component
│   │   └── ThankYou.tsx             # Thank you page component
│   │
│   ├── services/                   # API service functions
│   │   └── coffeeService.ts         # Service for fetching coffee data
│   │
│   ├── styles/                     # CSS files for styling components
│   │   ├── CartPage.css            # Styles for the CartPage component
│   │   ├── CoffeeItem.css          # Styles for the CoffeeItem component
│   │   └── OrderHistory.css        # Styles for the OrderHistory component
│   │
│   └── utils/                      # Utility functions
│       ├── calculateTotalPrice.test.ts # Tests for total price calculation utility
│       ├── calculateTotalPrice.ts     # Utility function for calculating total price
│       └── orderUtils.ts            # Utility functions for handling orders
│
└── __mocks__/                     # Mocks for testing
    ├── mockData.ts                # Mock data for testing
    ├── react-router-dom.ts        # Mock for react-router-dom
    └── styleMock.ts               # Mock for CSS modules



##Backend Project Structure
The backend directory contains the server-side code for the application, including API endpoints, data models, and configuration files. It is organized to separate concerns and make the codebase manageable.

Directory Structure

backend/
│
├── .env                            # Environment variables for configuration (e.g., database URL, API keys)
├── getCoffeeController.test.ts      # Unit tests for the coffee retrieval controller
├── index.ts                        # Entry point for the backend application
├── jest.config.ts                   # Jest configuration file for running tests
├── jest.setup.ts                   # Setup file for Jest tests (e.g., global configurations)
├── nodemon.json                    # Configuration file for Nodemon to auto-reload the server during development
├── package-lock.json                # Lock file for npm dependencies
├── package.json                     # Project metadata and dependencies
├── tsconfig.json                    # TypeScript configuration file
│
├── config/                         # Configuration files
│   └── database.ts                 # Database configuration and connection setup
│
├── controllers/                    # Logic for handling incoming requests
│   ├── coffeeController.ts         # Controller for handling coffee-related requests
│   └── getCoffeeController.ts      # Controller specifically for retrieving coffee data
│
├── models/                         # TypeScript models representing data structures
│   └── Coffee.ts                   # Model for coffee data
│
└── routes/                         # Route definitions for API endpoints
    └── coffeeRoutes.ts             # Routes for coffee-related API endpoints


##Suggested Features

1. User Authentication and Authorization

Description: Implement user accounts with login and registration functionality.
Benefits: Provides personalized user experiences and secure access to order history.

2. Order Tracking

Description: Add real-time order tracking to monitor the status from processing to delivery.
Benefits: Enhances transparency and improves user satisfaction by keeping customers informed.

3. Dynamic Coffee Recommendations

Description: Implement a recommendation system based on user preferences and order history.
Benefits: Personalizes the user experience and encourages additional purchases.

4. Integration with Payment Gateways

Description: Integrate with payment solutions like Stripe or PayPal for secure online transactions.
Benefits: Simplifies the checkout process and enhances payment security.

5. Admin Dashboard

Description: Create an admin interface for managing inventory, orders, and user accounts.
Benefits: Streamlines administrative tasks and provides valuable insights into application performance.



