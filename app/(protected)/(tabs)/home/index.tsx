import HomeSummary from '@/components/home/HomeSummary';
import HomeTable from '@/components/home/HomeTable';
import HomeTabsHeader from '@/components/home/HomeTabsHeader';
import { useAppHeader } from '@/lib/hooks/useAppHeader';
import { HomeTab } from '@/lib/types';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function HomeScreen() {

  const [activeTab, setActiveTab] = useState<HomeTab>(HomeTab.Summary);

  useAppHeader({ title: "Home" , bottom: false });


  return (
    <View className='flex-1'>
      <HomeTabsHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === HomeTab.Table? 
        <HomeTable/>
      : 
        <HomeSummary/>
      }
    </View>
  )
}