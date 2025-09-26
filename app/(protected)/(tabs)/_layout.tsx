import BottomTabBar from "@/components/ui/BottomTabBar";
import MainAppBar from "@/components/ui/MainAppBar";
import { MAIN_TABS } from "@/lib/constants";
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
          {MAIN_TABS.map((tab) => {
            return (
                <Tabs.Screen
                  key={tab.name}
                  name={tab.name}
                  options={({ route }) => {
                    const { key, ...rest } = route;
                    return {
                    headerShown: true,
                    header: () => (
                      <MainAppBar 
                        key={key}
                        { ...rest}
                      />
                    ),
                  }}}
                />
            );
          })}
        </Tabs>
      </View>
    </View>
  );
}