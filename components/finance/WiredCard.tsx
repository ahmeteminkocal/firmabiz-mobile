import Card from '@/components/atoms/card';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import React from 'react';
import { View } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

const ANIMATION_DURATION = 2000;

export default function WiredCard({isActive} : {isActive?: boolean}) {

    const progress = useDerivedValue(
        () => (isActive ? withTiming(1, { duration: ANIMATION_DURATION }) : withTiming(0, { duration: ANIMATION_DURATION })),
        [isActive]
    );
    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            [THEME.background, '#75737F0F']
            ),
        };
    });
      
    return (
        <Animated.View style={animatedStyle} className={cn(
            'w-full rounded-[5px] border border-border p-3 gap-2',
            isActive && 'border-b-0 rounded-b-none')}>
            <View className='flex-row gap-2 justify-between items-center'>
                <Card className='py-0 border-0 bg-[#F6F6F6]'><Text className='text-sm'>#...cc7baf80e7d1</Text></Card>
                <View className='flex-row justify-center items-center gap-2'>
                    <Icon width={16} color={THEME.subtitle} name='comment'/>
                    <Icon width={16} color={THEME.subtitle} name='copy'/>
                </View>
            </View>

            <View className='flex-row gap-2 justify-between items-center'>
                <Text className='text-lg text-foreground font-extrabold'>1,000.00 ₺</Text>
                <View className='flex-row gap-2 justify-between items-center'>
                    <Text className='text-sm'>Multipay</Text>
                    <Card className='px-1 py-0.5 border-0 bg-[#D00A0A0F]'>
                        <Text className='text-xs text-[#D00A0A]'>610 ms</Text>
                    </Card>
                </View>

            </View>

            <View className='flex-row gap-2 justify-between items-center'>
                <Text className='text-sm text-subtitle'>TR240011100000000121277624</Text>
                <Icon width={16} color={THEME.subtitle} name='copy'/>
            </View>

            <View className='flex-row gap-2 justify-between items-center'>
                <View className='flex-row justify-center items-center gap-1'>
                    <Icon width={16} color={THEME.subtitle} name='profile'/>
                    <Text className='text-sm text-subtitle'>IBHMO Ozturk</Text>
                    <Card className='flex-row gap-1 justify-center items-center px-1 py-0 border-0 bg-tertiary-background'>
                        <Icon width={12} color={THEME.tertiary} name='globe'/>
                        <Text className='text-xs text-tertiary'>MultiWin</Text>
                    </Card>
                </View>
                <Text className='text-sm text-subtitle'>02.09.2025 - 15:23:28</Text>
            </View>
        </Animated.View>
    )
}
