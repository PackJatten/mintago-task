# Project Title

This project aims to create a responsive and interactive web application with a focus on user-friendly design, form handling, and smooth animations.

## Tech Stack

- **[Vite](https://vitejs.dev/)**: A fast build tool that provides an optimal development experience and enables lightning-fast hot module replacement (HMR). I chose Vite for its simplicity and speed, which allows for rapid development and iteration.
- **[Framer Motion](https://www.framer.com/motion/)**: A powerful library for animations and transitions in React applications. I opted for Framer Motion to enhance user experience with smooth animations, making the application feel more engaging and responsive.

- **[React Hook Form](https://react-hook-form.com/)**: A library that simplifies form handling in React applications. I selected React Hook Form for its out-of-the-box solution for managing inputs and state. It provides an elegant way to handle form validations and submission without the boilerplate code often associated with traditional form libraries.

## Why These Choices?

### Vite

Vite's fast build times and efficient development server allow me to focus on building features without getting bogged down by slow compilation times. Its support for modern JavaScript features means I can leverage the latest advancements in web development.

### Framer Motion

Animations are crucial for creating a dynamic user experience. Framer Motion provides a straightforward API for adding animations to components, allowing me to create visually appealing transitions that enhance the overall usability of the application.

### React Hook Form

React Hook Form significantly reduces the complexity of managing form state and validations. Its performance-oriented design minimizes re-renders, making it an excellent choice for applications that handle multiple forms and inputs.

## Future Plans

- **Finish Tests**: I plan to complete the existing test cases to ensure the reliability of the application and enhance the overall quality.
- **Component Breakdown**: I intend to break down the payment summary into smaller components for better maintainability and reusability. For example, the stat component could be refactored into its own dedicated component.

- **Address the Previous Pots Problem**: Sadly didn't have enough time to tackle this. But i have had a thought on it, so this is how i would tackle it.

1. Have a button and which triggers a dialog/modal. Inside this there would be a numbered input, a clear and submit button.
2. on Submit, it adds the pots amount to pots useHookFormValue, which would be an Array.
3. on Clear, resets the array to an empty []
4. Visualisation, on the summary page, show these as a straightAnglePiechart [text](https://recharts.org/en-US/examples/StraightAnglePieChart) from recharts.
5. if i had time, allow the user to add a name for these pots.
6. Stretch goal be able to remove these pots indivdually instead of clear.

## What I Would Do Differently

If I were to start this project over, I might consider implementing a more structured state management solution from the beginning, such as Redux or Zustand, especially if the application scales significantly. This could help manage complex state more efficiently and improve the clarity of state flow throughout the application.

I would probably explore a different chart library, as recharts is a little resistant to tailwind - and i think that framer motion wasn't required in the end.

##
