# Coffee Ordering Web Application Project

## Description

The Coffee Shop Project is a web application that provides a dynamic and interactive way for users to browse, customize, and purchase coffee. It includes predefined coffee types, integration with third-party sources for coffee data, and extensive customization options for users to create their own unique coffee blends.

## Features

1. **Predefined Coffee Types**

   - Users can choose from a list of at least 5 predefined coffee types including Latte, Macchiato, Espresso, Americano and Capuccino.
   - Each coffee type comes with its own set of characteristics, such as a single dose of milk or one pack of sugar.

2. **Integration with Third-Party Sources**

   - The application allows users to select different types of coffee sourced from third-party databases or APIs, offering a diverse range of coffee options.

3. **Customizable Coffee Options**
   - Users can customize existing coffee types or start from scratch with predefined options to create their own unique coffee blends.
   - Customizations include adding sugar, cream, caramel, extra milk, and more.

## Installation

Backend:

1. Clone the repo: git clone https://github.com/ZacheeNiyokwizera/Coffee-Ordering-Web-Appgit

2. cd into the backend folder: cd backend

3. Install the Node libraries required for development into your environment:

npm install

4. Create a copy of the .env file and name it .env, and fill it with the necessary credentials.

5. Run the application: You should already be familiar with running a Node application using your favourite IDE or directly from a terminal/command prompt using `npm run dev`

6. Open your browser and navigate to `http://localhost:5000/api/coffee`.

Frontend:

1. After cloning the repo in step 1 above in the backend section, cd into the root Folder folder and cd frontend

2. Install the dependencies: `npm install`

3. Run the application: ``npm start`

4. Open your browser and navigate to http://localhost:3000. The Application should be running on localhost port 3000 i.e http://localhost:3000/

Testing : To run tests, use the following command:

1. Backend : After cloning the repository, cd backend, install the required dependencies and run
   `npm test` or ``npx jest backend/getCoffeeController.test.ts`

1. Frontend: After cloning the repository, install the required dependencies and run
   `npm test` or ``npx jest test`

|-- .gitignore # Specifies files and directories to be ignored by Git.
|-- README.md # Contains the project documentation, including how to run, test, and use the application.
|-- backend/ # Contains the server-side code for the application.
| |-- .env # Environment variables configuration file.
| |-- getCoffeeController.test.ts # Unit tests for the getCoffeeController.
| |-- index.ts # Entry point for the backend server.
| |-- jest.config.ts # Configuration for Jest testing framework.
| |-- jest.setup.ts # Setup file for Jest, typically used for global configuration.
| |-- nodemon.json # Configuration file for Nodemon, which helps in automatic server restart on file changes.
| |-- package-lock.json # Auto-generated file that locks down the versions of the dependencies.
| |-- package.json # Lists dependencies and scripts for the backend.
| |-- tsconfig.json # TypeScript configuration file for the backend.
| |-- config/ # Contains configuration files for the backend.
| | |-- database.ts # Handles the database connection configuration and setup.
| |-- controllers/ # Contains the logic for handling requests.
| | |-- coffeeController.ts # Handles the business logic for coffee-related operations.
| | |-- getCoffeeController.ts # Handles fetching coffee data.
| |-- models/ # Defines the data models for the application.
| | |-- Coffee.ts # TypeScript model representing the structure of a Coffee object.
| |-- routes/ # Contains the route definitions for the API endpoints.
| |-- coffeeRoutes.ts # Defines the routes for coffee-related API endpoints.
|
|-- frontend/ # Contains the client-side code for the application.
|-- .gitignore # Specifies files and directories to be ignored by Git.
|-- package-lock.json # Auto-generated file that locks down the versions of the dependencies.
|-- package.json # Lists dependencies and scripts for the frontend.
|-- README.md # Documentation specifically for the frontend part of the project.
|-- tsconfig.json # TypeScript configuration file for the frontend.
|-- public/ # Contains static files that are served directly.
| |-- favicon.ico # Icon displayed in the browser tab.
| |-- index.html # Main HTML file, the entry point for the React app.
| |-- logo192.png # Default React logo image used in the app.
| |-- logo512.png # Default React logo image used in the app.
| |-- manifest.json # Metadata for the web app, used for PWA configurations.
| |-- robots.txt # Instructions for web crawlers about the site.
|-- src/ # Contains the source code for the frontend React application.
|-- App.css # Global styles for the App component.
|-- App.tsx # Main component that sets up the structure of the application.
|-- babel.config.js # Babel configuration for transpiling JavaScript/TypeScript.
|-- declaration.d.ts # TypeScript declaration file for custom module imports.
|-- index.tsx # Entry point for the React app.
|-- jest.config.ts # Jest configuration for frontend tests.
|-- react-app-env.d.ts # Auto-generated TypeScript declaration file for React.
|-- setupTests.ts # Configuration for setting up testing environments.
|-- components/ # Contains reusable UI components.
| |-- EmptyCart.tsx # Component to show when the cart is empty.
| |-- EmptyOrderHistory.tsx # Component to show when there are no previous orders.
| |-- ErrorBoundary.tsx # Component to catch and display errors in the UI.
| |-- Footer.tsx # Footer component of the application.
| |-- Navbar.tsx # Navigation bar component.
| |-- cartPage/ # Components related to the cart page.
| | |-- CartPage.test.tsx # Unit tests for the CartPage component.
| | |-- CartPage.tsx # CartPage component displaying items in the cart.
| |-- coffeeItem/ # Components related to individual coffee items.
| | |-- CoffeeItem.test.tsx # Unit tests for the CoffeeItem component.
| | |-- CoffeeItem.tsx # Component to display details of a single coffee item.
| |-- coffeeList/ # Components related to the list of coffee items.
| | |-- CoffeeList.test.tsx # Unit tests for the CoffeeList component.
| | |-- CoffeeList.tsx # Component to display a list of coffee items.
| |-- error/ # Components related to error handling.
| | |-- Error.test.tsx # Unit tests for the Error component.
| | |-- Error.tsx # Component to display error messages.
| |-- loading/ # Components related to loading states.
| | |-- Loading.test.tsx # Unit tests for the Loading component.
| | |-- Loading.tsx # Component to display a loading spinner.
| |-- notFound/ # Components related to the 404 Not Found page.
| |-- NotFound.test.tsx # Unit tests for the NotFound component.
| |-- NotFound.tsx # Component to display a 404 Not Found message.
|-- context/ # Contains React context providers.
| |-- CartContext.tsx # Context provider for managing cart state.
|-- hooks/ # Custom React hooks.
| |-- useCoffeeData.test.ts # Unit tests for the useCoffeeData hook.
| |-- useCoffeeData.ts # Custom hook to fetch and manage coffee data.
| |-- useOrderHistory.ts # Custom hook to manage order history.
| |-- useUserId.ts # Custom hook to manage user ID.
|-- models/ # TypeScript interfaces and types.
| |-- CartItem.ts # TypeScript model representing a cart item.
| |-- Coffee.ts # TypeScript model representing a coffee item.
| |-- Order.ts # TypeScript model representing an order.
|-- pages/ # Components for individual pages of the application.
| |-- Checkout.test.tsx # Unit tests for the Checkout page.
| |-- Checkout.tsx # Checkout page component.
| |-- OrderHistory.tsx # Order history page component.
| |-- ThankYou.tsx # Thank you page component after order completion.
|-- services/ # Contains services for making API calls.
| |-- coffeeService.ts # Service for fetching coffee data from the API.
|-- styles/ # Contains CSS files for styling components.
| |-- CartPage.css # Styles for the CartPage component.
| |-- CoffeeItem.css # Styles for the CoffeeItem component.
| |-- OrderHistory.css # Styles for the OrderHistory component.
|-- utils/ # Utility functions and helpers.
| |-- calculateTotalPrice.test.ts # Unit tests for the calculateTotalPrice function.
| |-- calculateTotalPrice.ts # Utility function to calculate the total price.
| |-- orderUtils.ts # Utility functions for managing orders.
|-- **mocks**/ # Mock files for testing purposes.
|-- mockData.ts # Mock data for testing.
|-- react-router-dom.ts # Mock for react-router-dom.
|-- styleMock.ts # Mock for CSS modules during tests.
