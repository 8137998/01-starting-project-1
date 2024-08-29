import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";

export default function Examples() {
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
        <Section id="examples" title="Examples">
        <menu>
          {/* we can use arrow function to pass the value to the function*/}
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleClick("components")}
          >
            Component
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleClick("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </Section>
    );
}