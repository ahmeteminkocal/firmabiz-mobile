import React from 'react';
import { View } from 'react-native';
import TableCard from './TableCard';

export function HomeTable(){
    return (
      <View className='flex-1 bg-background px-4 pt-4 gap-2'>
        <TableCard/>
      </View>
    )
}

export default HomeTable
