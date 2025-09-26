import { BOTTOM_TAB_BAR_HEGHT } from '@/lib/constants';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface BottomSheetParams {
  builder: React.ReactElement,
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const BottomSheet = ({builder, visible, setVisible}: BottomSheetParams) => {
  if (!visible) return null;

  return (
    <View style={[StyleSheet.absoluteFill, {paddingBottom: 94}]} pointerEvents="box-none">
      {/* Overlay */}
      <Pressable
        style={styles.overlay}
        onPress={() => setVisible(false)}
      />

      {/* Bottom sheet */}
      <Animated.View style={styles.sheetContainer} entering={FadeInDown.duration(100)}>
        {builder}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sheetContainer: {
    position: 'absolute',
    bottom: BOTTOM_TAB_BAR_HEGHT, // stop above the tab bar
    width: '100%',
  },
});

export default BottomSheet;