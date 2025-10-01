import { Assets } from '@/assets';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Text } from '@/components/atoms/text';
import { emailSchema } from '@/lib/services/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Image, ScrollView, View } from 'react-native';

 
export default function ResetPasswrdEmailScreen() {
    const router = useRouter();

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(emailSchema)
    });
    
  return (
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="mt-safe flex-grow"
      keyboardDismissMode="interactive">
      <View className="flex-1 w-full justify-center items-center gap-8 pt-16">
        <View className='justify-center items-center gap-8 px-8'>
          <Image
            resizeMode="contain"
            source={Assets.logo}
            width={100}
          />
          <View className='items-center gap-2'>
            <Text className='text-xl text-label font-medium'>
              Reset Password 🔒
            </Text>
            <Text className='text-center text-sm text-label'>
              {' '}
            </Text>
          </View>
        </View>
        <View className='flex-1 rounded-t-[35px] bg-background w-full self-stretch gap-6 p-8 shadow-custom'>
            <View className="gap-1.5">
                <Text className='text-xs text-label'>Email</Text>
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
            <Button className="w-full" onPress={handleSubmit(async data => {
                  router.push({pathname: '/(auth)/reset-password/[email]', params: { email: data.email }});
              })}>
              <Text>Send</Text>
            </Button>
            <Button
                variant={'link'}
                className='p-0'
                onPress={() => {
                    router.back()
                }}>
                    <Text className='text-sm font-bold'> Back to log in</Text>
            </Button>
        </View>
      </View>
    </ScrollView>
  );
}