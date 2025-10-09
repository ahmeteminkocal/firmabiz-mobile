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

export enum FinanceManagement {
    WireTransferSettings = 'Wire Transfer Settings',
    OtherMethodSettings = 'Other Method Settings',
    WithdrawWhitelist = 'Withdraw Whitelist',
    DepositBlacklist = 'Deposit Blacklist',
    AccountBalances = 'Account Balances',
    InvestmentWithdrawalOutput = 'Investment Withdrawal Output',
    CryptoBalanceLimit = 'Crypto Balance Limit',
    CryptoNetworks = 'Crypto Networks',
}