# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React is a JavaScript library ofr building User Interfaces. The developers behind React tend to think of it as the V in MVC; the View in the Model-View-Controller paradigm. At it's core, React is a set of APIs that developers can use to create re-usable and composable blocks of code to build interfaces, not limited to web pages, games, applications, VR / AR experiences.

2. What does it mean to think in react?

- It's a conceptual thinking paradigm that can be applied to application development, regardless of the library or framework. More specifically, thinking in react is a non-linear, multi-step process:

- Create a component hierarchy (Architecture)
- Build a static version
- Identify the minimal complete UI state
- Identify where state should live
- Add inverse data flow (allow components deep in the app hierarchy to send data up the chain to effect state changes)

3. Describe state.

- State is the underlying data model that drives user interaction in your application. A less fancy, and more meaningful, definition of state, however is: state is any data in your app that needs to change (mutability) based on user input--form inputs, like buttons, favorites lists, shopping cart items, quantity, authentication, and so on.

4. Describe props.

- Props are typically derived from state. Props are read-only values you can pass around your application to render in various locations. A username is a great example. Let's say I log in to an application. Prior to logging in, the username state value was probably an empty string or a default value, like 'anonymous'. When I log in, the username state value updates to my username: `joeyjoejo`. I can now pass the piece of state as a prop to any component I want. I can then render that prop in those components. If I change my username, it automatically updates in all those components I passed it to as a prop. Fancy stuff.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?
