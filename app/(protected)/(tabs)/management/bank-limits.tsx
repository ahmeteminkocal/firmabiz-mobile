import BankLimitCard from "@/components/management/BankLimitCard";
import MainAppHeader from "@/components/ui/MainAppHeader";
import { ScrollView } from "react-native";

export default function BankLimitsScreen() {
    return (
        <>
            <MainAppHeader title={'Set bank limits'} subtitle="transfer/eft" withAvatar={false} canGoBack={true}/>
            <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
                <BankLimitCard/>
                <BankLimitCard/>
            </ScrollView>
        </>
    );
}