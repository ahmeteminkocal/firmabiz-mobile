import { AngleDown, AngleLeft, AngleRight, AngleUp, ArrowGrowth, BitcoinSign, CalculatorAlt, ChartBar, Check , FileDownload, Filter, HomeAlt, ListUl, MoneyBill, MoneyStack, MoneyWithdraw, User } from 'react-native-unicons';

export const unicons = {
  check: Check,
  home: HomeAlt,
  profile: User,
  chart: ChartBar,
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
  moneyWithdraw: MoneyWithdraw
} as const;



export type UniconName = keyof typeof unicons;