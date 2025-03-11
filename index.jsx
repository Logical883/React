// Creating a component 

// function Welcome() {
//   return "Hello World"; // Return a string
// }

// const welcome = () => {
//     return "Hello World"; // Return a string
// }

// const Welcome = () => {
//     return <h1>Hello Logical</h1>; // Return a JSX
// }


// Rendering Components

import React from "react"; // Import the React library
import { render } from "react-dom"; // Import the render method from react-dom
import { createRoot } from "react-dom/client"; // Import the createRoot method from react-dom/client

const MyComponent = () => { 
 return <h1>Hello, React</h1>; // Return a JSX
};

const rootElement = document.getElementById("root"); // Get the root element
// render(<MyComponent />, rootElement); // Render the component
const root = createRoot(rootElement); // Create a root
root.render(<MyComponent />); // Render the component
