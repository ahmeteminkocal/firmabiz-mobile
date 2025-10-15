import { Text } from '@/components/atoms/text';
import { BOTTOM_TAB_BAR_HEGHT } from "@/lib/constants";
import React from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";

interface CustomToastProps {
  text1: string;
  props: {color: string}
}

const CustomToast: React.FC<CustomToastProps> = ({ text1, props }) => {
  return (
    <View className="h-[44px] w-[86%] bg-[#FAFAFA] p-2 rounded-xl justify-center shadow-sm">
        <View className="flex-row justify-start items-center gap-4">
            {props.color && <View style={{
              width: 4,
              height: 28,
              marginVertical: 8,
              borderRadius: 2,
              backgroundColor: props.color
            }}/>}
            <Text className="flex text-foreground">{text1}</Text>
        </View>
    </View>
  );
};

export const toastConfig = {
  custom: (props: any) => <CustomToast {...props} />,
};

export const success = (message?: string, offset: boolean = true) => {
    Toast.show({
        type: "custom",
        text1: message?? "Success",
        position: "bottom",
        props: {color: "#1F845A"},
        bottomOffset: offset? BOTTOM_TAB_BAR_HEGHT + 24 : undefined
    });
};

export const failure = (message?: string, offset: boolean = true) => {

    Toast.show({
        type: "custom",
        text1: message?? "Something went wrong",
        position: "bottom",
        props: {color: "#C9372C"},
        bottomOffset: offset? BOTTOM_TAB_BAR_HEGHT + 24 : undefined
    });
};