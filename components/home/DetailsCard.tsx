import Card from '@/components/atoms/card';
import { Text } from '@/components/atoms/text';
import React from 'react';
import { View } from 'react-native';

export default function DetailsCard(){
    return (
        <Card className='flex-row w-full items-center'>
            <View className='flex-none items-start gap-0.5'> 
                <Text className='text-sm font-bold text-black'>Paypal</Text> 
                <Text className='text-sm'>Total</Text>  
                <Text className='text-sm'>Quantity</Text>  
                <Text className='text-sm'>Piece</Text>  
            </View>
            <View className='flex-1 justify-center items-end gap-0.5'> 
                <Text className='text-sm font-medium'>Deposit</Text>  
                <Text className='text-sm font-bold text-[#50A864]'>520.75₺</Text>  
                <Text className='text-sm text-[#7C7C7C]'>390.25₺</Text>  
                <Text className='text-sm text-[#7C7C7C]'>125</Text>  
            </View>
            <View className='flex-1 justify-center items-end gap-0.5'> 
                <Text className='text-sm font-medium'>Withdrawal</Text>  
                <Text className='text-sm font-bold text-[#C41E15]'>520.75₺</Text>  
                <Text className='text-sm text-[#7C7C7C]'>390.25₺</Text>  
                <Text className='text-sm text-[#7C7C7C]'>125</Text>  
            </View>                
        </Card>
    )
}
