import '@/global.css';

import { toastConfig } from '@/components/atoms/toast';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export default function RootLayout() {

  return (
    <GestureHandlerRootView>
        <StatusBar  style='dark'/>
        <Stack 
          screenOptions={{headerShown: false}}
          />
        <Toast config={toastConfig} />
        <PortalHost />
    </GestureHandlerRootView>
  );
}
