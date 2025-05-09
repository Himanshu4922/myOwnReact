
#  Mini React (Custom JavaScript UI Library)

This project is a lightweight, simplified version of React built from scratch using plain JavaScript to understand the core ideas behind JSX, the virtual DOM, and the render process.



## Features

- `React.createElement`: Creates a virtual DOM like JavaScript object.
- `render()`: Converts that object tree into real DOM nodes and appends them to the document.
- Supports:
  - DOM elements
  - Functional components
  - Nested children
  - Arrays of children
  - Text and numeric nodes
  - Inline style support (style={{ color: "green" }})


## How it works
### 1. `React.createElement(type, props, ...children)`

This function simulates what JSX compiles down to.

```js
const reactObject = React.createElement("div", { id: "hello" }, 
  "Hello, ",
  React.createElement("span", null, "world!")
);
```
Returns a virtual DOM like object:
```
{
  type: "div",
  props: {
    id: "hello",
    children: [
      "Hello, ",
      {
        type: "span",
        props: {
          children: ["world!"]
        }
      }
    ]
  }
}
```
### 2. `render(reactObject, rootElement)`
This function:

Recursively converts the virtual DOM object into real DOM nodes.

- Supports:
  - Text nodes
  - Arrays of children
  - Functional components
  - Skipping null or undefined children

```render(reactObject, document.getElementById("root"));```  
## Goal of this project

  - Understand how JSX works under the hood
  - Explore how React renders components to the DOM
  - Learn about recursion and component trees
## Author

- [@HimanshuBisht](https://github.com/Himanshu4922)

