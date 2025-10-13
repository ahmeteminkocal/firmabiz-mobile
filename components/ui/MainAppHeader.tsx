import { THEME } from "@/lib/theme";
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "../atoms/icon";

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  canGoBack?: boolean;
  withAvatar?: boolean;
  separated?: boolean;
};


export default function MainAppHeader( {
  title,
  subtitle,
  canGoBack = false,
  withAvatar = true,
  separated = true,
} : AppHeaderProps) {

  const router = useRouter();

  const showBackButton:boolean | undefined = 
    canGoBack && 
    router.canGoBack();

  return (
    <Stack.Screen 
      options={{
        headerShown: true, 
        header: () => (
          <View 
            className={separated? 'border-b border-stroke' : ''}
            style={styles.appBar}>

            <View className="flex-row items-center gap-2">
              {showBackButton && <Icon name="arrowLeft" color={'black'} width={28} height={28} onPress={() => router.back()}/>}
              <View className="flex-row items-end gap-1">
                <Text style={styles.appBarTitle}>{title}</Text>
                {subtitle && <Text style={styles.appBarSubtitle}>{subtitle}</Text>}
              </View>
            </View>

            {withAvatar? 
              <Image
                source={{ uri: "https://i.pravatar.cc/100" }}
                style={styles.avatar}
              /> 
              : <></>}
          </View>
          
        )
      }}/>
    )
}

const styles = StyleSheet.create({
appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
    backgroundColor: THEME.background,
  },
appBarTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
appBarSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: THEME.subtitle,
  },
avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
})