import Dialog from "@/components/atoms/dialog";
import FAB from "@/components/atoms/FAB";
import { Input } from "@/components/atoms/input";
import { Text } from '@/components/atoms/text';
import BankLimitCard from "@/components/management/BankLimitCard";
import DropdownSelector from "@/components/ui/DropdownSelector";
import MainAppHeader from "@/components/ui/MainAppHeader";
import ReusableDialog from "@/components/ui/ReusableDialog";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function BankLimitsScreen() {

    const [ dialogVisible , setDialogVisible] = useState(false);
    
    return (
        <>
            <MainAppHeader title={'Set bank limits'} subtitle="transfer/eft" withAvatar={false} canGoBack={true}/>
            <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
                <BankLimitCard/>
                <BankLimitCard/>
            </ScrollView>
            <FAB onPress={() => setDialogVisible(true)}/>
            <Dialog 
                visible={dialogVisible} 
                setVisible={setDialogVisible}        
                builder={(
                    <ReusableDialog
                        visible={dialogVisible} 
                        setVisible={setDialogVisible}
                        title='Create New Bank Limit'
                        content={(
                            <View className="w-full gap-2">  
                                <DropdownSelector<string>
                                    label={"Bank name"}
                                    onChange={(bank) => { } }
                                    items={['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4']}
                                    keyExtractor={(item) => item}
                                    valueExtractor={(item) => item}/>
                                <View className='flex-row gap-2 justify-center items-center'>
                                    <View className='flex-1'>
                                        <Input trailing={(<Text className='text-xs text-subtitle'>Min</Text>)}/>
                                    </View>
                                    <View className='flex-1'>
                                        <Input trailing={(<Text className='text-xs text-subtitle'>Max</Text>)}/>
                                    </View>
                                </View>
                            </View>
                        )}
                        actions={[
                            { title: 'Cancel', action: () => {}, variant: 'outline' },
                            { title: 'Create', action: () => {}, variant: 'default' }
                        ]}
                    />
                )} 
            />
        </>
    );
}