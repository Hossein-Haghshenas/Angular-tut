# Angular Documentation

## What is Angular ?

Angular is a frontend framework for javascript which you can use to create web applications and you can also create SPA (single page application) that will be downloaded the website engine when the user visited the page and then change it locally on the browser therefor thats so fast and provide a great user experience

## Angular developing requirements

- Install last stable version of nodejs on your system
- Install code editor for example : vs.code
- Install angular cli globally

## Create your first angular app

For create a new angular app you must open the terminal and run this command

```
ng new <app-name>
```

> Hint 1 : ng referred to angular

> Hint 2 : if you get this error **cannot be loaded because running scripts is disabled on this system** run the below command in your editor terminal

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## How to run ?

Run your app with ng serve command and Then enter the localhost:4200 url on your browser. boom here you are
now you can should see this page on your browser

![starter-template-page](./document/image/starter-template.png)

> Hint : the angular app port is 4200 but if you wanna change that just add the --port your-port flag on the end of your start command

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

## Create a new angular interface

```
ng generate interface <name>
```

### What is Angular Interface ?

In the context of web development using the Angular framework, an **interface** refers to a TypeScript feature that helps define the structure or shape of an object. Interfaces are used to specify the contract that classes or objects must adhere to, ensuring that they have certain properties and methods.

### Purpose of Interfaces in Angular

1. **Defining Data Structures**: Interfaces are used to define the structure of objects or data models. For example, you can create an interface to describe the shape of a user object with properties like `name`, `email`, and `id`.

   ```typescript
   interface User {
     name: string;
     email: string;
     id: number;
   }
   ```

<!-- ## Add an input parameter to the component -->
