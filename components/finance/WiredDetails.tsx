import { Text } from '@/components/atoms/text';
import { IconButtonProps } from '@/lib/types';
import { View } from 'react-native';
import Card from '../atoms/card';
import { Icon } from '../atoms/icon';

export default function WiredDetails() { 
    return (
        <Card className='border-t-0 rounded-t-none'>
            <DetailsItem title='Name' value='IBHMO Ozturk'/>
            <DetailsItem title='TR Identity Number' value='12345678901' buttons={[{icon: 'copy', onPress: () => {}}]}/>
            <DetailsItem title='User ID' value='45872'/>

            <DetailsItem title='Receiving bank' value='Zirrat bank'/>
            <DetailsItem title='Selected bank' value='İşbank'/>
            <DetailsItem title='Bank transaction num' value='TR45 0006 22...'/>

        </Card>
    ) 
}

function DetailsItem ({title, value, buttons}: {title: string, value: string, buttons?: IconButtonProps[]}) {
    return (
        <View className='flex-row gap-2 justify-between items-center'>

            <Text className='text-sm text-subtitle'>{title}</Text>

            <View className='flex-row gap-2 justify-between items-center'>
                <Text className='text-sm text-foreground font-semibold'>{value}</Text>
                {buttons && buttons.map((button, index) => (
                    <Icon key={index} name={button.icon}> </Icon>
                ))}
            </View>

        </View>
    )
}