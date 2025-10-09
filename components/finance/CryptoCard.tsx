import Card from '@/components/atoms/card';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import SvgIcon from '../ui/SvgIcon';


export default function CryptoCard() {

    const router = useRouter();
      
    return (
        <Card className='gap-2' onPress={() => {router.push('/finance/crypto-details/1')}}>
            <View className='flex-row gap-2 justify-between items-center'>
                <Card className='py-0 border-0 bg-[#F6F6F6]'><Text className='text-sm'>#...cc7baf80e7d1</Text></Card>
                <View className='flex-row justify-center items-center gap-3'>
                    <SvgIcon name={'failure'}/>
                    <Icon width={16} color={THEME.subtitle} name='comment'/>
                    <Icon width={16} color={THEME.subtitle} name='copy'/>
                </View>
            </View>

            <View className='flex-row justify-start items-center gap-2'>
                <SvgIcon name='crypto' size={26}/>
                <Text className='text-lg text-foreground font-extrabold'>1,000.00 ₺</Text>
                <Text className='text-sm'>11.00 DOGE</Text>
            </View>

            <View className='flex-row gap-2 justify-start items-center'>
                <Text className='text-sm text-subtitle'>DOGE  |  0x761E94c79053d8A407D39CB9...</Text>
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
        </Card>
    )
}
