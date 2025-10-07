import React from 'react';
import { ScrollView } from 'react-native';
import JSONTree from 'react-native-json-tree';

const JsonViewer = ( {data} : {data: {},}) => {

  const customGetItemString: ((_type: any, _data: any, itemType: React.ReactNode, itemString: string | number | undefined) => React.ReactNode) = (type, data, itemString) => {
    if (type === 'Array' || type === 'Object') {
      return `${type}`; 
    }
    return itemString;
  };

  return (
    <ScrollView 
      horizontal 
      bounces={false}>
      <JSONTree 
        data={data}     
        getItemString={customGetItemString}
        theme={{
          extend: 'harmonic',
          tree: () => ({ 
            className: 'bg-background',
          })
        }}
      />
    </ScrollView>
  );

}

export default JsonViewer;