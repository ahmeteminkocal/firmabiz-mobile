import React from "react";
import { Pressable } from "react-native";
import { SvgProps } from "react-native-svg";
import { UniconName, unicons } from "../unicons";

export type IconProps = {
  name: UniconName;
  onPress?: () => void
} & SvgProps;

export function Icon({ name, onPress, ...props }: IconProps) {
  const Unicon = unicons[name];
  if (!Unicon) return null;

  if(onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={4}>
          <Unicon {...props}/>          
      </Pressable>
    )
  }
  return (
    <Unicon
      {...props}
    />
  );
}