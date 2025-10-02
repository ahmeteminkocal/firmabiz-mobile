import { TabsProps } from "./types";

export const BOTTOM_TAB_BAR_HEGHT = 94;

export const MAIN_TABS: TabsProps[] = [
  {
    name: "home",
    label: "Home",
    icon: {name: 'home'}
  },
  {
    name: "finance",
    label: "Finance",
    icon: {name: 'finance'}
  },
  {
    name: "management",
    label: "Finance Management",
    icon: {name: 'chart'}
  },
  {
    name: "platform",
    label: "Platform Management",
    icon: {name: 'profile'}
  },
  {
    name: "logs",
    label: "System Logs",
    icon: {name: 'logs'}
  }
];