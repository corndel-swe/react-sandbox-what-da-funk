# 🔄 Exercise 5: State, Event Handlers, and `useState`

This exercise introduces the crucial concept of **state** a component's memory and how to modify it using the **`useState` Hook**. You will connect these state-changing actions to **event handlers** to build a fully interactive, cyclical image carousel component.

---

## 📚 Concepts: State and Component Updating

### 1\. State: A Component's Memory

**State** is a private, internal data store that a component can read from and write to. It adds persistence to variables in between component refreshes.

- **Triggering Updates:** Unlike **props** (which are immutable), state is designed to be changed, and changing it is the primary way to trigger component updates and interactivity.
- **Component Lifecycle:** When a component's state is updated, React re-renders the component function, calculates the new JSX, and efficiently updates the DOM.

### 2\. The `useState` Hook

The `useState` Hook is how functional components gain the ability to manage state.

It is a function you import from React; you call it and can pass in the initial/default state. It then returns an array containing exactly two items, which are commonly destructured:

1.  The **current state value** (e.g., a number, object, or array).
2.  A **setter function** used to update that value.

<!-- end list -->

```javascript
// importing
import { useState } from "react";

const MyButton = () => {
  // syntax: destructuring the two elements returned by useState
  const [count, setCount] = useState(0);

  return <button>Click {count}</button>;
};
```

When you call the setter function and pass in a new value, React updates the state and triggers a **re-render** of the component. The state variable will be set to the value passed to the setter function.

### 3\. Event Handlers

To make a component interactive, you attach callback functions to built-in HTML events using JSX attributes (e.g., `onClick`, `onSubmit`, `onChange`).

- Event handler attributes in React are written in **camelCase** (e.g., `onClick`).
- The handler function is where you call the state setter function to update the UI.

<!-- end list -->

```javascript
const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // State change triggers re-render
  };

  return <button onClick={handleClick}>Click</button>;
};
```

#### Common React Event Handlers

| Event Category | Handler Attribute | Description                                                                                |
| :------------- | :---------------- | :----------------------------------------------------------------------------------------- |
| **Mouse**      | `onClick`         | Fired when an element is clicked.                                                          |
| **Mouse**      | `onMouseEnter`    | Fired when the mouse pointer moves over an element.                                        |
| **Form**       | `onChange`        | Fired immediately when the value of a form element is changed (key press, selection).      |
| **Form**       | `onSubmit`        | Fired when a form is submitted. **Requires `event.preventDefault()` to stop page reload.** |
| **Keyboard**   | `onKeyDown`       | Fired when a key is pressed down.                                                          |
| **Focus**      | `onBlur`          | Fired when an element loses focus.                                                         |

---

## 🛠️ Challenges

This exercise requires you to update the parent component (`Home.jsx`), the intermediate component (`Exercise5.jsx`), and the main logic within the child component (`Carousel.jsx`).

### Part 1: Prop Drilling and Component Use

1.  Open the `Home.jsx` file.
    1.  Locate the `<Exercise5 />` component in `Home.jsx`. Ensure you are passing the **`galleryImages`** array as a prop named **`imagesArr`**.
        _The required change is:_ `<Exercise5 imagesArr={galleryImages} />`
2.  Open the `Exercise5.jsx` file.
    1.  Locate the placeholder `<p>Carousel here please</p>` inside the conditional logic. **Import** the `<Carousel />` component and replace the placeholder by using the `<Carousel />` component, ensuring you pass the received **`imagesArr`** prop directly into it.

### Part 2: State and Handlers Setup (`Carousel.jsx`)

1.  Open the `Carousel.jsx` file.
    1.  Import the `useState` Hook from React.
    2.  Inside the `Carousel` component, use `useState` to create a state variable named **`counter`** initialized to `0`. This `counter` will track the index of the currently displayed image.
    3.  Create two arrow functions within the functional component, **`handleIncrement`** and **`handleDecrement`**, to house the logic for changing the `counter`.

### Part 3: Implementing Cyclical Logic (`Carousel.jsx`)

You need to implement the logic inside your handler functions to ensure the carousel is **cyclical** (wraps around when reaching the start or end).

1.  **Implement `handleIncrement`:**
    - If the current `counter` is equal to the **last valid index** (`imagesArr.length - 1`), reset the `counter` back to `0`.
    - Otherwise, increment the `counter` by `1`.
2.  **Implement `handleDecrement`:**
    - If the current `counter` is equal to the **first index** (`0`), set the `counter` to the **last index** (`imagesArr.length - 1`).
    - Otherwise, decrement the `counter` by `1`.

### Part 4: Dynamic Rendering and Events

1.  **Set Image Source:** Update the middle `<img>` tag's `src` attribute to dynamically display the image at the **current `counter` index** from the `imagesArr` prop.
    - _Current state:_ `src={imagesArr[0]}`
2.  **Attach Handlers:** Attach the `handleDecrement` function to the **`onClick`** attribute of the left arrow image. Attach the `handleIncrement` function to the **`onClick`** attribute of the right arrow image.

### Completion Goal:

When finished, the gallery section will display a functional carousel component that cycles through the artist's fan art images cyclically (wraps around) when the left and right arrows are clicked.

![](./assets/completed-carousel.gif)

---

## 📝 Additional/Optional Resources

- [React Docs: State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React Docs: Adding Interactivity](https://react.dev/learn/responding-to-events)
- [MDN Web Docs: Remainder Operator (`%`)](<https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder%5D(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)>)

---
