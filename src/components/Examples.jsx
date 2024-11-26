import { useState } from 'react'; 
import { EXAMPLES } from '../data.js';
import TabButton from "./TabButton";
import Section from './Section.jsx';


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton)
      console.log(selectedTopic);
  
    };
  
    let tabContent = <p>Please select a topic.</p>
  
    if (selectedTopic) {
      tabContent =
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].title}
            </code>
          </pre>
        </div>
    }

    return (
        <Section title={'Examples'} id='examples'>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>
            Components
          </TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>
            JSX
          </TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>
            State
          </TabButton>
        </menu>
        {tabContent}
      </Section>
    )
};