import DetailsCard from '@/components/home/DetailsCard';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function HomeDetailsScreen() {

    const { id } = useLocalSearchParams();
    
    return (
        <View className='flex-1'>
            <View className='flex-1 bg-background px-4 pt-4 gap-2'>
                <DetailsCard/>
            </View>
        </View>
  )
}