import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { useAuthStore } from '@/lib/stores/authStore';
import { ScrollView, View } from 'react-native';

 function Profile() {

    const { user, logout } = useAuthStore();
    return (
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="flex-grow mt-safe"
        keyboardDismissMode="interactive">
          <View className="flex-1 w-full justify-center items-center gap-8 pt-16">
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
            <Button variant={'destructive'} onPress={() => logout()}>
              <Text>Logout</Text>
            </Button>
          </View>
      </ScrollView>
    )
}

export default Profile;
