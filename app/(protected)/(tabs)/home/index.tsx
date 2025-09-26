import HomeSummaryTab from '@/components/home/HomeSummaryTab';
import HomeTableTab from '@/components/home/HomeTableTab';
import HomeTabsHeader from '@/components/home/HomeTabsHeader';
import { HomeTab } from '@/lib/types';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function HomeScreen() {

  const [activeTab, setActiveTab] = useState<HomeTab>(HomeTab.Summary);

  return (
    <View className='flex-1'>
      <HomeTabsHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === HomeTab.Table? 
        <HomeTableTab/>
      : 
        <HomeSummaryTab/>
      }
    </View>
  )
}