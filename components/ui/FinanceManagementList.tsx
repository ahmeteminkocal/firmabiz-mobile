import { Text } from '@/components/atoms/text';
import { useManagementStore } from '@/lib/stores/managementStore';
import { FinanceManagement } from '@/lib/types';
import { Pressable, View } from 'react-native';

const values = [
    FinanceManagement.WireTransferSettings,
    FinanceManagement.OtherMethodSettings,
    FinanceManagement.WithdrawWhitelist,
    FinanceManagement.DepositBlacklist,
    FinanceManagement.AccountBalances,
    FinanceManagement.InvestmentWithdrawalOutput,
    FinanceManagement.CryptoBalanceLimit,
    FinanceManagement.CryptoNetworks
];

export default function FinanceManagementList({onSelect} : {onSelect: () => void}) {
    const { setSection } = useManagementStore();
    return (
        <View className='flex bg-background rounded-t-[8px] p-2 border-b border-border'>
            {values.map((item) => {
                return (
                    <Pressable 
                        key={item}
                        onPress={() => {
                            setSection(item)
                            onSelect()
                        }}
                        className={item !== FinanceManagement.CryptoNetworks ? 'border-b border-[#349ECC4D]' : ''}>
                        <Text className='text-foreground text-base p-4'>{item}</Text>
                    </Pressable>
                )
            })}
        </View>
    );
}