# Dynamic Form Maker

## Live Website: assignment-dynamic-form.vercel.app

#### Example form JSON Schema 1: https://drive.google.com/file/d/1RUU_ueF9BbQRLReuX88w8PWe2jsz3Z3C/view

#### Example form JSON Schema 2: https://drive.google.com/file/d/19_E6dSDUbiDR31wNSSvUARHxh1HeT6L4/view

## Project Description:

    The goal of this project is to create a React application that allows users to paste a UI schema on the left side and preview the rendered form on the right-hand side. The UI schema is a JSON array that contains all the information required to generate dynamic forms. The application will have a single screen divided into two equal sections. The left section will contain a JSON editor where users can paste the UI schema, and the right section will automatically render a form based on the pasted UI schema.

    The UI schema will contain objects with various fields that define the form's structure and functionalities. Each object in the UI schema will have properties such as "sort" for determining the sequence of form sections, "label" for displaying the section label, "description" for holding the description of the section or field, "validate" for defining field validations like "required" and "immutable", "jsonKey" for holding a unique key for each field/section, "uiType" for specifying the type of form element (e.g., input, number, group, select, switch), "level" for determining the nesting of fields, and "placeholder" for adding placeholder/hint text in the form fields.

    The UI schema can contain different types of form elements, such as text input fields, group fields, and radio fields. Text input fields can be used to capture user input for fields such as pizza name, and group fields can contain multiple fields nested within them, such as pizza type and toppings. Radio fields can be used to present options to the user, such as different types of pizza.

    The application will also have advanced fields that can be toggled on and off. These fields will be hidden by default and will only be displayed when the user clicks on the "Show advanced fields" toggle button. The visibility of these advanced fields will be controlled by the "validate" property in the UI schema.


## Tech Stack

**Frontend:** React, JavaScript, tailwind css

## Project Description
    The React application will have two main components: the JSON editor component and the form preview component. The JSON editor component will allow users to paste the UI-Schema in JSON format on the left-hand side. The form preview component will automatically render the form based on the pasted UI-Schema and display it on the right-hand side.

## Features - (JSON Editor)

    - Ability to detect changes in the pasted JSON and update the form preview component in real-time.
    - Validation of the UI-Schema to ensure that it follows the required structure and properties.
## Features - (Form Preview)

    - Automatically render the form based on the pasted UI-Schema.
    - Dynamically update the form based on changes in the UI-Schema in the JSON editor component.
    - Handle different field types such as text input, radio, switch, group, etc., and render them accordingly with their respective properties.
    - Handle nested fields inside groups and show/hide them based on the user's interaction with the form.
    - Show tooltips for fields with descriptions when hovered.
    - Handle form submissions and show the form data to the user which is going to send to the backend using the jsonKey values as keys and the entered values as values.

## Getting Started
    These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Installation

    1. Clone the repository
```bash
  git clone https://github.com/rahulkumar345/assignment-dynamic_form.git

```

    2. Install dependencies 
```bash
  cd my-app
  npm install
```


    3. Start the development server
```bash
  npm start
```

    This will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
