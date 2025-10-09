import { Stack } from 'expo-router'

export default function FinanceLayout() {
    return (
      <>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" />
          <Stack.Screen name="crypto-details/[id]" />
        </Stack>
      </>
    )
}