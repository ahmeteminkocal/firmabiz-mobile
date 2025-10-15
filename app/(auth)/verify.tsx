import { Assets } from '@/assets';
import { Text } from '@/components/atoms/text';
import { VerifyEmailForm } from '@/components/auth/VerifyEmailForm';
import BackgroundContainer from '@/components/ui/BackgroundContainer';
import { Image, ScrollView, View } from 'react-native';

 
export default function VerifyScreen() {
  return (
    <BackgroundContainer source={Assets.authBackground}>
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
                Verify
              </Text>
              <Text className='text-center text-sm text-label'>
                A code was sent to you
              </Text>
            </View>
          </View>
          <VerifyEmailForm />
        </View>
      </ScrollView>
    </BackgroundContainer>
  );
}