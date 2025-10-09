import DetailsCard from '@/components/home/DetailsCard';
import MainAppHeader from '@/components/ui/MainAppHeader';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';

export default function HomeDetailsScreen() {

    const { id } = useLocalSearchParams();
    console.log('Home Details:', id);
    
    return (
        <>
        <MainAppHeader title={'Details'} canGoBack={true}/>
        <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
            <DetailsCard/>
        </ScrollView>
        </>
    )
}