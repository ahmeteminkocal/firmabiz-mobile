import Card from '@/components/atoms/card';
import { Text } from '@/components/atoms/text';
import React from 'react';
import { View } from 'react-native';

export function HomeTableTab(){
    return (
      <View className='flex-1 bg-background px-4 pt-4 gap-1'>
        <Card className='gap-2'>
            <Text className='font-bold'>Paypal</Text>
            <Card
              className='flex-row w-full items-center border-0 bg-[#F0F0F073]'> 
              <View className='flex-none items-start gap-[2px]'> 
                <Text></Text>  
                <Text className='font-bold'>Total</Text>  
                <Text>Quantity</Text>  
                <Text>Piece</Text>  
              </View>
              <View className='flex-1 justify-center items-end gap-[2px]'> 
                <Text className='font-medium'>Deposit</Text>  
                <Text className='font-bold text-[#50A864]'>520.75₺</Text>  
                <Text className='text-[#7C7C7C]'>390.25₺</Text>  
                <Text className='text-[#7C7C7C]'>125</Text>  
              </View>
              <View className='flex-1 justify-center items-end gap-[2px]'> 
                <Text className='font-medium'>Withdrawal</Text>  
                <Text className='font-bold text-[#C41E15]'>520.75₺</Text>  
                <Text className='text-[#7C7C7C]'>390.25₺</Text>  
                <Text className='text-[#7C7C7C]'>125</Text>  
              </View>
            </Card>
              
            
        </Card>
      </View>
    )
}

export default HomeTableTab
