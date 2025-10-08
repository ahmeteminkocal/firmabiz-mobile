import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import { BOTTOM_TAB_BAR_HEGHT, MAIN_TABS } from '@/lib/constants';
import { THEME } from '@/lib/theme';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { Href, useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Animated, { FadeIn, LinearTransition, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet from '../atoms/bottomsheet';
import { FinanceAccordionView } from './FinanceAccordionView';

export default function BottomTabBar({ state }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [translateX, setTranslateX] = useState<number>(TAB_ANIMATION_SIZE);
  const [duration, setDuration] = useState<number>(ANIMATION_DURATION);
  const router = useRouter();

  const tabNavigate = (index: number, screen?: Href) => {
    if(!screen) {
      setBottomSheetVisible(!bottomSheetVisible);
      return;
    }

    const isFocused = state.index === index;
    if (!isFocused) {
      setTranslateX(TAB_ANIMATION_SIZE * (state.index - index));
      setDuration(ANIMATION_DURATION + 20 * Math.abs(state.index - index));
    }
    router.push(screen)
  };

  return (
    <>
      <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
        {state.routes.map((route, index) => (
          <TabItem
            key={route.key}
            state={state}
            index={index}
            tabNavigate={tabNavigate}
            duration={duration}
            translateX={translateX}
          />
        ))}
      </View>
      <BottomSheet
        visible={bottomSheetVisible}
        setVisible={setBottomSheetVisible}
        builder={(
          <FinanceAccordionView
            onSelect={(section, type) => {
              tabNavigate(1, '/(protected)/(tabs)/finance/wired/w'); 
              setBottomSheetVisible(false);
            }}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: BOTTOM_TAB_BAR_HEGHT,
    backgroundColor: THEME.background,
    paddingTop: 24,
    paddingHorizontal: 32,
    gap: 0,
    shadowColor: THEME.foreground,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 16,
  },
  roundedButton: {
    backgroundColor: THEME.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 25,
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  roundedText: {
    color: THEME.background,
    fontSize: 12,
    fontWeight: '500',
  },
});

type TabProps = {
  state: TabNavigationState<ParamListBase>;
  index: number;
  tabNavigate: (index: number, screen?: Href) => void;
  translateX: number;
  duration: number;
};

const TabItem = ({ state, index, tabNavigate, translateX, duration }: TabProps) => {
  const [tabPressed, setTabPressed] = useState(false);
  const isFocused = state.index === index;

  const CustomSlideIn = () => {
    'worklet';
    const animations = {
      transform: [{
        translateX: withTiming(0, { duration }),
      }],
    };
    const initialValues = {
      transform: [{ translateX }],
    };
    return { initialValues, animations };
  };

  return isFocused ? (
    <Pressable onPress={() => tabNavigate(index)} style={{ zIndex: 10 }}>
      <Animated.View style={[styles.roundedButton]} entering={CustomSlideIn}>
        <Icon
          name={MAIN_TABS[index].icon.name}
          width={18}
          color={THEME.background}
        />
        <Text style={styles.roundedText}>{MAIN_TABS[index].label}</Text>
      </Animated.View>
    </Pressable>
  ) : (
    <Animated.View
      style={{ zIndex: 1 }}
      entering={FadeIn.duration(ANIMATION_DURATION)}
      layout={LinearTransition.duration(ANIMATION_DURATION)}
    >
      <Pressable onPress={() => tabNavigate(index)} style={{ paddingVertical: 5 }}>
        <Icon
          name={MAIN_TABS[index].icon.name}
          width={22}
          color={tabPressed ? THEME.secondary : THEME.foreground}
        />
      </Pressable>
    </Animated.View>
  );
};

const TAB_ANIMATION_SIZE = Dimensions.get('window').width / 9;
const ANIMATION_DURATION = 250;