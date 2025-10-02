import MainAppHeader from '@/components/ui/MainAppHeader';
import React from 'react';
import { View } from 'react-native';

export default function CryptoScreen() {

  return (
    <>
      <MainAppHeader title={'Crypto Transaction'}/>
      <View className='flex-1 bg-background'></View>
    </>
  )
}