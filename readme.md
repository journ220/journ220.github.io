# journ220.github.io

Course website for JOURN 220 at UC Berkeley's School of Journalism. [View the published site here.](https://journ220.github.io)

## Installation

1. Clone repo locally.
2. Run `npm install` (and `npm audit fix` if needed).
3. Run `npm run start` to start a local server.

## Branches

There are two branches: `main` and `production`. GitHub builds journ220.github.io from the [`/docs` folder of the `production` branch](https://github.com/journ220/journ220.github.io/tree/production/docs).

## Deploying changes

You can add all files, commit, and push to both `main` and `production` by running the following command from the root directory on the `main` branch:

```sh
% source deploy.sh "my commit message"
```

More details in the [`deploy.sh`](deploy.sh) file. 


## Updating the curriculum

You'll want to update [`src/index.md`](src/index.md).

