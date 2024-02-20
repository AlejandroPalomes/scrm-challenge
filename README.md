# SCRM x Alejandro Palomes (Design System)

Hello world! And welcome to this challenge, SCRM x Alejandro Palomes.

## Briefing

This task involved developing a library that supports both React and React Native applications, focusing on a design system. The main challenge was to create a unified component library that works seamlessly across both platforms, utilizing Tailwind for styling and ensuring accessibility.

### Requirements

- Set up TailwindCSS configuration to enable styling for the components.
- Set up [NativeWind](https://www.nativewind.dev/quick-starts/react-native-cli) to make tailwind work in RN.
- Create components.
- Ensure Acccesibility

### Bonus

- ✅ Successfully configuring and utilizing [Tailwind Variants](https://www.tailwind-variants.org/) for the components.
- ✅ Ensure that the keyboard navigation and focus works.
- ✅ Code reusability.
- ⭕️ Creative feature.


## How to run the project 🏃‍♂️

**Step 1:** Clone this Repository
It is pretty self explanatory, clone the repository.

**Step 2:** Install Dependencies
Navigate to the project root directory and install the necessary dependencies:

```sh
yarn install
```

**Step 3 (optional):** Prepare mobile emulator
In case you'll like to test the mobile application, don't forget to either prepare the emulator. This project has been testet through Android Studio.

That's all you need to do. Now you are good to go! 🤘

### Useful Commands

- `yarn build` - Build all packages, including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `cd apps/mobile & yarn start` - Run React Native app (**Tested on Android**)


### Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `apps/mobile`: React Native application with a single screen including the buttons and alerts
- `packages/ui`: Core React components
