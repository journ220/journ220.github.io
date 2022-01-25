# journ220.github.io

Course website for JOURN 220 at UC Berkeley's School of Journalism. [View the published site here.](https://journ220.github.io)

## Installation

1. Clone repo locally.
2. Run `npm install` (and `npm audit fix` if needed).
3. Run `npm run start` to start a local server.


## Updating the curriculum

Update [`src/index.md`](src/index.md) using markdown.

### Assets

Place static assets, such as PDFs, in [`src/assets/static`](src/assets/static). You can link to assets like so:

```
[Lecture slides](assets/static/lecture01-24.pdf)
```


## Deploying changes

GitHub builds [journ220.github.io](https://journ220.github.io) from the [`/docs`](https://github.com/journ220/journ220.github.io/tree/main/docs) folder of the `main` branch.

- First, you must stop your local server, i.e. stop `npm run start`. If you run `npm run build` below while you have your local server running, then new files could be generated between the various git steps.

- Run the following commands to deploy changes:

```sh
# packages src/ folder contents (minifies, etc.) into docs/
% npm run build

# adds all new files and content changes to index
% git add .

# commit changes with your own message
% git commit -am "message tk"

# push to main / deploy changes
% git push origin main
```
