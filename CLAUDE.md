# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 20.0 application called "menyatukan-hati" using standalone components architecture (no NgModules). The project uses Angular's latest new application builder (`@angular/build:application`) and is configured with TailwindCSS v4 for styling.

## Architecture

- **Standalone Components**: Uses Angular's standalone component approach with `imports` array instead of NgModules
- **Application Bootstrap**: Uses `bootstrapApplication()` with `ApplicationConfig` in `src/main.ts`
- **Routing**: File-based routing configuration in `src/app/app.routes.ts`
- **Styling**: TailwindCSS v4 with PostCSS configuration (`.postcssrc.json`)
- **Testing**: Karma + Jasmine setup for unit tests

## Development Commands

### Start Development Server
```bash
ng serve
# or
npm start
```
Runs on http://localhost:4200 with auto-reload

### Build
```bash
ng build                    # Production build
ng build --configuration development  # Development build
npm run build              # Production build
npm run watch              # Development build with watch mode
```

### Testing
```bash
ng test        # Run all unit tests with Karma
npm test       # Same as above
```

### Code Generation
```bash
ng generate component component-name    # Generate new component
ng generate service service-name        # Generate new service
ng generate --help                      # See all available schematics
```

## Key Configuration Files

- `angular.json`: Angular CLI workspace configuration with build targets
- `tsconfig.json`: TypeScript configuration with strict mode enabled
- `.postcssrc.json`: PostCSS configuration for TailwindCSS v4
- `src/app/app.config.ts`: Application-level providers and configuration

## TypeScript Configuration

The project uses strict TypeScript settings:
- `strict: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`
- Angular strict templates and injection parameters enabled

## Component Structure

Components follow standalone pattern:
```typescript
@Component({
  selector: 'app-example',
  imports: [CommonModule, RouterOutlet], // Direct imports instead of modules
  templateUrl: './example.html',
  styleUrl: './example.css'           // Note: styleUrl (singular)
})
```

## Styling Setup

- Global styles in `src/styles.css` with `@import "tailwindcss"`
- TailwindCSS v4 configured via PostCSS
- Component styles use `.css` files (note: `styleUrl` not `styleUrls`)

## Token Estimation

- Estimate token usage before call agent to make changes
- The goal is to avoid 25K token usage when make big changes
- Create execution plan in spec/EXECUTION.local.md, split into separate phase
- Phase in EXECUTION.local.md will be executed one-by-one

## PRD

- Reflect from spec/PRD.md before make any changes
- Give insight to me if there is any changes that does not align with the PRD