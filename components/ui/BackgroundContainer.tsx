import { ImageBackground, ImageSourcePropType } from "react-native";
import { View } from "react-native";

type BackgroundContainerProps = {
  source: ImageSourcePropType; // your asset image
  className?: string; // extra nativewind classes
  children?: React.ReactNode;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
};

export default function BackgroundContainer({
  source,
  className = "",
  children,
  resizeMode = "cover",
}: BackgroundContainerProps) {
  return (
    <ImageBackground
      source={source}
      resizeMode={resizeMode}
      className={`flex-1 ${className}`}
    >
      <View className="flex-1">{children}</View>
    </ImageBackground>
  );
}