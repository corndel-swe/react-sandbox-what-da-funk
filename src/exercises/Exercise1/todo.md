# ⚛️ Exercise 1: Functional Components, Imports, and JSX

This exercise is designed to refresh your knowledge on the core foundation of modern React development: **Functional Components**, **Importing Assets/Code**, and using **JSX** to dynamically render content.

---

## 📚 Concepts: Imports and JSX

### 1. Functional Components and Imports

In modern React, components are typically written as **JavaScript functions**.

- They accept a single argument, the `props` object, which contains data passed from their parent component. **While not used in this first exercise, it's the standard way to pass data down the component tree.**
- They must return **JSX** (or `null`).

Before the `return` statement, a component is just a standard JavaScript function. This means you can:

- **Import** other functions, variables, or assets (like images) from separate files using the `import` statement.
- Define variables, execute functions, and use standard JavaScript logic (like `if/else` statements, loops, etc.).

#### **Example Import & Export Syntax:**

```javascript
// In a Example file called 'DemoComponent.jsx'

// 1. Import the default export (formatDate)
import format from "./utils";

// 2. Import named exports ({ calculateArea, PI })
import { calculateArea, PI } from "./utils";

// 3. Import an asset (image, treated as a module export)
import logo from "./logo.svg";

const DemoComponent = () => {
  // Use imported function and constant
  const area = calculateArea(10, 5);
  const formattedDate = format(new Date());

  return (
    <div>
      {/* Insert the results into JSX */}
      <img src={logo} alt="Logo" />
      <p>The area is: {area}</p>
      <p>PI is: {PI}</p>
      <p>Today is: {formattedDate}</p>
    </div>
  );
};

// Default export the component for use in other files
export default DemoComponent;
```

### 2\. JSX

JSX is a syntax extension for JavaScript, allowing you to write HTML-like structures directly within your JavaScript code. It is highly recommended because it makes the code easier to read and write.

#### **Inserting JavaScript into JSX**

To execute or insert a JavaScript variable, expression, or function call inside your JSX, you must wrap it in **curly braces** `{}`.

| Context             | Example                      | Description                                                                |
| :------------------ | :--------------------------- | :------------------------------------------------------------------------- |
| **Variable**        | `<h1>Hello, {userName}</h1>` | Inserts the value of the `userName` variable.                              |
| **Expression**      | `<p>Result: {5 + 3}</p>`     | Inserts the result of the expression (8).                                  |
| **Object Access**   | `<p>{user.email}</p>`        | Inserts the value of the `email` property from the `user` object.          |
| **Attribute Value** | `<img src={imageURL} />`     | Uses the JS variable `imageURL` as the value for the `src` HTML attribute. |

#### **Conditional Rendering in JSX**

While you can't use a full `if/else` block _inside_ the `return` statement, you can use JavaScript logic _before_ the return to determine what to render, or use **ternary operators** or **logical AND (`&&`)** inside the return.

```javascript
// Example using ternary operator inside JSX
<div>{isLoggedIn ? <WelcomeMessage /> : <SignInPrompt />}</div>
```

---

## 🛠️ Challenges

Your task is to complete the `Exercise1.jsx` component to dynamically greet the user based on the time of day, currently it is not working as expected.

### Part 1: Defining User Data

In `Exercise1.jsx`, locate the `user` object.

1.  **Add Values:** Update the `user` object to contain your own **first name** and **last name** as string values.

### Part 2: Conditional Logic for Greeting Time

Below the line where `currentHour` is defined, you have an initial `if` block. This block only handles the 'Morning' greeting.

1.  **Add `else if` Block: to handle the **Afternoon** greeting. This block should execute if the `currentHour` is **greater than or equal to 12** AND **less than 18** (i.e., 12:00 PM to 5:59 PM).
    - Set `greetingImg` to the imported `sun` image.
    - Set `greetingTime` to the string `"Afternoon!"`.
2.  **Add `else` Block:** to handle all other times (the **Evening** greeting).
    - Set `greetingImg` to the imported `moon` image.
    - Set `greetingTime` to the string `"Evening!"`.

### Part 3: Dynamic Rendering with JSX

In the component's `return` statement (the JSX structure):

1.  **Image Source:** Ensure the `src` attribute of the `<img>` tag is dynamically set using the JavaScript variable `greetingImg`. (Hint: Use `{}`).
2.  **Alt Text:** Ensure the `alt` attribute of the `<img>` tag is dynamically set using the JavaScript variable `greetingTime`.
3.  **Dynamic Heading:**
    - Ensure the `greetingTime` variable is inserted into the main heading (`<h1>`).
    - Ensure the user's **first name and last name** are inserted into the main heading using **object access** (`user.firstName` and `user.lastName`).

---

**Completion Goal:**

When finished, the application should display a different image and greeting text ("Good Morning\!," "Good Afternoon\!," or "Good Evening\!") depending on the current time on your computer, along with your name.

To test your conditional logic feel free to hard code the time of day.

See below for examples of the complete component.

![](./assets/completed-sunrise.png)
![](./assets/completed-sun.png)
![](./assets/completed-moon.png)
