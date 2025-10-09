import MainAppHeader from "@/components/ui/MainAppHeader";
import { ScrollView } from "react-native";

export default function WireTransferSettings() {
    return (
        <>
          <MainAppHeader title={'Wire Transfer Settings'}/>
          <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>

          </ScrollView>
        </>
    );
}