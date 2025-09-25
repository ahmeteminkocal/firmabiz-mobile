import { cn } from "@/lib/utils";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

interface CustomToastProps {
  text1: string;
  props: {color: string}
}

const CustomToast: React.FC<CustomToastProps> = ({ text1, props }) => {
  return (
    <View className="h-[44px] w-[86%] bg-[#FAFAFA] p-2 rounded-xl justify-center shadow-sm">
        <View className="flex-row justify-start items-center gap-4">
            {props.color && <View className={cn("w-[4px] h-[28px] my-2 rounded-md", `bg-[${props.color}]`)}/>}
            <Text className="flex text-foreground">{text1}</Text>
        </View>
    </View>
  );
};

export const toastConfig = {
  custom: (props: any) => <CustomToast {...props} />,
};

export const success = () => {
    Toast.show({
        type: "custom",
        text1: "Success",
        position: "bottom",
        props: {color: "#1F845A"},
    });
};

export const failure = (tabBarHeight: number) => {

    Toast.show({
        type: "custom",
        text1: "Transaction id not found",
        position: "bottom",
        props: {color: "#C25100"},
        bottomOffset: tabBarHeight + 24
    });
};