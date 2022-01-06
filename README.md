# Nextjs with Typescript UI

This is an example UI built on Nextjs with Typescript which aims to show how you reference in a component library that you've built and are storing in another repository and publishing to NPM.

## Initial setup

`yarn`

This will install all the dependencies including your component library with the version referenced in the package.json.

## Run the local server

`yarn dev`

## Updates to the library

When there are updates to the component library you should update the version in the package.json file and run the following

`yarn`

If you're not seeing changes in your component library, restart the local server, which should correct any caching issues.
