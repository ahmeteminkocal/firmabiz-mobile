import { IconProps } from "@/components/atoms/icon";
import { UniconName } from "@/components/unicons";

export enum MainTab  {
  Home = 0, 
  Finance = 1,
  FinanceManagement = 2,
  PlatformManagement = 3,
  SystemLogs = 4,
  None = -1
};


export type TabsProps = {
  name: string;
  label: string;
  icon: IconProps;
};

export enum HomeTab  {Summary = 'Summary', Table = 'Table'};

export type ButtonAction = {
  title: string,
  action: (props: any) => any,
  variant: 
    'default' |
    'destructive' |
    'outline' |
    'secondary' |
    'ghost' |
    'link'
}

export type IconButtonProps = {
  icon: UniconName,
  onPress: () => void,
  size?: number,
  color?: string,
}
