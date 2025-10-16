import { Text } from '@/components/atoms/text';
import { useAuthStore } from '@/lib/stores/authStore';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function SplashScreen() {

    const router = useRouter();
    const { isAuthenticated, loading } = useAuthStore();

    useEffect(() => {
      isAuthenticated(
        () => setTimeout(() => router.push('/(protected)/(tabs)/home'), 2000),
        () => setTimeout(() => router.push('/(auth)/signin'), 2000)
      );
    }, []);

    return (
      <View className="flex-1 w-full justify-center items-center gap-8 pt-16">
          <Text className='text-xl font-bold text-foreground'>
            Splash Screen
          </Text>
      </View>
    )
}

