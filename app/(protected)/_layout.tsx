import { useAuthStore } from '@/lib/stores/authStore';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function ProtectedLayout() {

    const { user } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
      if(!user) {
        router.dismissAll();
        router.push('/(auth)/signin');
      }
    }, [user])
    return (
      <>
        <Stack
            screenOptions={{headerShown: false}}
        />
      </>
    )
}