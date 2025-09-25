import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Text } from '@/components/atoms/text';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Pressable, View } from 'react-native';

import { loginSchema } from '@/lib/services/validation';
import { useAuthStore } from '@/lib/stores/authStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox } from '../atoms/checkbox';

export function SignInForm() {

  const router = useRouter();

  const { loading, error, login } = useAuthStore();
  
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
      resolver: yupResolver(loginSchema)
  });

  const [rememberMe, setRememberMe] = React.useState<boolean>(false);

  return (
    <View className="flex-1 rounded-t-[35px] bg-background w-full self-stretch gap-6 p-8">
      <View className="gap-6">
        <View className="gap-1.5">
          <Text>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
            <>
              <Input
                id="email"
                value={value}
                onChangeText={onChange}
                placeholder="m@example.com"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                submitBehavior="submit"
              />
              {errors.email && <Text className='text-sm text-destructive'>{errors.email.message}</Text>}
            </>
          )}
        />
        </View>
        <View className="gap-1.5">
          <View className="flex-row justify-between items-center">
            <Text>Password</Text>
            <Button
              variant="link"
              className="ml-auto h-4 px-1 py-0 sm:h-4"
              onPress={() => {
                router.canGoBack()? router.back() : null
              }}>
              <Text className="font-normal leading-4">Forgot your password?</Text>
            </Button>
          </View>

          <Controller
            control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
              <>
                <Input
                  id="password"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  returnKeyType="send"
                />
                {errors.password && <Text className='text-sm text-destructive'>{errors.password.message}</Text>}
              </>
              )}
          />

        </View>
        <Checkbox
          title={'Remember Me'}
          checked={rememberMe}
          onCheckedChange={setRememberMe}
        />
        <Button className="w-full" onPress={handleSubmit(async data => {
          await login(data);
          router.push('/(auth)/verify')
        })}>
          <Text>{loading? 'Loading' : 'Continue'}</Text>
        </Button>
      </View>
      <View className='flex flex-row justify-center items-center'>
        <Text className="text-center text-sm">
          Don&apos;t have an account?{' '}
        </Text>
        <Pressable
          onPress={() => {
            // TODO: Navigate to sign up screen
          }}>
          <Text 
          className="text-sm underline underline-offset-4"
          >
            Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
