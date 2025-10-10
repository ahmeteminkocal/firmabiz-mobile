import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import Card from '../atoms/card';
import { Icon } from '../atoms/icon';
import SwitchCard from '../atoms/SwitchCard';
import SvgIcon from '../ui/SvgIcon';

const ANIMATION_DURATION = 300;

type ItemProps = {section: string, index: number, isActive: boolean};

function RenderHeader({isActive} : ItemProps) {

  const [deposit, setDeposit] = useState<boolean>(false);
  const [withdraw, setWithdraw] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const progress = useDerivedValue(
      () => (isActive ? withTiming(1, { duration: ANIMATION_DURATION }) : withTiming(0, { duration: ANIMATION_DURATION })),
      [isActive]
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
        backgroundColor: interpolateColor(
          progress.value,
          [0, 1],
          [THEME.background, THEME.splash]
        ),
    };
  });
    
  return (
    <Animated.View style={animatedStyle} className={cn(
        'w-full rounded-[5px] border border-border p-3 gap-2',
        isActive && 'border-b-0 rounded-b-none')}>
        <View className='flex-row gap-2 justify-between items-center'>
            <View className='flex-row gap-2 items-center'>
                <SvgIcon name='pin' size={18}/>
                <Text className='text-base text-foreground font-semibold'>TRANSFER/EFT</Text>
            </View>
            <View className='flex-row gap-2 items-center'>
                <SvgIcon size={16} name='wired'/>
                <SvgIcon size={16} name='building'/>
                <SvgIcon size={16} name='layers'/>
            </View>
        </View>
        <View className='flex-row gap-2 justify-between items-center'>
            <View className='flex-1'>
              <SwitchCard
                  label='Deposit' 
                  checked={deposit}
                  onCheckedChange={(checked: boolean) => {setDeposit(checked)}}/>
            </View>
            <View className='flex-1'>
              <SwitchCard
                  label='Withdraw'
                  checked={withdraw}
                  onCheckedChange={(checked: boolean) => {setWithdraw(checked)}}/>
            </View>
            <View className='flex-1'>
              <SwitchCard
                  label='Alert' 
                  checked={alert}
                  onCheckedChange={(checked: boolean) => {setAlert(checked)}}/>
            </View>
        </View>
    </Animated.View>
                    
  );
};

type ContentCardProps = {
  title: string, 
  key1: string, 
  value1: string, 
  key2: string, 
  value2: string,
  onEdit?: () => void
}
function RenderContent(props : ItemProps) {


  const ContentCard = ({title, key1, value1, key2, value2, onEdit}: ContentCardProps) => {
    return <Card className='flex-row flex-1 items-center p-2 bg-[#F9F9F9] border-0' onPress={onEdit}>
      <View className='flex-none items-start gap-0.5'> 
          <Text className='text-sm font-bold text-black'>{title}</Text> 
          <Text className='text-sm'>{key1}</Text>  
          <Text className='text-sm'>{key2}</Text>  
      </View>
      <View className='flex-1 justify-center items-end gap-0.5'> 
          {onEdit? <Icon name='pen' color={'#7C7C7C'} width={16} height={16}/> : <Text className='text-sm font-medium'></Text>}  
          <Text className='text-sm text-[#7C7C7C]'>{value1}</Text>  
          <Text className='text-sm text-[#7C7C7C]'>{value2}</Text>  
      </View>
    </Card>
  }

  return (
    <Card className='gap-2 border-t-0 rounded-t-none'>
      <View className='flex-row gap-2'>
        <ContentCard title={'Deposit'} key1={'Min'} value1={'73,273₺'} key2={'Max'} value2={'400,237,24₺'} />
        <ContentCard title={'Withdrawal'} key1={'Min'} value1={'73,273₺'} key2={'Max'} value2={'400,237,24₺'} />
      </View>
      <View className='flex-row gap-2'>
        <ContentCard title={'Commissions'} key1={'Deposit'} value1={'1.1%'} key2={'Withdrawal'} value2={'0.6%'} onEdit={() => {console.log('onEdit')}}/>
        <ContentCard title={'Alert'} key1={'Daily limit'} value1={'0'} key2={'Difference Limit'} value2={'1'} onEdit={() => {console.log('onEdit')}}/>
      </View>
    </Card>
  );
  };

export function WireTransferCard() {  

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
      duration={ANIMATION_DURATION}
    />
  );
}