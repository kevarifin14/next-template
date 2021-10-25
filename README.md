# Getting Start



Start local postgres instance
```
docker compose up
```


## ESLint

## [Add a new package](https://github.com/lerna/lerna/tree/main/commands/create#readme)

```
lerna create <your-package-name>
```

# How To

## Install Dependencies

```
npm run bootstrap
```

This install root package dependencies like Lerna and installs and links dependencies in all subpackages.

## Run locally

``` 
npm run dev
```

## Build 

```
npm run build
```

If you want to be able to build a specific package:

```
npm run build:app
```

This runs the build command but specifies which packages to build. In this example, we build `app` and its local dependency `shared`. 

```
npm run build -- --scope='{app,shared'}
```

## Create a New Package

```
npm run create -- <your-package-name>
```

## Clean Your Local Directory

If you want a clean directory with no dependencies installed or linked:

```
npm run clean
```

This will remove all `node_modules` and `package-lock.json` files in the root and subpackages. You'll have to run `npm run bootstrap` again to develop locally again. 