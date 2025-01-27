# React Native + Expo + TypeScript Template

This is a mobile project using the following technologies:
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
  - [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)

## TypeScript Path Aliases

- `@app/*` -> `./src`
- `@ui/*` -> `./src/ui`
- `@components/*` -> `./src/ui/components` (for general components)
- `@modals/*` -> `./src/ui/modals`
- `@styles/*` -> `./src/ui/styles` (for style sheets)
- `@widgets/*` -> `./src/ui/widgets` (for widgets)
- `@pages/*` -> `./app`
  - Pages is handled by *Expo Router*. See their documentation for more information.
- `@backend/*` -> `./src/backend` (for any backend code)
- `@stores/*` -> `./src/stores` (for Zustand stores)

# Usage

1. Clone this repository
2. Run `bun install`
3. Run `bun check` (for checking with Expo Doctor for package updates)
4. Change the `name`, `slug`, and `scheme` in `app.json`
5. Setup EAS (Expo Application Services) in `app.json` under `extra.eas.projectId`
6. Configure App Store Connect information in `eas.json`

## Configuring for GitHub Actions

If you want GitHub Actions to build your app, you need to set the `EXPO_TOKEN` secret.

The workflow templates in `.github/workflow_templates` contain:
- `build-<PLATFORM>-dev.yml` for building a development client
  - This means the app loads its JavaScript a computer/Metro server
- `build-<PLATFORM>-staging.yml` for building a 'staging' client
  - A 'staging' client is similar to a preview build.
  - This preview build can be pushed to TestFlight if you have an Apple Developer account.
