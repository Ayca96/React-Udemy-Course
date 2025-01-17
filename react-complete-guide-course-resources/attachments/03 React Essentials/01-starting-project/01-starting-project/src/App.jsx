import React from "react";
import  {useState} from "react";
import componentsImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data"
import Header from "./components/Header/Header"
import CoreConcept  from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {EXAMPLES} from "./data"


function App() {
    const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect (selectedButton) {
    // selectedButton ="components","jsx"...
   setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  
  }
  return (
    <div>
    <Header/>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept 
        title = "Components"
        description = "The core UI building block."
        image={componentsImg}
        />
        <CoreConcept 
        title ={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>

        </ul>
      </section>

      <section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
      <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
 
    <div id="tab-content">
    <p>Please select a topic.</p>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>

    </div>
      </section>
        
      </main>
    </div>
  );
}

export default App;
