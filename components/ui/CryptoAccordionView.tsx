import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import Card from '../atoms/card';
import { Icon } from '../atoms/icon';
import JsonViewer from './JsonViewer';

const ANIMATION_DURATION = 300;

const SECTIONS = [ 'Data', 'Response'];

type ItemProps = {section: string, index: number, isActive: boolean};

function RenderHeader({section, index, isActive} : ItemProps) {

  const progress = useDerivedValue(() => (
    isActive? withTiming(1, { duration: ANIMATION_DURATION }) 
            : withTiming(0, { duration: ANIMATION_DURATION })),
    [isActive]
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [THEME.background, THEME.tertiaryBackground]
      ),
    };
  });

  const chevronStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
    }),
    [progress]
  );
    
  return (
    <Animated.View 
      style={animatedStyle}
      className={cn(
        'flex-row justify-between items-center border-tertiary border rounded-[5px] py-2.5 px-3', 
        isActive && 'rounded-b-none border-b-0')}>
        <Text className='text-sm text-tertiary font-medium'>{section}</Text>

        <Animated.View style={chevronStyle}>
            <Icon
                name='arrowDown'
                width={20}
                color={THEME.tertiary}
                style={{
                    flexShrink: 0
                }}
            />  
        </Animated.View>
    </Animated.View>
  );
};

function RenderContent({section, index, isActive} : ItemProps) {
    return (
    <Card className='border-tertiary border-t-0 rounded-t-none'>
        <JsonViewer 
          data={
            section === 'Data' ? sampleJson 
            : {
              "message": "Payment processed successfully.",
              "payment_id": "9fbe48dd-2ab9-404a-967b-30d716c4304a",
            }
          }/>
    </Card>
    );
  };

export default function CryptoAccordionView() {  
  const [ activeSections, setActiveSections] = useState<number[]>([])  
  return (
    <View className='pt-1'>
      <Accordion
        sections={SECTIONS}
        containerStyle={{gap: 8}}
        expandMultiple={true}
        activeSections={activeSections}
        renderHeader={(content, index, isActive) => (
          <RenderHeader 
            section={content} 
            index={index} 
            isActive={isActive}/>
        )}
        renderContent={(content, index, isActive) => (
          <RenderContent 
            section={content} 
            index={index} 
            isActive={isActive}/>
        )}
        onChange={(indexes) => {
          setActiveSections(indexes);
        }}
        underlayColor='transperant'
        duration={300}
      />
    </View>
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