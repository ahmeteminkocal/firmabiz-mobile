import Card from '@/components/atoms/card';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import React from 'react';
import { View } from 'react-native';

export function HomeSummaryTab(){
    return (
      <View className='flex-1 bg-background px-4 pt-4 gap-2'>
        <Card className='gap-2'>
          <View className='flex-row justify-between'>
            <Text className='font-bold'>Rami malk</Text>
            <Icon name='arrowRight' height={28} width={28} color='black'></Icon>
          </View>
          <View className='flex-row gap-3'>
            <Card
              className='flex-1 border-0 bg-[#E9F7F099] gap-2'> 
              <Text className='text-[#50A864] font-bold'>274.01₺</Text>  
              <View>
                <View className='flex-row justify-between'>
                  <Text>Quantity</Text>  
                  <Text className='text-subtitle'>274.01₺</Text>  
                </View>
                <View className='flex-row justify-between'>
                  <Text>Piece</Text>  
                  <Text className='text-subtitle'>82</Text>  
                </View>
              </View>
            </Card>
            <Card
              className='flex-1 border-0 bg-[#FFE4E366] gap-2'>
              <Text className='text-[#C41E15] font-bold'>274.01₺</Text>  
              <View>
                <View className='flex-row justify-between'>
                  <Text>Quantity</Text>  
                  <Text className='text-subtitle'>274.01₺</Text>  
                </View>
                <View className='flex-row justify-between'>
                  <Text>Piece</Text>  
                  <Text className='text-subtitle'>82</Text>  
                </View>
              </View>
            </Card>
          </View>
          <Card
            className='flex-row border-0 bg-[#CAE7FF99]'> 
            <Text className='text-[#5076A8] font-bold'>1.00 ₺</Text>  
          </Card>
        </Card>

        <Card className='gap-2'>
          <Text className='font-bold'>Rami malk</Text>
          <View className='flex-row gap-3'>
            <Card
              className='flex-1 border-0 bg-[#E9F7F099] gap-2'> 
              <View className='flex-row justify-between'>
                <Text className='text-[#50A864] font-bold'>274.01₺</Text> 
                <View className='bg-[#F4FFEFCC] rounded-md border-[0.3px] border-[#50A864] px-1'>
                  <Icon name={'arrowGrowth'} width={16} color={'#50A864'}></Icon> 
                </View>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-subtitle'>10</Text>  
                <Text>Transactions</Text>  
              </View>
            </Card>

            <Card
              className='flex-1 border-0 bg-[#FFE4E366] gap-2'> 
              <View className='flex-row justify-between'>
                <Text className='text-[#C41E15] font-bold'>274.01₺</Text> 
                <View className='scale-y-[-1] bg-[#FFE5E6] rounded-md border-[0.3px] border-[#C41E15] px-1'>
                  <Icon color={'#C41E15'} name={'arrowGrowth'} width={16}></Icon> 
                </View>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-subtitle'>10</Text>  
                <Text>Transactions</Text>  
              </View>
            </Card>
          </View>
        </Card>
      </View>
    )
}

export default HomeSummaryTab
