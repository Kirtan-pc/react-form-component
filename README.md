# ⚛️ Lab Experiment 5 — React Form Component
### Subject: Web Engineering & Browser Languages (WEBL)
### Aim: Create a React Form Component that accepts user input, processes data, and displays results dynamically.

---

## 📁 Project Structure

```
my-react-app/
│
├── public/
│   └── index.html          → Root HTML file (do not edit)
│
├── src/
│   ├── App.js              → Main component (imports FormComponent)
│   ├── App.css             → Styling for App
│   ├── FormComponent.js    → Your custom form component
│   └── index.js            → Entry point (renders App into DOM)
│
├── package.json            → Project config and dependencies
└── README.md               → This file
```

---

## ▶️ How to Start / Run a React Project

### ✅ Step 1 — Install Node.js
Download and install Node.js from: **https://nodejs.org**
This also installs `npm` (Node Package Manager) automatically.

Verify installation by opening a terminal and typing:
```bash
node -v
npm -v
```
Both should print version numbers (e.g., `v20.0.0`, `10.0.0`).

---

### ✅ Step 2 — Create a New React App
In your terminal, navigate to the folder where you want to create the project and run:
```bash
npx create-react-app my-react-app
```
- `npx` — runs a package without installing it globally
- `create-react-app` — the official React project scaffolding tool
- `my-react-app` — your project folder name (change as needed)

This takes 1–3 minutes to download all dependencies.

---

### ✅ Step 3 — Navigate to the Project Folder
```bash
cd my-react-app
```

---

### ✅ Step 4 — Start the Development Server
```bash
npm start
```
- This starts a **local development server** at `http://localhost:3000`
- The browser opens automatically
- Any changes you save in the code are **reflected instantly** (Hot Reload)

---

### ✅ Step 5 — Stop the Server
Press `Ctrl + C` in the terminal.

---

### ✅ Step 6 — Build for Production (only if needed)
```bash
npm run build
```
This creates an optimized, minified version of the app in the `/build` folder.

---

---

# 📚 TERMINOLOGY & DEFINITIONS

---

## ⚛️ React Core Concepts

### React
React is an **open-source JavaScript library** developed by **Meta (Facebook)** for building fast,
interactive **User Interfaces (UIs)**. It is primarily used for **Single Page Applications (SPAs)** —
web apps that load once and update content dynamically without page reloads.

Key characteristics:
- **Component-based** — UI is split into small, reusable pieces called components.
- **Declarative** — You describe *what* the UI should look like; React handles *how* to update it.
- **Virtual DOM** — React maintains a lightweight copy of the DOM to minimize actual browser updates.

---

### Component
A **component** is an independent, reusable piece of UI. Think of it like a custom HTML tag that
you define yourself. In modern React, components are written as **JavaScript functions** that return **JSX**.

```jsx
// A simple functional component
function Greeting() {
    return <h1>Hello, World!</h1>;
}
```

There are two types:
| Type | Description |
|---|---|
| **Functional Component** | A plain JavaScript function that returns JSX. Modern standard. |
| **Class Component** | ES6 class that extends `React.Component`. Older style, rarely used now. |

---

### JSX (JavaScript XML)
JSX is a **syntax extension** for JavaScript that lets you write HTML-like code inside JavaScript files.
React transforms it into regular JavaScript before the browser sees it.

```jsx
// JSX
const element = <h1 className="title">Hello!</h1>;

// What it becomes after transformation
const element = React.createElement("h1", { className: "title" }, "Hello!");
```

Key JSX rules:
- Use `className` instead of `class` (since `class` is a JS keyword)
- Self-closing tags must close: `<input />` not `<input>`
- Every component must return a **single root element** (wrap siblings in `<div>` or `<>`)

---

### Props (Properties)
**Props** are the way to **pass data from a parent component to a child component**. They are
read-only — a child cannot modify its own props.

```jsx
// Parent passes data
<UserCard name="Shreya" age={21} />

// Child receives and uses it
function UserCard(props) {
    return <p>{props.name} is {props.age} years old.</p>;
}
```

---

### State
**State** is data that is **managed inside a component** and can change over time. When state changes,
React **automatically re-renders** the component to show the updated UI.

- State is **private** to the component.
- Use the `useState` hook to declare state in functional components.

---

### `useState` Hook
`useState` is a built-in React **hook** that lets functional components manage state.

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);  // count starts at 0

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

Syntax: `const [variable, setterFunction] = useState(initialValue);`
- `variable` → the current state value (read it)
- `setterFunction` → call this to update the state
- `initialValue` → the starting value of the state

---

### Hook
A **hook** is a special function in React that lets you "hook into" React features (like state and lifecycle)
from inside a functional component. Hook names always start with `use`.

| Hook | Purpose |
|---|---|
| `useState` | Manage state in a component |
| `useEffect` | Run side effects (API calls, timers) |
| `useRef` | Access DOM elements directly |
| `useContext` | Share data across components without prop drilling |

Rules of Hooks:
1. Only call hooks at the **top level** of a component (not inside loops or conditions).
2. Only call hooks inside **React functions** (components or custom hooks).

---

### Controlled Component
A **controlled component** is a form element whose value is **fully controlled by React state**.
Every keystroke updates the state, and the input always displays the current state value.

```jsx
const [name, setName] = useState("");

<input
    type="text"
    value={name}                          // controlled by state
    onChange={(e) => setName(e.target.value)}  // updates state on every keystroke
/>
```

Advantages:
- Single source of truth for form data.
- Easy to validate and transform input.
- Easy to access values on form submission.

---

### Uncontrolled Component
An **uncontrolled component** stores its own state internally in the DOM (like a regular HTML input).
You access its value using a **ref** (`useRef`) — usually only at submission time.

```jsx
const inputRef = useRef();

<input type="text" ref={inputRef} />
// Access value: inputRef.current.value
```

---

### Event Handling in React
React handles events using **camelCase** names and passes functions as event handlers.

| HTML | React |
|---|---|
| `onclick="fn()"` | `onClick={fn}` |
| `onchange="fn()"` | `onChange={fn}` |
| `onsubmit="fn()"` | `onSubmit={fn}` |

```jsx
function handleClick() {
    alert("Button clicked!");
}
<button onClick={handleClick}>Click Me</button>
```

---

### `onChange`
Fires every time the value of an input field changes (every keystroke). Used to keep state in sync.
```jsx
<input type="text" onChange={(e) => setName(e.target.value)} />
```
`e.target.value` gives the **current value** of the input field.

---

### `onSubmit`
Fires when a form is submitted (user presses Enter or clicks the submit button).
```jsx
<form onSubmit={handleSubmit}>
    ...
</form>

function handleSubmit(e) {
    e.preventDefault();  // IMPORTANT: stops the page from reloading
    // process form data
}
```

---

### `e.preventDefault()`
Cancels the **default browser behavior** for an event. For forms, the default behavior is to
**reload the page** when submitted. Calling `e.preventDefault()` stops this, allowing React to
handle the data without a page refresh.

---

### Form Validation
The process of **checking that user input is correct** before processing it. Done inside the
`handleSubmit` function.

```jsx
function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
        setError("Name cannot be empty");
        return;
    }
    if (!email.includes("@")) {
        setError("Please enter a valid email");
        return;
    }
    // All valid — process the data
}
```

Types of validation:
| Type | Example |
|---|---|
| Required field check | `if (name === "")` |
| Email format check | `if (!email.includes("@"))` |
| Length check | `if (password.length < 6)` |
| Regex pattern | `/^[a-zA-Z]+$/.test(name)` |

---

### Virtual DOM
React keeps a **lightweight copy of the real DOM** in memory called the **Virtual DOM**.
When state changes:
1. React creates a new Virtual DOM tree.
2. It **compares** (diffs) the new tree with the previous one.
3. It updates **only the changed parts** of the real DOM.

This makes React much faster than directly manipulating the real DOM for every change.

---

### `npm` (Node Package Manager)
The default package manager for Node.js. Used to install, manage, and run JavaScript packages and tools.

| Command | What it does |
|---|---|
| `npm install` | Installs all packages listed in `package.json` |
| `npm start` | Starts the development server |
| `npm run build` | Creates production-ready files |
| `npm install <package>` | Installs a specific package |

---

### `package.json`
A configuration file at the root of every Node/React project. It lists:
- Project name and version.
- All **dependencies** (packages the app needs to run).
- All **devDependencies** (packages only needed during development).
- **Scripts** (shortcuts for commands like `npm start`, `npm run build`).

---

### `node_modules/`
The folder where all installed packages are stored locally. This folder is **never pushed to GitHub**
(it can be hundreds of megabytes). Instead, `package.json` keeps track of what's needed, and
`npm install` recreates the folder on any machine.

---

### SPA (Single Page Application)
A web app that loads a **single HTML page** and dynamically updates content as the user interacts,
without reloading the whole page. React is one of the most popular tools for building SPAs.

---

---

# ❓ VIVA QUESTIONS & ANSWERS

---

## Section 1 — React Basics

**Q1. What is React? Who developed it?**
> React is an open-source **JavaScript library** for building user interfaces, developed by **Meta (Facebook)** in 2013.
> It is used to build **Single Page Applications (SPAs)** where the UI updates dynamically without page reloads.

---

**Q2. What is a component in React?**
> A component is a **reusable, independent piece of UI**. It is a JavaScript function (or class) that
> returns JSX (HTML-like code). A React app is built by combining many small components together.

---

**Q3. What is JSX? Is it mandatory in React?**
> JSX stands for **JavaScript XML**. It is a syntax extension that lets you write HTML-like code
> inside JavaScript. It is **not mandatory** — you can use `React.createElement()` instead — but JSX
> makes code much more readable and is the standard practice.

---

**Q4. What is the difference between Props and State?**
| | Props | State |
|---|---|---|
| What it is | Data **passed from parent** to child | Data **managed inside** the component |
| Who controls it | Parent component | The component itself |
| Can it change? | No (read-only in child) | Yes (using `setState`/`useState`) |
| Re-renders on change? | Yes (if parent re-renders) | Yes (immediately) |

---

**Q5. What is the Virtual DOM? Why is it faster than the real DOM?**
> The Virtual DOM is a **lightweight in-memory copy** of the real DOM. When state changes,
> React updates the Virtual DOM, compares it with the previous version using a **diffing algorithm**,
> and only updates the changed parts of the real DOM. This is faster than re-rendering the entire page.

---

## Section 2 — Forms & Hooks

**Q6. What is `useState`? Write its syntax.**
> `useState` is a React **hook** for managing state in functional components. Syntax:
```jsx
const [value, setValue] = useState(initialValue);
```
> - `value` — current state (read only)
> - `setValue` — function to update the state (triggers re-render)
> - `initialValue` — the starting value

---

**Q7. What is a controlled component?**
> A controlled component is a form element whose value is **entirely controlled by React state**.
> The input's `value` is set from state, and an `onChange` handler updates the state on every keystroke,
> keeping the UI and state in sync at all times.

---

**Q8. Why do we write `e.preventDefault()` inside `onSubmit`?**
> By default, when an HTML form is submitted, the browser **reloads the page**. `e.preventDefault()`
> cancels this default behavior, allowing React to handle the form data without any page refresh.

---

**Q9. What is the difference between `onChange` and `onSubmit`?**
> - `onChange` fires **on every keystroke** in an input field — used to update state as the user types.
> - `onSubmit` fires **when the form is submitted** (button click or Enter key) — used to process and validate
> the final data.

---

**Q10. What is form validation? How is it done in React?**
> Form validation is checking that user input meets certain criteria before processing it. In React,
> it is done inside the `handleSubmit` function by checking state values:
```jsx
if (name.trim() === "") {
    setError("Name is required");
    return;
}
```
> An error message state variable is used to display feedback to the user.

---

## Section 3 — Project & Tools

**Q11. What is `npm`? What does `npm start` do?**
> `npm` (Node Package Manager) is a tool that manages JavaScript packages. `npm start` runs the
> **development server** for the React app, making it accessible at `http://localhost:3000` in the browser
> with live hot-reloading.

---

**Q12. What is `npx create-react-app`? What does it create?**
> `npx create-react-app` is a command that **scaffolds (auto-generates)** a new React project with
> all necessary files and configurations (Webpack, Babel, ESLint, etc.) pre-configured.
> You get a ready-to-run React app without any manual setup.

---

**Q13. What is the `node_modules` folder?**
> It is the folder where **all installed npm packages** are stored. It can be very large (hundreds of MBs)
> and is never committed to GitHub. Running `npm install` recreates it from `package.json` on any machine.

---

**Q14. What is `App.js` in a React project?**
> `App.js` is the **root component** of the application. All other components are imported and rendered
> inside it. It is the main building block that `index.js` renders into the root HTML element (`<div id="root">`).

---

**Q15. What is the difference between a controlled and an uncontrolled form component?**
> - **Controlled:** React state manages the input value. Every change updates state via `onChange`.
> The value is always in sync with state — the React way.
> - **Uncontrolled:** The DOM manages the input value internally. You access it with a `ref` (usually
> only at submission). Less React-idiomatic, but simpler for basic cases.

---

**Q16. What are hooks in React? Name four of them.**
> Hooks are special functions that let you use React features inside functional components.
> They all start with the word `use`:
> 1. `useState` — manage state
> 2. `useEffect` — side effects (API calls, timers)
> 3. `useRef` — access DOM elements
> 4. `useContext` — share data across the component tree

---

**Q17. What is a SPA (Single Page Application)?**
> A Single Page Application loads **one HTML page** and dynamically updates the content as the user
> navigates or interacts with it — without reloading the browser. React is a popular tool for building SPAs.

---

**Q18. What is `e.target.value` in an input's onChange handler?**
> `e` is the **event object** passed automatically to the handler. `e.target` refers to the HTML element
> that fired the event (the input). `e.target.value` gives the **current text typed** in that input field.

---

---

## ✅ Conclusion (Write in your journal)

> This experiment demonstrated how to build a dynamic, interactive form component using React.
> By using the `useState` hook to manage form state and controlled components to bind input values
> to that state, real-time synchronization between user input and the application's data was achieved.
> The `onSubmit` event handler with `e.preventDefault()` was used to process and validate form data
> without reloading the page. This experiment established a strong foundation in React's component model,
> state management, event handling, and form validation — core concepts in modern front-end development.

---

*Lab Experiment 4 · WEBL Practical · Academic Year 2025–26*
