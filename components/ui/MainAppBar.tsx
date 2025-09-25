import { Icon } from "@/components/atoms/icon";
import { MAIN_TABS } from "@/lib/constants";
import { THEME } from "@/lib/theme";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function MainAppBar( route : RouteProp<ParamListBase, string>) {
  const title = MAIN_TABS.find((tab) => tab.name === route.name)?.label;

  return (
    <View 
      style={styles.appBar}>
      <Pressable>
        <Icon name="menu" width={24} color={THEME.background} />
      </Pressable>

      <Text style={styles.appBarTitle}>{title}</Text>

      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: THEME.background,
  },
appBarTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
})