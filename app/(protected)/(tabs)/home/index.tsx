import HomeSummary from '@/components/home/HomeSummary';
import HomeTable from '@/components/home/HomeTable';
import HomeTabsHeader from '@/components/home/HomeTabsHeader';
import MainAppHeader from '@/components/ui/MainAppHeader';
import { HomeTab } from '@/lib/types';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function HomeScreen() {

  const [activeTab, setActiveTab] = useState<HomeTab>(HomeTab.Summary);

  return (
    <>
      <MainAppHeader title={'Home'} separated={false}/>
      <View className='flex-1'>
        <HomeTabsHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        {activeTab === HomeTab.Table? 
          <HomeTable/>
          : 
          <HomeSummary/>
        }
      </View>
    </>
  )
}