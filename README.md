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

1. Backend : After cloning the repository, cd backend, install the required dependencies and run
   ```npm test``` or ```npx jest backend/getCoffeeController.test.ts```

1. Frontend: After cloning the repository, install the required dependencies and run
   ```npm test``` or ```npx jest test```


