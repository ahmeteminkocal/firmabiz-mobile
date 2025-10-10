import { Text } from '@/components/atoms/text';
import { THEME } from "@/lib/theme";
import { cn } from '@/lib/utils';
import { Pressable } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";
import { Switch } from "./switch";

type SwitchParams = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label: string
}

export default function SwitchCard(params: SwitchParams) {

    const progress = useDerivedValue(
        () => (params.checked ? withTiming(1, { duration: 100 }) : withTiming(0, { duration: 100 })),
        [params.checked]
    );
    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                progress.value,
                [0, 1],
                [THEME.background, THEME.activeBackground]
            ),
            borderColor: interpolateColor(
                progress.value,
                [0, 1],
                [THEME.stroke, THEME.active]
            ),
        };
    });
    return (
        <Pressable onPress={() => params.onCheckedChange(!params.checked)}>
            <Animated.View style={animatedStyle} className='flex-row justify-between items-center px-3 py-2 gap-2 border rounded-[4px]'>
                <Text className={cn('text-xs text-subtitle font-medium', params.checked && 'text-[#2C813F]')}>
                    {params.label}
                </Text>
                <Switch checked={params.checked} onCheckedChange={params.onCheckedChange}/>
            </Animated.View>
        </Pressable>
    )
}