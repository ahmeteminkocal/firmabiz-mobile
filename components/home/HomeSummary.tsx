import React from 'react';
import { View } from 'react-native';
import SummaryCard from './SummaryCard';

export function HomeSummary(){
    return (
      <View className='flex-1 bg-background px-4 pt-4 gap-1'>
        <SummaryCard/>
      </View>
    )
}

export default HomeSummary
