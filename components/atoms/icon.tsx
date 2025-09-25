import React from "react";
import { SvgProps } from "react-native-svg";
import { UniconName, unicons } from "../unicons";

export type IconProps = {
  name: UniconName;
} & SvgProps;

export function Icon({ name, ...props }: IconProps) {
  const Unicon = unicons[name];
  if (!Unicon) return null;

  return (
    <Unicon
      {...props}
    />
  );
}