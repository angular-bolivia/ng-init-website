# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Coding Style

- We should use one-file per component, unless we need to add custom styles, this should go in a different file.
- If using custom styles, follow [BEM](https://getbem.com/naming/) and make sure to encapsulate them.
- We use [Prettier](https://prettier.io) to keep code style consistent.
- Use `export default` to export components, so that we have only one export per file.
- Use `protected` for class properties that need to be bound only in the template (i.e. `protected name = 'Joe'`).
- Use `private` for class properties that are only used in the class (i.e. `#name = 'Joe'`).
- Use `public` for class properties that are used outside the class and the template (i.e. `name = 'Joe'`).
- If type is not inferred, we need to add it explicitly (i.e. `#randomProperty: SomeType = { a: 0 }`).
- If type is already inferred, there's no need to add the type explicitly (i.e. `#name = 'Joe'`).
- By default, all properties should be `readonly`, unless it is strictly necessary to change them.
