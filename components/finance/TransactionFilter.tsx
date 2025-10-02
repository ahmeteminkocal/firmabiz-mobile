import Card from '@/components/atoms/card';
import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { View } from 'react-native';


export default function TransactionFilter() {
    const filters = ['All', 'Success', 'Failed', 'In process'];

    const [selectedFilter, setSelectedFilter] = useState('All');

    return (
        <View className='flex-row justify-center items-center gap-2 pb-2'>
        {filters.map((filter) => (
            <Card 
                key={filter}
                className={cn(
                    'flex-1 justify-center items-center py-2',
                    filter === selectedFilter && 'bg-[#EFF8FF] border border-primary'
                )} 
                onPress={() => setSelectedFilter(filter)}>
                <Text className='text-sm'>{filter}</Text>
            </Card>
        ))}
        </View>
    )
}