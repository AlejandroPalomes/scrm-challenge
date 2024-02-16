### **React/React Native Technical Test for Design System**

This project involves developing a library that supports both React and React Native applications, focusing on a design system. The main challenge is to create a unified component library that works seamlessly across both platforms, utilizing Tailwind for styling and ensuring accessibility.

### **📖 Description**

The goal is to develop two key components — **Button** and **Alert** — based on the designs provided in [Figma](https://www.figma.com/file/K6wOCDyoNqSa8qMAuTXtAr/Starter-Design-System-(Community)?type=design&node-id=0-1&mode=design&t=hvZcPmpp5cXFApGy-0). These components should be universally compatible with React and React Native, illustrating the power of a shared component library in a cross-platform environment.

### **🚀 Getting Started**

Ensure you have the necessary React and React Native environment set up. You will be provided with a TurboRepo template including a React Native app and a Storybook setup for React.

**Step 1:** Clone the Provided Repository
Start by cloning the repository provided by our team. This repository contains the basic setup for your development.

**Step 2:** Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```bash

# Use Yarn to install dependencies its a monorepo
yarn install

```

**Step 3:** Start Developing
Begin by developing the Button and Alert components based on the Figma designs. Remember to import the components uniformly in both React and React Native environments.


### Useful Commands

- `yarn build` - Build all packages, including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
- `cd apps/mobile & yarn start` - Run React Native app (**Tested on Android**)


### **🛠 Technical Challenges**

**Challenge 1: Universal Components Development with Tailwind**
📌 Develop the Button and Alert components to be compatible with both React and React Native. Here's an example of how the components should be imported and used:

- [ ]  Set up TailwindCSS configuration to enable styling for the components.
    - [ ]  Set up [NativeWind](https://www.nativewind.dev/quick-starts/react-native-cli) to make tailwind work in RN.
- [ ]  Create components.

**React**:

```jsx
import Button from 'your-library';

<Button onPress={handlePress} label="press me">

```

**React Native**:

```jsx
import Button from 'your-library';

<Button onPress={handlePress} label="press me">

```

**Challenge 2: Accessibility**
📌 Ensure that the Button and Alert components are accessible to users with disabilities.

Follow best practices for accessibility, such as providing alternative text for images, using proper semantic markup, etc.

### **🌟 Extra Points**

- **Tailwind Variants Configuration:** Successfully configuring and utilizing [Tailwind Variants](https://www.tailwind-variants.org/) for the components.
- **Accessibility +:** Ensure that the keyboard navigation and focus works.
- **Code Reusability:** Demonstrating high levels of code reuse between components and across platforms.
- **Creative Feature:** Add an innovative feature or improvement to the components that enhances their functionality or user experience.

### **🌟 Submission Guidelines**

- **Regular Commits:** Make regular commits to the repository to showcase the evolution of your project. Completing all tasks is not mandatory; progress in any form is valued.
- **Documentation:** Include a README with implementation instructions and component demonstrations.
- **Public Repository:** Once completed, make sure your repository is public and share the link with us.

### **📚 Project Dependencies**

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TurboRepo](https://turborepo.org/)

### **🙌 Conclusion**

Good luck with the technical test! We are eager to see your approach to the challenges and the creative solutions you come up with. Feel free to ask for any clarifications or further information.
