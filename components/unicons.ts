import { AngleDown, AngleLeft, AngleRight, AngleUp, ArrowGrowth, BitcoinSign, CalculatorAlt, ChartPieAlt, Check, Comment, Copy, FileDownload, Filter, Globe, HomeAlt, Info, Layers, ListUl, MoneyBill, MoneyStack, MoneyWithdraw, User } from 'react-native-unicons';

export const unicons = {
  check: Check,
  home: HomeAlt,
  profile: User,
  chart: ChartPieAlt,
  menu: ListUl,
  fileDownload: FileDownload,
  filter: Filter,
  arrowRight: AngleRight,
  arrowLeft: AngleLeft,
  arrowUp: AngleUp,
  arrowDown: AngleDown,
  calculator: CalculatorAlt,
  arrowGrowth: ArrowGrowth,
  finance: MoneyBill,
  moneyStack: MoneyStack,
  bitcoinSign: BitcoinSign,
  moneyWithdraw: MoneyWithdraw,
  logs: Layers,
  comment: Comment,
  copy: Copy,
  info: Info,
  globe: Globe,
} as const;



export type UniconName = keyof typeof unicons;