import { THEME } from "@/lib/theme";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MainAppHeader( {title, bottom = true} : {title: string, bottom: boolean}) {
  return (
    <View 
      className={bottom? "border-b border-stroke" : ""}
      style={styles.appBar}>
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