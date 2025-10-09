import MainAppHeader from "@/components/ui/MainAppHeader";
import { ScrollView } from "react-native";

export default function AccountBalances() {
    return (
        <>
          <MainAppHeader title={'Account Balances'}/>
          <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>

          </ScrollView>
        </>
    );
}