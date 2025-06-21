# Menyatukan Hati - Wedding Invitation Website

A beautiful, responsive wedding invitation website built with Angular 20 and TailwindCSS v4. Features traditional Balinese elements with modern web design.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Interactive Photo Gallery**: Full-screen lightbox with keyboard navigation
- **Live Countdown Timer**: Real-time countdown to the wedding ceremony
- **Personalized Greetings**: Dynamic guest names from URL parameters
- **Traditional Elements**: Om Swastiastu greeting and Vedic prayers
- **Modern Architecture**: Angular 20 standalone components with TailwindCSS v4

## Project Architecture

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2 with standalone components architecture.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment

The application is optimized for static hosting and can be deployed to:
- Netlify
- Vercel  
- GitHub Pages
- Firebase Hosting
- Any static web server

Build artifacts are generated in the `dist/menyatukan-hati/` directory.

## Environment Configuration

Configure the following environment variables in `src/environments/environment.ts`:
- `groomShortName`: Short name for the groom
- `brideShortName`: Short name for the bride
- `groomFullName`: Full name for the groom
- `brideFullName`: Full name for the bride
- Family member names (fathers and mothers)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
