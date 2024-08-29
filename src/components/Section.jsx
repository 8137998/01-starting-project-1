//here props is not the keyword but the name of the object that we are destructuring and this spread operator
//is used to pass the rest of the props to the button element or any other html elements
export default function Section({title, children, ...props }) {
    return (
        // check if props contains an id, if it does, use it, otherwise use the title
        
        <section {...props}>
        <h2>{title}</h2>
        {children}
        </section>
    );
  }
