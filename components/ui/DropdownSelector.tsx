import { Icon } from "@/components/atoms/icon";
import { Text } from '@/components/atoms/text';
import { THEME } from "@/lib/theme";
import { SelectorProps } from "@/lib/types";
import { TriggerRef } from "@rn-primitives/dropdown-menu";
import { useRef } from "react";
import { Pressable, View } from "react-native";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./DropdownMenu";


export default function DropdownSelector<T>(props : SelectorProps<T>) {

    const menuRef = useRef<TriggerRef>(null);
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen? menuRef.current?.close() : menuRef.current?.open();
    }

    return (
        <DropdownMenu onOpenChange={(open) => isMenuOpen = open}>
            <DropdownMenuTrigger ref={menuRef}>
                <Pressable onPress={toggleMenu} className='border border-input bg-background flex-row justify-between items-center rounded-[5px] px-3 py-2 gap-1'>
                    <Text className="text-sm text-foreground">{props.label}</Text>
                    <Icon name="arrowDown" width={22} height={22} color={THEME.foreground}/>
                </Pressable>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full bg-transparent">
                <View className="bg-background mx-8 border border-border rounded-[6px] mt-1.5 gap-1 p-1">
                    {props.items.map((item) => (
                        <DropdownMenuItem 
                            key={props.keyExtractor(item)} 
                            closeOnPress={false}
                            className="active:bg-splash" onPress={() => {
                                props.onChange(item);
                                menuRef.current?.close();
                            }}>
                            <Text>{props.valueExtractor(item)}</Text>
                        </DropdownMenuItem>
                    ))}
                </View>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}