# Unity Simple Docs

A beginner-friendly rewrite of the Unity documentation, in the style of the old Roblox Developer Wiki. It's a plain static website (HTML, CSS and a small vanilla JavaScript file) with no build step, no frameworks and no animations.

Every API page includes:

- an infobox with the type, namespace and inheritance
- a plain-language summary and, for the trickier concepts, a "Think of it like..." analogy
- tables of the properties, methods and events you'll actually use
- complete code samples
- diagrams (inline SVG, no images or libraries) where a picture explains the mechanism better than text
- a "What happens at runtime" section
- common mistakes

> **Disclaimer:** This content was written with the help of AI, which was used to interpret and simplify the official documentation (Unity, Microsoft C# and DOTween). It may leave out details or contain mistakes. Always check the [Unity Manual](https://docs.unity3d.com/Manual/index.html) and [Scripting API](https://docs.unity3d.com/ScriptReference/index.html) for authoritative information. This is an unofficial project and isn't affiliated with Unity Technologies or Demigiant.

## Contents

| Section | Pages |
|---|---|
| Getting Started | What is Unity?, Your First Script, Script Lifecycle, Prefabs & Spawning, Coroutines, Physics Basics, Handling Input |
| C# Concepts | Value & Reference Types, Fields/Properties/Modifiers, Inheritance & Interfaces, Types & Type Checking (GetType, typeof, is, as), Exceptions & try/catch, Null & Nullable Types, Generics, Collections, LINQ, Delegates/Lambdas/Events, Iterators & yield, async & await, Enums & switch, Strings & Formatting, Extension Methods, Attributes |
| Tutorials | UnityEvents in a Game, Using the Input System, ScriptableObjects in a Game, Game Feel with DOTween |
| Guides | Update & FixedUpdate, Interpolation & Easing, Bezier Curves, Better Ways to Do Things |
| Performance | Optimization Best Practices, Optimizing Your Code, Object Pooling, GPU Instancing & Batching |
| API Reference | Object, GameObject, MonoBehaviour, Transform, ScriptableObject, Vector3, Quaternion, Mathf, Rigidbody, Collider, Physics, Time, Input, Camera, Animator, AudioSource, SceneManager, PlayerPrefs, Debug, UnityEvent, InputAction |
| Packages | DOTween |

The site works on phones: below 800px wide the sidebar becomes a Menu button, tables and code scroll or wrap instead of widening the page, and touch targets are larger.

## Viewing it

**Locally:** open `index.html` in a browser. No server is needed.

**On GitHub Pages:**

1. Push this repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

The empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

## Project layout

```
index.html          Home page (with the disclaimer)
manual/             Getting Started pages
csharp/             C# language concepts, with Unity examples
tutorials/          Step-by-step tutorials
guides/             Guides and performance pages
api/                API reference pages
css/style.css       All styling
js/nav.js           Builds the sidebar and the search filter
```

## Adding a page

1. Copy an existing page from the same folder (for example, `api/time.html`) and rename it.
2. Change the `<title>`, the `data-page` attribute on `<body>` (the page's path from the site root, such as `api/mypage.html`), the breadcrumb, the content, and the official-docs link at the bottom.
3. Add an entry to the `NAV` list at the top of `js/nav.js`, so the page shows up in the sidebar.

Pages in subfolders use `data-root="../"` on `<body>` so the sidebar links resolve correctly. The home page uses `data-root=""`.

In code blocks, escape `<` and `>` as `&lt;` and `&gt;` (for example, `GetComponent&lt;Rigidbody&gt;()`).
