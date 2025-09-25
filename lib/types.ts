import { IconProps } from "@/components/atoms/icon";

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
