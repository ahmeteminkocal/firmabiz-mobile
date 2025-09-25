import { Text } from '@/components/atoms/text';
import { THEME } from "@/lib/theme";
import { HomeTab } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Pressable, View } from "react-native";
import { Icon } from "../atoms/icon";
import FileDownloadButton from "./FileDownloadButton";

type Props = {
  activeTab: HomeTab;
  setActiveTab: React.Dispatch<React.SetStateAction<HomeTab>>;
};

export default function HomeTabsHeader({activeTab, setActiveTab}: Props) {

  return (
    <View className="flex-row justify-between items-center pt-4 px-4 bg-accent border-b border-stroke">
      <View className="flex-row gap-6">
        {[HomeTab.Summary, HomeTab.Table].map((tab) => (
          <Pressable key={tab} onPress={() => setActiveTab(tab)}>
            <View className={cn("items-center pb-2 px-1", activeTab === tab && "border-b-2 border-primary")}>
              <Text
                className={`text-lg font-medium ${
                  activeTab === tab ? "text-foreground font-semibold" : "text-subtitle"
                }`}
              >
                {tab}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View className="flex-row gap-4">
        <Pressable>
          <Icon name='calculator' width={24} color={THEME.foreground} />
        </Pressable>
        <FileDownloadButton/>
        <Pressable>
          <Icon name='filter' width={24} color={THEME.foreground} />
        </Pressable>
      </View>
    </View>
  );
}