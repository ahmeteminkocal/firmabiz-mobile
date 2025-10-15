import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Text } from '@/components/atoms/text';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { loginSchema } from '@/lib/services/validation';
import { useAuthStore } from '@/lib/stores/authStore';
import { THEME } from '@/lib/theme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import SvgIcon from '../ui/SvgIcon';

export function SignInForm() {

  const router = useRouter();

  const { loading, login } = useAuthStore();
  
  const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(loginSchema)
  });

  const [passwordShown, setPasswordShown] = React.useState<boolean>(false);

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
          <Text className='text-xs text-label'>Password</Text>
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
                  trailing={(<SvgIcon 
                    name= {passwordShown? 'passwordHide': 'passwordShow'} 
                    size={18} 
                    color={THEME.input}
                    onPress={() => setPasswordShown(!passwordShown)}
                  />)}
                  secureTextEntry={!passwordShown}
                  returnKeyType="send"
                />
              </>
              )}
          />

        </View>
        <Button className="w-full" onPress={handleSubmit(async data => {
          await login(
            data, 
            () => {router.push('/(auth)/verify')}
          );
        })}>
          <Text>{loading? 'Loading..' : 'Continue'}</Text>
        </Button>
      </View>
    </View>
  );
}
