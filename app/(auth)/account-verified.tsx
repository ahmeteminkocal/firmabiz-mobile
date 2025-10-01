import { Assets } from '@/assets';
import { Text } from '@/components/atoms/text';
import { Image, ScrollView, View } from 'react-native';

 
export default function AccontVerifiedScreen() {
  return (
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="mt-safe flex-start"
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
              Verify your email ✉️
            </Text>
            <Text className='text-center text-sm text-label'>
              Account activation link sent to your email address: hello@example.com Please follow the link inside to continue.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}