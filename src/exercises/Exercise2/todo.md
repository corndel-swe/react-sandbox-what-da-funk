# ⚙️ Exercise 2: Components and Basic Props

This exercise focuses on how to make components **reusable** by passing data to them using **props** (properties). You will learn how to receive and use props inside a functional component, including the modern approach of using **object destructuring**.

---

## 📚 Concepts: Components and Props

### 1. What are Props?

**Props** (short for properties) are how you pass data from a parent component down to a child component. They allow you to configure and customize a component instance, making it highly reusable.

- Props are passed as **attributes** when rendering the child component in the parent's JSX.
- The child component receives all these attributes bundled together as a single **`props` object** (the first argument of the functional component).
- **For props to work**, you must complete a two-step handshake: **(1)** The component receiving the props must be **defined** to accept them and use the keys (e.g., destructuring `{ buttonText }`). **(2)** The component _using_ the child must **provide** the data by setting those attributes (e.g., `<Button buttonText={"Save"} />`).
- Props are **read-only**; a component must never modify its own props.

**Example:**

If a parent component renders a `<Button>` like this:

```javascript
<Button text="Click Me" color="blue" isDisabled={false} />
```

The child component receives a `props` object that looks like this:

```javascript
// Inside the Button component:
const props = {
  text: "Click Me",
  color: "blue",
  isDisabled: false,
};
```

---

### 2\. Destructuring Props

While you can access prop values using dot notation (`props.text`), the most common and clean approach in modern React is **object destructuring**.

Instead of accepting the entire `props` object, you immediately pull out the specific keys you need directly in the function's argument list:

```javascript
// Traditional way:
const Button = (props) => {
  // Access: props.text, props.color
};

// Modern, Destructured way:
const Button = ({ text, color, isDisabled }) => {
  // Access directly: text, color, isDisabled
};
```

### 3\. Using `className` for Styling

In standard HTML, you use the `class` attribute to assign CSS styles. However, because React/JSX uses JavaScript, the word `class` is a reserved keyword.

Therefore, within JSX, you must use **`className`** instead of `class` to assign CSS classes. In your challenge, you're using a common pattern of building an array of class strings and joining them: `buttonStyles.join(" ")`.

---

## 🛠️ Challenges

This exercise requires you to work on **two files**: `Exercise2.js` (the parent) and `Button.js` (the child component).

Note: All necessary styles have been handled in the project; you just need to use the correct class names to apply them. If you are curious, you can find the styles in the corresponding CSS file within each component's folder.

### **Part 1: Defining Props in the Child Component (`Button.js`)**

Open the `Button.js` file and complete the implementation:

1.  **Destructure All Props:** Update the `Button` component definition to destructure all four props it will receive: `buttonText`, `isSecondary`, `isInverted`, and `inCaps`.

2.  **Handle Secondary State:** The logic for adding the `primary` class if `isSecondary` is not true is already set. Add the class `secondary` to the styles array inside the `else` block to complete the logic for the secondary state.

    ```javascript
    // Update the else block here
    } else {
        // CHALLENGE: Add the 'secondary' class here
    }
    ```

3.  **Handle Inverted State:** Add an `if` statement below the existing block. If the prop `isInverted` is passed as `true`, push the string `inverted` to the `buttonStyles` array.

4.  **Render Dynamic Text:** Replace the static text `"Button Text"` in the `<button>` element with the value of the `buttonText` prop.

5.  **Handle Capitalization:** Before the `return` statement, define a variable for the displayed text. Use an `if/else` block and the `inCaps` prop to conditionally convert the `buttonText` to **uppercase** using `.toUpperCase()`.

### **Part 2: Passing Props in the Parent Component (`Exercise2.js`)**

Open the `Exercise2.js` file. Using the comments above each `<Button />` tag as a guide, pass the necessary `buttonText` (string) and boolean props (`isSecondary`, `isInverted`, `inCaps`) to each component.

- Remember to wrap string values in curly braces _and_ quotation marks (e.g., `{"Text"}`).
- Remember to wrap boolean values in curly braces (e.g., `{true}`).

### **Completion Goal:**

When finished, the application should display five distinct buttons, each styled and labeled according to the props passed from `Exercise2.js`.
