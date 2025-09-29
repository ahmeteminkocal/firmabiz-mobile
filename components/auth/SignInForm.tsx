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
    <View className="flex-1 rounded-t-[35px] bg-background w-full self-stretch gap-6 p-8 shadow-custom">
      <View className="gap-6">
        <View className="gap-1.5">
          <Text className='text-xs text-label'>Email or username</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
            <>
              <Input
                id="email"
                value={value}
                onChangeText={onChange}
                error={errors.email?.message}
                placeholder="m@example.com"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                submitBehavior="submit"
              />
            </>
          )}
        />
        </View>
        <View className="gap-1.5">
          <View className="flex-row justify-between items-center">
            <Text className='text-xs text-label'>Password</Text>
            <Pressable
              onPress={() => {
                router.canGoBack()? router.back() : null
              }}>
              <Text className='text-xs text-primary'>Forgot your password?</Text>
            </Pressable>
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
                  error={errors.password?.message}
                  secureTextEntry
                  returnKeyType="send"
                />
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
      <View className='flex flex-row justify-center items-center gap-0'>
        <Text className="text-center text-xs">
          Are you new to the platform?{'  '}
        </Text>
        <Button
          variant={'link'}
          className='p-0'
          onPress={() => {
            // TODO: Navigate to sign up screen
          }}>
            <Text className='text-xs'>Create an account</Text>
        </Button>
      </View>
    </View>
  );
}
