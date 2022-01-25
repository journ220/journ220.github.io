# journ220.github.io

Course website for JOURN 220 at UC Berkeley's School of Journalism. [View the published site here.](https://journ220.github.io)

## Installation

1. Clone repo locally.
2. Run `npm install` (and `npm audit fix` if needed).
3. Run `npm run start` to start a local server.

## Branches

GitHub builds [journ220.github.io](https://journ220.github.io) from the [`/docs` folder of the `main` branch].


## Deploying changes

- Stop your local server, i.e. stop `npm run start`.
- Run `npm run build`.
- Commit and push changes to the `main` branch.

## Updating the curriculum

You'll want to update [`src/index.md`](src/index.md).

### Assets

Place static assets, such as PDFs, in `src/assets/static`.