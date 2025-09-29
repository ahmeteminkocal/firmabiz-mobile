
import BottomSheet from '@/components/atoms/bottomsheet';
import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import { AccordionView } from '@/components/ui/AccordionView';
import { BOTTOM_TAB_BAR_HEGHT, MAIN_TABS } from '@/lib/constants';
import { THEME } from '@/lib/theme';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from 'react';
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BottomTabBar({ state, navigation }: BottomTabBarProps) {

  const insets = useSafeAreaInsets();
  
  const [ bottomSheetVisible , setBottomSheetVisible] = useState(false);
  const [ tabPressed , setTabPressed ] = useState(false);
  
  return (
    <>
      <View style={[styles.tabBar, {paddingBottom: insets.bottom}]}>
        {state.routes.map((route, index) => {
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
              navigation.navigate(route.name as never);
            }
          }
          return  (
            <TabItem 
              key={route.key} 
              isPressed={index === 1 && tabPressed}
              tabNavigate={
                index === 1? 
                () => {
                  if(!isFocused) {
                    setTabPressed(!tabPressed)
                  }
                  setBottomSheetVisible(!bottomSheetVisible);
                } 
                : tabNavigate} 
              isFocused={isFocused} 
              index={index}/>
          );
        })}
      </View>
      <BottomSheet
        visible={bottomSheetVisible}
        setVisible={setBottomSheetVisible}
        builder={(<AccordionView/>)}
      />
    </>
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
    // shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 5,
  }
});

const TabItem = ({tabNavigate, isFocused, isPressed, index} : TabProps) => {
  return  (
    <Pressable
      onPress={tabNavigate}
      style={[styles.roundedButton, isFocused && {
        backgroundColor: THEME.secondary,
    }]}>
      <Icon
        name={MAIN_TABS[index].icon.name}
        width={22}
        color={isFocused? THEME.background : isPressed? THEME.secondary : THEME.foreground}
      />
      {isFocused && <Text style={styles.roundedText}>{MAIN_TABS[index].label}</Text>}
    </Pressable>
  );
}

type TabProps = {
  tabNavigate: () => void, 
  isFocused: boolean, 
  isPressed: boolean,
  index: number
};