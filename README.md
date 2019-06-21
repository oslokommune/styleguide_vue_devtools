# Styleguide Vue Devtools

Oslo Styleguide - Vue atomic pattern devtools

## Get Started

### Short version

In styleguide_vue run

```shell
npm link
```

In styleguide_vue_devtools run

```shell
npm install
npm link styleguide_vue
npm run storybook
```

### Long Version

Make your component library (styleguide_vue) act as a node module for the devtools (styleguide_vue_devtools).

To do this navigate your terminal to the component library repo and type

```shell
npm link
```

npm will make your local repo available as a node module for other local projects.

Then navigate back to your devtools repo (this repo) and install dependencues and then link the component library to the devtools project by its name (defined in package.json in the compononent library repo)

```shell
npm install
npm link styleguide_vue
```

Note: you will need to link the component library again every time you run npm install.

Then run the devtools by typing

```shell
npm run storybook
```

This will open a browser window with live reload on styleguide_vue components changes.

## How it Works

We use Storybook as devtools for Oslo kommunes Vue style guide, so read up on [https://storybook.js.org/docs/guides/guide-vue/](Storybooks documentation) to get to know how it works and how to create "stories".
