import DetailsCard from '@/components/home/DetailsCard';
import { useAppHeader } from '@/lib/hooks/useAppHeader';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';

export default function HomeDetailsScreen() {

    const { id } = useLocalSearchParams();

    useAppHeader({ title: `Payment details ${id}`, bottom: true });
    
    return (
        <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
            <DetailsCard/>
        </ScrollView>
    )
}