# Angular Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Commands

### - Run develop server

```
yarn start or ng serve
```

### - Build app for production

```
yarn build or ng build
```

### - Test app

```
yarn test or ng test
```

## Create component

### - component without separate template file in html and without test files and set standalone to true

```
ng generate component <name> --standalone --inline-template --skip-tests
```

> Hint : What is Standalone ? A Standalone component is a type of component which is not part of any Angular module. Prior to angular v14, usually when you would create a component, you'd pass it inside in the declaration array of the module.

### - component with separate template file in html and test files

```
ng generate component <name> --standalone
```
