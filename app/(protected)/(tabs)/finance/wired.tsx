import { DetailsAccordionView } from '@/components/finance/DetailsAccordionView';
import TransactionFilter from '@/components/finance/TransactionFilter';
import WiredCard from '@/components/finance/WiredCard';
import MainAppHeader from '@/components/ui/MainAppHeader';
import React from 'react';
import { ScrollView } from 'react-native';

export default function WiredScreen() {

  return (
    <>
      <MainAppHeader title={'Wired Transaction'}/>
      <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
        <TransactionFilter/>  
        <DetailsAccordionView/>
        <WiredCard/>
        <WiredCard/>
        <WiredCard/>
        <WiredCard/>
        <WiredCard/>
        <WiredCard/>
        <WiredCard/>
        <WiredCard/>
      </ScrollView>
    </>
  )
}