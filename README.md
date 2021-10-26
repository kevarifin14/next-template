# Introduction

Next Template is a monorepo to let you get started with developing right away instead of writing boilerplate. The repository comes with 5 packages

1. `app` - main application logic for your business
1. `marketing` - marketing focused website 
1. `shared` - shared components used across the monorepo
1. `hasura` - managing your hasura database for instant GraphQL endpoints
1. `generated` - auto-generated types and hooks to access your database

# Getting Started

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/)

* [Node](https://nodejs.org/en/)

If you need the database running:

```
docker compose up
```

## Step 1: Bootstrap 

```
npm run bootstrap
```

## Step 2: Dev Environment

```
npm run dev
```

## Step 3: Browser

`app` is running at [localhost:3000](http://localhost:3000)

`marketing` is running at [localhost:4000](http://localhost:4000)

# Customization


# Developer Experience

## ESLint

## Jest

## Tailwind

## Hasura, GraphQL, & Apollo

## Google Analytics

## Environment Variables



## [Add a new package]

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