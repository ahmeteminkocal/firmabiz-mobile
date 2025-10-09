import { Text } from '@/components/atoms/text';
import CryptoAccessLog from '@/components/finance/CryptoAccessLog';
import MainAppHeader from '@/components/ui/MainAppHeader';
import Animated from 'react-native-reanimated';

export default function CryptoDetailsScreen() {
    return (
        <>
            <MainAppHeader title={'Access Logs'} separated={false} canGoBack={true}/>
            <Text className='text-center text-sm w-full bg-background pb-4'>9fc7f8c3-bb1d-45d2-8dde-63b3cf1f96e9</Text>
            <Animated.ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-5'>
                <CryptoAccessLog/>
                <CryptoAccessLog/>
                <CryptoAccessLog/>
                <CryptoAccessLog/>
                <CryptoAccessLog/>
            </Animated.ScrollView>
        </>
    )
}

