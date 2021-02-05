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
