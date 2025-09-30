
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import { BOTTOM_TAB_BAR_HEGHT, MAIN_TABS } from '@/lib/constants';
import { THEME } from '@/lib/theme';
import { BottomTabBarProps, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, NavigationRoute, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from "react-native";
import Animated, { FadeInLeft, FadeInRight, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BottomTabBar({ state, navigation }: BottomTabBarProps) {

  const insets = useSafeAreaInsets();
  
  
  const [ currentTab , setCurrentTab ] = useState(0);

  
  return (
      <View 
        style={[styles.tabBar, {paddingBottom: insets.bottom}]}
      >
        {state.routes.map((route, index) => {
          
          return  (
            <TabItem 
              key={route.key}
              state={state} 
              navigation={navigation} 
              index={index} 
              route={route}/>
          );
        })}
      </View>
      
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: THEME.background,
    paddingTop: 24,
    height: BOTTOM_TAB_BAR_HEGHT,
    
    shadowColor: THEME.foreground, 
    shadowOffset: { width: 0, height: -3 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 12,
  },
  roundedButton: {
    backgroundColor: THEME.secondary,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  roundedText: {
    color: THEME.background,
    fontSize: 12,
    fontWeight: 600
  },
  topShadow: {
    shadowColor: "#23004C0D",
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 12,
    elevation: 5,
  }
});

const TabItem = ({state, navigation, route, index} : TabProps) => {

  const [ bottomSheetVisible , setBottomSheetVisible] = useState(false);
  const [ tabPressed , setTabPressed ] = useState(false);

  const isFocused = state.index === index;

  const tabNavigate = () => {
    setBottomSheetVisible(false);
    setTabPressed(false);
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true
    });
    if (!isFocused && !event.defaultPrevented) {
      setAnimation(state.index < index? leftAnimation : rightAnimation);
      navigation.navigate(route.name as never);
    }
  }

  const [animation,  setAnimation] = useState<FadeInLeft | FadeInRight>();

  const leftAnimation = FadeInLeft.duration(300);
  const rightAnimation = FadeInRight.duration(300);


  if(isFocused) {
    return (
      <Pressable onPress={tabNavigate}>
        <Animated.View 
          style={[styles.roundedButton]}
          entering={animation} 
          exiting={FadeOut.duration(50)}>
          <Icon
            name={MAIN_TABS[index].icon.name}
            width={22}
            color={THEME.background}
          />
          {isFocused && <Text style={styles.roundedText}>{MAIN_TABS[index].label}</Text>}
        </Animated.View>
      </Pressable>
    )
  }
  return  (
    <Pressable onPress={tabNavigate} style={{paddingHorizontal: 16, paddingVertical: 5}}>
      <Icon
        name={MAIN_TABS[index].icon.name}
        width={22}
        color={tabPressed? THEME.secondary : THEME.foreground}
      />
    </Pressable>
  );
}

type TabProps = {
  state: TabNavigationState<ParamListBase>, 
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>, 
  route: NavigationRoute<ParamListBase, string>
  index: number, 
};