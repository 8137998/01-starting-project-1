import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

//formatted the file
function App() {
  //useState returns an array with two elements, the first element is the current state value and the second element is a function that allows us to update the state value
  const [selectedTopic, selectedButtonText] = useState("");
  function handleClick(selectedButton) {
    selectedButtonText(selectedButton);
    // console.log(selectedText);
  }
  let tabContent = <p>Click on a tab to see an example!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <ul>
            {/* heremap function is used to get the elements in the array and iterate through them */}
            {CORE_CONCEPTS.map((coreConcept) => (<CoreConcepts key={coreConcept.image} {...coreConcept} />))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* we can use arrow function to pass the value to the function*/}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
