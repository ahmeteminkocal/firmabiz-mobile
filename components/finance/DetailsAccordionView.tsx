import React, { useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import WiredCard from './WiredCard';
import WiredDetails from './WiredDetails';

type ItemProps = {section: string, index: number, isActive: boolean};

function RenderHeader({section, index, isActive} : ItemProps) {
    
  return (
    <WiredCard isActive={isActive}/>
  );
};

function RenderContent({section, index, isActive} : ItemProps) {
    return (
      <WiredDetails/>
    );
  };

export function DetailsAccordionView() {  

  const [ activeSections, setActiveSections] = useState<number[]>([]);  

  return (
    <Accordion
      sections={['Card']}
      activeSections={activeSections}
      sectionContainerStyle={{}}
      containerStyle={{}}
      renderHeader={(content, index, isActive) => (
        <RenderHeader 
          section={content} 
          index={index} 
          isActive={isActive}/>
      )}
      renderContent={(content, index, isActive) => (
        <RenderContent 
          section={content} 
          index={index} 
          isActive={isActive}/>
      )}
      onChange={(indexes) => {
        setActiveSections(indexes);
      }}
      underlayColor='transperant'
      duration={300}
    />
  );
}