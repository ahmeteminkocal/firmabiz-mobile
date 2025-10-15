import AccountBalances from '@/components/management/screens/account-balances';
import CryptoBalanceLimit from '@/components/management/screens/crypto-balance-limit';
import CryptoNetworks from '@/components/management/screens/crypto-networks';
import DepositBlacklist from '@/components/management/screens/deposit-blacklist';
import InvestmentWithdrawalOutput from '@/components/management/screens/investment-withdrawal-output';
import OtherMethodSettings from '@/components/management/screens/other-method-settings';
import WireTransferSettings from '@/components/management/screens/wire-transfer-settings';
import WithdrawWhitelist from '@/components/management/screens/withdraw-whitelist';
import { useManagementStore } from '@/lib/stores/navigation/managementStore';
import { FinanceManagement } from '@/lib/types';

export default function ManagementScreen() {

    const { section } = useManagementStore();

    const managentScreens: Record<FinanceManagement, React.ComponentType>  = {
        [FinanceManagement.WireTransferSettings]: WireTransferSettings,
        [FinanceManagement.OtherMethodSettings]: OtherMethodSettings,
        [FinanceManagement.WithdrawWhitelist]: WithdrawWhitelist,
        [FinanceManagement.DepositBlacklist]: DepositBlacklist,
        [FinanceManagement.AccountBalances]: AccountBalances,
        [FinanceManagement.InvestmentWithdrawalOutput]: InvestmentWithdrawalOutput,
        [FinanceManagement.CryptoBalanceLimit]: CryptoBalanceLimit,
        [FinanceManagement.CryptoNetworks]: CryptoNetworks,
    };

    const Component = managentScreens[section];

    return (<Component/>);
}