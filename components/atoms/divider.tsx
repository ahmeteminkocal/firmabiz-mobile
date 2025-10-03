import { THEME } from "@/lib/theme";
import { View } from "react-native";
import { Line, Svg } from 'react-native-svg';

export function Divider({color} : {color?: string}) {
    return <View style={{
        borderBottomColor: color?? THEME.splash,
        borderBottomWidth: 0.5,
    }}/>;
}


export function DashedDivider() {
  return (
    <View className="py-1">
        <Svg height="1" width="100%">
            <Line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke={THEME.subtitle}
                strokeWidth="0.5"
                strokeDasharray="8,10"  // 8 = dash length, 4 = gap
            />
        </Svg>
    </View>
  );
}