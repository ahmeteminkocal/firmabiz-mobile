import { Stack } from 'expo-router'

export function ProtectedLayout() {
    return (
      <>
        <Stack
            screenOptions={{headerShown: false}}
        />
      </>
    )
}

export default ProtectedLayout
