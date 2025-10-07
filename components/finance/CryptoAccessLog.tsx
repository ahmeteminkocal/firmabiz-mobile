import { Icon } from '@/components/atoms/icon';
import LabelChip from '@/components/atoms/LabelChip';
import { Text } from '@/components/atoms/text';
import CryptoAccordionView from '@/components/finance/CryptoAccordionView';
import { THEME } from '@/lib/theme';
import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

export default function CryptoAccessLog() {
  return (
    <Animated.View layout={LinearTransition.duration(300)} className='bg-background rounded-[5px] border border-border p-3 gap-1'>
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
        <CryptoAccordionView 
            data={sampleJson}
            response={{
                "message": "Payment processed successfully.",
                "payment_id": "9fbe48dd-2ab9-404a-967b-30d716c4304a",
        }}/>
    </Animated.View>
  );
}


const sampleJson = {
    "type": "IN",
    "status": 1,
    "status_description": "PAYMENT RECEIVED",
    "payment_id": "9fbe48dd-2ab9-404a-967b-30d716c4304a",
    "hash": "183f744ce3677cb1f4f11d91501753bda0e88676ae29f75f71398bdbad206002",
    "crypto_amount": "11.00000000",
    "crypto_network": "dogecoin",
    "crypto_currency": "DOGE",
    "crypto_asset_type": "DOGE",
    "crypto_transaction_hash": "d8ab1ed33fba3f6d83332200d46b2ad2cb648b6451fbf4c59995e56edc6386e9",
    "crypto_transaction_vout": null,
    "crypto_from_address": null,
    "crypto_to_address": "DSTPURXvFrxu9yU6HeaL3dfZY8aQLaPnUP",
    "address_wallet_id": "USD",
    "crypto_transaction_details": {},
    "fiat_currencies": {
      "USD": "2.40",
      "EUR": "2.05",
      "TRY": "98.56",
      "BRL": "12.99",
      "GBP": "1.77",
      "AUD": "3.67",
      "CAD": "3.30",
      "CHF": "1.92",
      "JPY": "353.12",
      "MXN": "44.84",
      "ZAR": "42.53",
      "SAR": "9.00",
      "EGP": "116.42",
      "CZK": "50.50",
      "PHP": "136.80",
      "NGN": "3688.69",
      "PKR": "678.17",
      "ARS": "3219.60",
      "CLP": "2324.40",
      "COP": "9655.40",
      "KES": "308.55",
    }
  
}