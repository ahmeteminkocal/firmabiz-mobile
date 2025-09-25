import { Assets } from '@/assets';
import { Text } from '@/components/atoms/text';
import { SignInForm } from '@/components/auth/SignInForm';
import { Image, ScrollView, View } from 'react-native';
 
export default function SignInScreen() {

  return (
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="flex-grow mt-safe"
      keyboardDismissMode="interactive">
      <View className="flex-1 w-full justify-center items-center gap-8 pt-16">
        <View className='justify-center items-center gap-8 px-8'>
          <Image
            resizeMode="contain"
            source={Assets.logo}
            />
          <View className='items-center gap-2'>
            <Text className='text-xl font-semibold'>
              Welcome to Firmabiz! 👋🏻
            </Text>
            <Text className='text-center'>
              Please log in to your account and start the adventure
            </Text>
          </View>
        </View>
        <SignInForm/>
      </View>
    </ScrollView>
  );
}