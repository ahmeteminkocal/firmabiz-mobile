import CryptoScreen from "@/components/finance/screens/crypto";
import OtherScreen from "@/components/finance/screens/other";
import WiredScreen from "@/components/finance/screens/wired";
import { useFinanceStore } from "@/lib/stores/navigation/financeStore";

export default function FinanceScreen() {

    const { section } = useFinanceStore();

    return (
        section === 'crypto'? <CryptoScreen/> 
      : section === 'wired'? <WiredScreen/> 
      : <OtherScreen/>);
}