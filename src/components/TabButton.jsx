//we can use children prop to render the content of the TabButton component
//we can also use prop keyword and give it in label , but this is also another approach to it
export default function TabButton({ children, onSelect }) {
  return (
    <li>
        <button onClick={onSelect}>{children}</button>
        
    </li>
  );
}
