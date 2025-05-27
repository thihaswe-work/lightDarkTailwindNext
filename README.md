# Tailwind CSS Light, Dark, and Grey Modes with Next.js

This document explains how to implement **light**, **dark**, and **grey** color modes in a Next.js project using the latest Tailwind CSS version. It also includes a simple HTML example to illustrate how these modes work under the hood.

---

## 1. How Tailwind Light, Dark, and Grey Modes Work

### Light Mode (Default)

- Tailwind applies styles as usual without any special class or media query.
- This is the default styling applied when no dark or grey mode is active.

### Dark Mode

- Tailwind supports dark mode by toggling a `dark` class on a parent element (usually `<html>` or `<body>`).
- Using the [`dark` variant](https://tailwindcss.com/docs/dark-mode), you can write styles like `dark:bg-black` that apply only when the `dark` class is present.
- Tailwind can also use the `media` strategy, which applies dark styles based on the user's system preferences, but class strategy is preferred for manual toggling.

### Custom Grey Mode

- Tailwind doesn’t provide a built-in "grey" mode, but you can create your own by defining a custom variant.
- This usually means adding a `.grey` class to a parent container and scoping styles inside it.
- Using Tailwind's [plugin system](https://tailwindcss.com/docs/plugins), you can create a custom variant `grey:` that applies styles only when inside `.grey`.

---

## 2. Setting Up in Next.js with Tailwind

### tailwind.config.js

```js
console.log("hello world");
```
