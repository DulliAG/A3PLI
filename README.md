# TypeScript Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

```sh
npx create-react-native-app -t with-typescript
```

TypeScript is a superset of JavaScript which gives you static types and powerful tooling in Visual Studio Code including autocompletion and useful inline warnings for type errors.

## 🚀 How to use

#### Creating a new project

- Install the CLI: `npm i -g expo-cli`
- Create a project: `npx create-react-native-app -t with-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Create a blank TypeScript config: `touch tsconfig.json`
- Run `yarn start` or `npm run start` to automatically configure TypeScript
- Rename files to TypeScript, `.tsx` for React components and `.ts` for plain typescript files

> 💡 You can disable the TypeScript setup in Expo CLI with the environment variable `EXPO_NO_TYPESCRIPT_SETUP=1 expo start`

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)

## Todo

- [ ] Splash Screen
  - https://github.com/expo/examples/blob/master/with-splash-screen/App.js
- Dashboard
  - [ ] Anzeigen aller Server
  - [ ] Anzeigen der Spielerliste eines Servers
- Profil
  - Spieler
  - Fahrzeuge
    - [ ] Anzeigen der aktiven Fahrzeuge
          _(weiter unten)_
    - [ ] Anzeigen der inaktiven Fahrzeuge
  - Häuser
    - [ ] Anzeigen der Häuser
    - [ ] Anzeigen der Appartments
    - [ ] Anzeigen der Baustellen
- Markt
  - [ ] Anzeigen der aktuellen Marktpreise
  - [ ] Anzeigen des aktuellen Cop-Bonus
  - [ ] Anzeigen wann die Preise neu berechnet werden
- Firmen
  - [ ] Firmen des Spielers
  - [ ] Firmenshops
- Händler
  - [ ] Fahrzeuge
  - [ ] Items
- Changelogs
  - [ ] Anzeigen der Changelogs
- Einstellungen
  - [ ] Theme
  - [ ] ApiKey

## Development

### Faq

|Question|Answer|
|Where can I find icons?|[Here](https://pictogrammers.com/library/mdi/)|
