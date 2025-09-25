import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { useColorScheme } from 'nativewind';
import { Image, View } from 'react-native';
import { Separator } from '../atoms/separator';

const SOCIAL_CONNECTION_STRATEGIES = [
  {
    type: 'oauth_apple',
    source: { uri: 'https://img.clerk.com/static/apple.png?width=160' },
    useTint: true,
  },
  {
    type: 'oauth_google',
    source: { uri: 'https://img.clerk.com/static/google.png?width=160' },
    useTint: false,
  },
  {
    type: 'oauth_github',
    source: { uri: 'https://img.clerk.com/static/github.png?width=160' },
    useTint: true,
  },
];

export function SocialConnections() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="gap-4 sm:flex-row sm:gap-3">
      
      <View className="flex-row items-center">
        <Separator className="flex-1" />
        <Text className="text-muted-foreground px-4 text-sm">or</Text>
        <Separator className="flex-1" />
      </View>
      {SOCIAL_CONNECTION_STRATEGIES.map((strategy) => {
        return (
          <Button
            key={strategy.type}
            variant="outline"
            className="sm:flex-1"
            onPress={() => {
              // TODO: Authenticate with social provider and navigate to protected screen if successful
            }}>
            <Image
              className='size-4'
              tintColor={strategy.useTint ? (colorScheme === 'dark' ? 'white' : 'black') : undefined}
              source={strategy.source}
            />
          </Button>
        );
      })}
    </View>
  );
}
