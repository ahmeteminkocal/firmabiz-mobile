import Card from '@/components/atoms/card';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function TableCard() {
  
  const router = useRouter();

    return (
        <Card className='gap-2' onPress={() => {router.push('/(protected)/(tabs)/home/details/1')}}>
          <View className='flex-row justify-between'>
            <View className='flex-row items-center gap-2'>
                <Text className='font-bold'>Rami malk</Text>
                <Card
                    className='flex-row justify-center items-center border-0 bg-[#CAE7FF99] px-1 py-0.5'> 
                    <Text className='text-xs text-[#5076A8]'>706,160,967.9 ₺</Text>  
                </Card>
            </View>
            <Icon name='arrowRight' height={28} width={28} color='black'></Icon>
          </View>
          <View className='flex-row gap-3'>
            <Card
              className='flex-1 border-0 bg-[#E9F7F099] gap-1'> 
              <Text className='text-[#50A864] text-sm font-semibold'>980.173.867.9₺</Text>  
              <View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm'>Qty</Text>  
                  <Text className='text-sm text-subtitle'>111.273.094.23₺</Text>  
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm'>Piece</Text>  
                  <Text className='text-sm text-subtitle'>82</Text>  
                </View>
              </View>
            </Card>
            <Card
              className='flex-1 border-0 bg-[#FFE4E366] gap-1'>
              <Text className='text-[#C41E15] text-sm font-semibold'>274.012.900.0₺</Text>  
              <View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm'>Qty</Text>  
                  <Text className='text-sm text-subtitle'>375.980.649.01₺</Text>  
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm'>Piece</Text>  
                  <Text className='text-sm text-subtitle'>82</Text>  
                </View>
              </View>
            </Card>
          </View>
        </Card>
    );
}