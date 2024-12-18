import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from "./TabButton";
import Section from './Section.jsx';
import Tabs from './Tabs.jsx'


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
      <Tabs 
      buttons={
        <>
          <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => handleClick('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleClick('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleClick('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => handleClick('state')}
        >
          State
        </TabButton>
        </>
      }
      />
      <Tabs>
        {tabContent}
      </Tabs>
    </Section>
  )
};