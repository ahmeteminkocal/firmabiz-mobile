import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import Card from '../atoms/card';
import { Icon } from '../atoms/icon';

const ANIMATION_DURATION = 300;

const SECTIONS = [ 'Data', 'Response'];

type ItemProps = {section: string, index: number, isActive: boolean};

function RenderHeader({section, index, isActive} : ItemProps) {

  const progress = useDerivedValue(() => (
    isActive? withTiming(1, { duration: ANIMATION_DURATION }) 
            : withTiming(0, { duration: ANIMATION_DURATION })),
    [isActive]
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [THEME.background, THEME.tertiaryBackground]
      ),
    };
  });

  const chevronStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
    }),
    [progress]
  );
    
  return (
    <Animated.View 
      style={animatedStyle}
      className={cn(
        'flex-row justify-between items-center border-tertiary border rounded-[5px] py-2.5 px-3', 
        isActive && 'rounded-b-none border-b-0')}>
        <Text className='text-sm text-tertiary font-medium'>{section}</Text>

        <Animated.View style={chevronStyle}>
            <Icon
                name='arrowDown'
                width={20}
                color={THEME.tertiary}
                style={{
                    flexShrink: 0
                }}
            />  
        </Animated.View>
    </Animated.View>
  );
};

function RenderContent({section, index, isActive} : ItemProps) {
    return (
    <Card className='border-tertiary border-t-0 rounded-t-none'>
        <Text>{'// Imports\nimport mongoose,  Schema  from mongoose\n// Collection name\nexport const collection = Product'}</Text>
    </Card>
    );
  };

export default function CryptoAccordionView() {  
  const [ activeSections, setActiveSections] = useState<number[]>([])  
  return (
    <View className='pt-1'>
      <Accordion
        sections={SECTIONS}
        containerStyle={{gap: 8}}
        expandMultiple={true}
        activeSections={activeSections}
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
    </View>
  );
}