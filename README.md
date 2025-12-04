# TravelApp

**Student:** _Zerrin Yaşik_  
**Student ID:** _210408008_

## Project Overview

TravelApp is a multi-screen React Native experience built with Expo. It demonstrates stack and tab navigation, route parameters, and basic styling to simulate a simple travel guide.

## Project Structure

- `App.js`: Sets up the navigation container, bottom tabs, and stack configuration.
- `screens/HomeScreen.js`: Lists destinations and pushes params to the details screen.
- `screens/DetailsScreen.js`: Displays information about the selected destination.
- `screens/SettingsScreen.js`: Placeholder settings screen with simple content.

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code with the Expo Go app (Android) or follow the instructions shown for iOS/web.

## Navigation Highlights

- **Home Stack:** Houses `HomeScreen` and `DetailsScreen` with customized headers.
- **Bottom Tabs:** Provides Explore (stack) and Settings tabs with Ionicons that change based on focus state.
- **Route Params:** Buttons on `HomeScreen` send destination information to `DetailsScreen`, which renders contextual messages.

## Testing Checklist

- Launching the app shows the Explore tab first.
- Tapping any destination opens the Details screen with custom content.
- The Settings tab displays the static settings view.
- Headers on stack screens are tomato-colored with white text, and tab icons change between filled/outline states.

## Version Control

Each lab part is committed separately following the required messages:

1. `chore: initial project setup`
2. `feat: setup project and install navigation dependencies (Part 1)`
3. `feat: implement stack navigator with Home and Details screens (Part 2)`
4. `feat: add route params to pass data between screens (Part 3)`
5. `feat: implement bottom tab navigator with Explore and Settings tabs (Part 4)`
6. `feat: add icons and custom styling to navigation (Part 5)`

## Notes

- Update the **Student ID** entry above before submission.
- Ensure `npx expo start` runs without dependency warnings prior to final delivery.

