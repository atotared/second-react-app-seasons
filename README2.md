# Rules of Class Components

1. Must be a Javascript Class
2. Must extend (subclass) React.Component
3. Must define a 'render' method that returns some JSX

# RULES OF STATE

1. Usable with Class Components - Can be also used with functional components using HOOKS system (more complex - it'll be discussed later)
2. STATE is a JavaScript object that contains data relevant to a component
3. Updating STATE on a component causes the component to (almost) instantly re-render
4. STATE must be initialized when a component is created
5. # STATE can only be updated using the function setState

# What's super keyword?

super is a reference to the parent's (React.Component) constructor function.
It allows to create a new component that inherits the constructor function from its parent.

# What's a component lifecycle method?

It's a function that we can optionally define inside our class based component. If we decide to implement these methods, they'll be called automatically by React at certain points during a component lifecycle.

# STEPS OF COMPONENT LIFECYCLE

1. _constructor_
2. _render_ => only one being mandatory, not optional like others - gets called after each component udpate
3. _componentDidMount_ => content visible on screen - called only once, when component is first rendered onto the screen
4. _componentDidUpdate_ => sit and wait for updates - updates come from setState
5. _componentWillUnmount_ => sit and wait until the component is no longer shown
