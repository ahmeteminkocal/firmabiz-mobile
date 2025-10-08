import { Text } from '@/components/atoms/text';
import { cn, pascal } from '@/lib/utils';
import React, { useState } from 'react';
import { View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { Button } from '../atoms/button';
import { Icon } from '../atoms/icon';

type Section = 'wired' | 'crypto' | 'other';
type TransactoinType = 'withdrawal' | 'deposit';

const ANIMATION_DURATION = 300;

const SECTIONS = [
  'wired',
  'crypto',
  'other',
];

type ItemProps = {
  section: Section, 
  index: number, 
  isActive: boolean, 
  onSelect: (section: Section, type: TransactoinType) => void};

function RenderHeader({section, isActive} : ItemProps) {

  const progress = useDerivedValue(
    () => (isActive ? withTiming(1, { duration: ANIMATION_DURATION }) : withTiming(0, { duration: ANIMATION_DURATION })),
    [isActive]
  );
  const triggerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFFFF", "#349ECC4D"]
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
      style={triggerAnimatedStyle}
      className='flex-row justify-between py-3 px-4 rounded-t-[8px]'>
      <Text
        className={cn(
          'text-left text text-[#5D5D5D]',
          isActive && 'font-bold'
        )}
      >{pascal(section)}</Text>
      <Animated.View style={chevronStyle}>
        <Icon
          name='arrowDown'
          width={24}
          color={'#5D5D5D'}
          style={{
            flexShrink: 0
          }}
          />
      </Animated.View>
    </Animated.View>
  );
};

function RenderFooter ({index} : ItemProps) {
  return (
    <View className={cn(
      'w-full px-2',
      index !== SECTIONS.length - 1 && 'my-2 border-b border-[#349ECC4D]'
    )}/>
  );
};

function RenderContent({section, isActive, onSelect} : ItemProps) {

  const progress = useDerivedValue(
    () => (isActive ? withTiming(1, { duration: ANIMATION_DURATION }) : withTiming(0, { duration: ANIMATION_DURATION })),
    [isActive]
  );
  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFFFF", "#349ECC4D"]
      ),
    };
  });

  return (
    <Animated.View 
      style={contentAnimatedStyle}
      className='flex-row justify-center items-center gap-2 px-2 pb-2 rounded-b-[8px]'>
        <Button className='bg-background flex-1' onPress={() => onSelect(section, 'withdrawal')}>
          <Text className='text-[#5D5D5D]'>Withdrawal</Text>
        </Button>
        <Button className='bg-background flex-1' onPress={() => onSelect(section, 'deposit')}>
          <Text className='text-[#5D5D5D]'>Deposit</Text>
        </Button>
      </Animated.View>
    );
  };


export function FinanceAccordionView({onSelect} : 
  {onSelect: (section: Section, type: TransactoinType) => void}) {  
  const [ activeSections, setActiveSections] = useState<number[]>([])  
  return (
    <View className='flex bg-background rounded-t-[8px] p-2'>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={(content, index, isActive) => (
          <RenderHeader 
            section={content as Section} 
            index={index} 
            isActive={isActive}
            onSelect={onSelect}/>
        )}
        renderContent={(content, index, isActive) => (
          <RenderContent 
            section={content as Section} 
            index={index} 
            isActive={isActive}
            onSelect={onSelect}/>
        )}
        renderFooter={(content, index, isActive) => (
          <RenderFooter 
            section={content as Section} 
            index={index} 
            isActive={isActive}
            onSelect={onSelect}/>
        )}
        onChange={(indexes) => {
          setActiveSections(indexes);
        }}
        underlayColor='transperant'
        duration={400}
      />
    </View>
  );
}