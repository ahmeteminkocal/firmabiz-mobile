import Card from '@/components/atoms/card';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import React from 'react';
import { View } from 'react-native';

export default function SummaryCard() {
    return (
        <Card className='gap-2'>
          <Text className='font-bold'>Rami malk</Text>
          <View className='flex-row gap-3'>
            <Card
              className='flex-1 border-0 bg-[#E9F7F099] gap-2'> 
              <View className='flex-row justify-between'>
                <Text className='text-sm text-[#50A864] font-bold'>274.01₺</Text> 
                <View className='bg-[#F4FFEFCC] rounded-md border-[0.3px] border-[#50A864] px-1'>
                  <Icon name={'arrowGrowth'} width={16} color={'#50A864'}></Icon> 
                </View>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-sm text-subtitle'>10</Text>  
                <Text className='text-sm'>Transactions</Text>  
              </View>
            </Card>

            <Card
              className='flex-1 border-0 bg-[#FFE4E366] gap-2'> 
              <View className='flex-row justify-between'>
                <Text className='text-sm text-[#C41E15] font-bold'>274.01₺</Text> 
                <View className='scale-y-[-1] bg-[#FFE5E6] rounded-md border-[0.3px] border-[#C41E15] px-1'>
                  <Icon color={'#C41E15'} name={'arrowGrowth'} width={16}></Icon> 
                </View>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-sm text-subtitle'>10</Text>  
                <Text className='text-sm'>Transactions</Text>  
              </View>
            </Card>
          </View>
        </Card>
    );
}