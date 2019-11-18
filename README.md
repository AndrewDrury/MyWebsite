# MyWebsite

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run lint, build, and deploy to gh-pages

1. Commit the `.gitignore` file with 'dist' uncommented.
2. Comment out 'dist'.
3. Run `.\deploy.sh`.
4. Uncomment 'dist' in the `.gitignore` file.

### Deploy Manually to gh-pages

1. Run `npm run lint`.
2. Commit the `.gitignore` file with 'dist' uncommented.
3. Comment out 'dist'.
4. Run `npm run build`.
5. Run `git add dist`.
6. Run `git commit -m "deploying dist"`
7. Run `git subtree push --prefix dist origin gh-pages`
8. Uncomment 'dist' in the `.gitignore` file.

### When there are conflicts with gh-pages branch - delete and set new gh-pages branch

1. git push origin --delete gh-pages
2. git subtree push --prefix dist origin gh-pages

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
