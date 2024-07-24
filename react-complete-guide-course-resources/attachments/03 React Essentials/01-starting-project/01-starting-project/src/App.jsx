import React from "react";

import componentsImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data"
import Header from "./components/Header"
import CoreConcept  from "./components/CoreConcept";


function App() {
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
        
      </main>
    </div>
  );
}

export default App;
