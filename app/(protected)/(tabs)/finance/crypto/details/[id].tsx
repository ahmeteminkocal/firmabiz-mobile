import Card from '@/components/atoms/card';
import { Icon } from '@/components/atoms/icon';
import LabelChip from '@/components/atoms/LabelChip';
import { Text } from '@/components/atoms/text';
import CryptoAccordionView from '@/components/ui/CryptoAccordionView';
import MainAppHeader from '@/components/ui/MainAppHeader';
import { THEME } from '@/lib/theme';
import { ScrollView, View } from 'react-native';

export default function CryptoDetailsScreen() {
    return (
        <>
            <MainAppHeader title={'Access Logs'} separated={false} canGoBack={true}/>
            <Text className='text-center text-sm w-full bg-background pb-4'>9fc7f8c3-bb1d-45d2-8dde-63b3cf1f96e9</Text>
            <ScrollView bounces={false} contentContainerClassName='flex-grow bg-background px-4 py-4 gap-2'>
                <Card className='gap-1'>
                    <View className='flex-row justify-between items-center gap-1'>
                        <Text className='text-sm text-subtitle'>api.kralhavale.com/check/status...</Text>
                        <View className='flex-row justify-center items-center gap-2'>
                            <Icon name='copy' color={THEME.subtitle} width={16} height={16}/>
                            <LabelChip label='OUT' color='#50A864' backgroundColor='#DCEEE0'/>
                            <LabelChip label='GET' color='#A8509C' backgroundColor='#EDDCEE'/>
                        </View>
                    </View>
                    <Text className='text-lg text-foreground font-extrabold'>200</Text>
                    <View className='flex-row justify-between items-center gap-1'>
                        <Text className='text-sm text-subtitle'>10:47PM - 10.02.2025</Text>
                        <Text className='text-sm text-subtitle'>12:09AM - 10.02.2025</Text>
                    </View>
                    <View className='flex-row justify-start items-center gap-1'>
                        <Text className='text-xs text-subtitle font-extrabold'>UUID:</Text>
                        <Text className='text-sm text-subtitle'>0b1fe7e2-8df3-4f81-90db-8a6a9354e498</Text>
                        <Icon name='copy' color={THEME.subtitle} width={16} height={16}/>
                    </View>
                    <View className='flex-row justify-start items-center gap-1'>
                        <Text className='text-xs text-subtitle font-extrabold'>Batch ID:</Text>
                        <Text className='text-sm text-subtitle'>3bcc1a0e-a5a7-44ae-b02d-7bd7a8c00142</Text>
                        <Icon name='copy' color={THEME.subtitle} width={16} height={16}/>
                    </View>
                    <Text className='text-xs text-[#2FA305]'>211.38596534729004</Text>
                    <CryptoAccordionView />
                </Card>
                
            </ScrollView>
        </>
    )
}
