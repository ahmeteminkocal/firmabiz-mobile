import React from 'react';
import { ScrollView } from 'react-native';
import TableCard from './TableCard';

export function HomeTable(){
    return (
      <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
      </ScrollView>
    )
}

export default HomeTable
