import BottomTabBar from "@/components/ui/BottomTabBar";
import { Tabs } from "expo-router";
import { View } from "react-native";


export default function TabsLayout() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 mt-safe">
        <Tabs
          tabBar={(props) => 
            <BottomTabBar {...props} />
          }        
          screenOptions={{
            headerShown: false, 
          }}>
          <Tabs.Screen name="home"/>
          <Tabs.Screen name="finance"/>
          <Tabs.Screen name="management"/> 
          <Tabs.Screen name="platform"/> 
          <Tabs.Screen name="logs"/> 
        </Tabs>
      </View>
    </View>
  );
}