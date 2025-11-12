# 📦 Exercise 3: Prop Drilling and Object Props

This exercise focuses on moving data through multiple components (Prop Drilling), handling complex object data as props, and reinforcing conditional rendering by checking for null or missing data.

---

## 📚 Concepts: Prop Objects and Drilling

### 1. Handling Complex Prop Objects

In real-world applications, props are rarely simple strings or numbers. They are often complex JavaScript objects or arrays or a combination of both in a nested structure, such as a user profile, a list of items, or—in this case—data retrieved from an API about an artist.

When a component receives an object, you access its keys using dot notation or destructuring, just like any other JavaScript object.

```javascript
// Receiving an artist object as a prop
const ArtistTile = ({ artist }) => {
  // Destructure the required keys from the prop object
  const { name, bio, imageURL } = artist;

  // Use the values in JSX
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageURL} alt={name} />
    </div>
  );
};
```

### 2\. Prop Drilling

**Prop Drilling** occurs when you have data (a prop) that is needed by a deeply nested component, but the components in between don't actually need that data themselves. You still have to "drill" the prop through every intermediate component.

While often undesirable (and sometimes solved later using the Context API), it is a necessary and common pattern in many React applications.

**Example of Prop Drilling:**

- `Home` component has `artist`.
- `Home` passes `artist` to `Exercise3`.
- `Exercise3` needs to pass `artist` down to `ArtistTile`.

In this scenario, `Exercise3` receives `artist` just to forward it to `ArtistTile`.

### 3\. Conditional Rendering (Handling Null Props)

It is common to fetch data asynchronously (like from an API). Until the data arrives, the prop will often be `null` or `undefined`. It is crucial to check for the existence of required props before trying to render components that rely on them.

If a component tries to access a property on a `null` or `undefined` object (e.g., `artist.name`), the application will crash.

```javascript
const Exercise3 = ({ artist }) => {
  // If 'artist' is null, return a loading spinner or message early.
  if (!artist) {
    return <LoadingSpinner />;
  }

  // Only proceed to render the main content if 'artist' exists.
  return <ArtistTile artist={artist} />;
};
```

---

## 🛠️ Challenges

This exercise requires you to work on three components: the parent component that holds the data (e.g., `Home.js`), the intermediate component (`Exercise3.js`), and the child component (`ArtistTile.js`).

### **Part 1: The Prop Handshake (Prop Drilling)**

The goal is to get the `artist` data object from the main data source (the root component, assumed to be `Home.js`) down to `Exercise3.js`.

1.  **Locate Data Source:** Open the parent component of `Exercise3` (e.g., `Home.js`). Find where the `artist` data is defined (e.g., as a state variable, more on this later).

2.  **Pass the Prop:** Ensure this component is passing the `artist` variable to the `<Exercise3 />` component as a prop.

    - _The required change is similar to:_ `<Exercise3 artist={artist} />`

### **Part 2: Accessing and Passing Nested Data (`Exercise3.js`)**

Open the `Exercise3.js` file.

1.  **Conditional Check (Review):** Note the conditional check at the top: `if (!artist) { return <Loading />; }`. This prevents crashes by showing the `<Loading />` component while the prop is `null`.

2.  **Pass Required Props:** The `ArtistTile` component requires three specific props: `imgSrc`, `title`, and `text`. You must extract these from the received `artist` object and pass them down.

    - Set the `title` prop using the key **`strArtist`**.
    - Set the `text` prop using the key **`strBiographyEN`**.

    <!-- end list -->

    ```javascript
    // Update the Exercise3.js component's return statement:
    <ArtistTile
      imgSrc={artist.strArtistThumb}
      title={/* CHALLENGE: Use the artist's name key */}
      text={/* CHALLENGE: Use the artist's biography key */}
    />
    ```

### **Part 3: Destructuring and Displaying Object Keys (`ArtistTile.js`)**

Open the `ArtistTile.js` file.

2.  **Use `title`:** Update the **`ArtistTile.js`** file to replace the static text "TITLE PLACEHOLDERS" with the prop **`title`**. This should be done in both the `buttonJSX` and `textJSX` sections and the `alt` attribute on the `<img/>`.

### **Completion Goal:**

When finished, the initial loading spinner should disappear, and the application should display the `<ArtistTile />` with the correct image, title (the artist's name), and the biography text, demonstrating successful prop drilling and data access.
