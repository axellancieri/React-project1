import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  function handleClick(clickedButton) {
    console.log(clickedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id='core-concepts'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('Children')}>
              Children
            </TabButton>
            <TabButton onSelect={() => handleClick('JSX')}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleClick('Props')}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleClick('State')}>
              State
            </TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
