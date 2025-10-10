import MainAppHeader from "@/components/ui/MainAppHeader";
import { ScrollView } from "react-native";
import { WireTransferCard } from "../WireTransferCard";

export default function WireTransferSettings() {
    return (
        <>
          <MainAppHeader title={'Wire Transfer Settings'}/>
          <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
            <WireTransferCard/>
            <WireTransferCard/>
            <WireTransferCard/>
            <WireTransferCard/>
          </ScrollView>
        </>
    );
}