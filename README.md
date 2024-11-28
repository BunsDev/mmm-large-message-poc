# Website template

A project template for a website created with TypeScript

## Contributing

### Setup

-   Install [Node.js](https://nodejs.org) version 16
    -   If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm use` will automatically choose the right node version for you.
-   Run `npm run setup` to install dependencies and run any requried post-install scripts
    -   **Warning:** Do not use the `npm install` command directly. Use `npm run setup` instead. The normal install command will skip required post-install scripts, leaving your development environment in an invalid state.

### Testing and linting

Run `npm run lint` to run the linter, or run `npm run lint:fix` to run the linter and fix any automatically fixable issues.

Run `npm test` to run unit tests.
