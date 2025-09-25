import HomeTabsHeader from '@/components/home/HomeTabsHeader';
import React, { useState } from 'react'
import { View } from 'react-native'
import HomeSummaryTab from '@/components/home/HomeSummaryTab';
import HomeTableTab from '@/components/home/HomeTableTab';
import { HomeTab } from '@/lib/types';

function Home() {

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

export default Home;
