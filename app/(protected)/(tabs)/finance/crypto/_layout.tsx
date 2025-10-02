import { Stack } from 'expo-router'

export default function CryptoLayout() {
    return (
      <>
        <Stack
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="details/[id]" />
        </Stack>
      </>
    )
}