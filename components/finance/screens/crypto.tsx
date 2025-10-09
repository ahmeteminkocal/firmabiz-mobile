import CryptoCard from '@/components/finance/CryptoCard';
import TransactionFilter from '@/components/finance/TransactionFilter';
import MainAppHeader from '@/components/ui/MainAppHeader';
import { useFinanceStore } from '@/lib/stores/financeStore';
import React from 'react';
import { ScrollView } from 'react-native';

export default function CryptoScreen() {

  const { type } = useFinanceStore();
  
  return (
    <>
      <MainAppHeader title={'Crypto Transaction'}/>
      <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
        <TransactionFilter/> 
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
      </ScrollView>
    </>
  )
}