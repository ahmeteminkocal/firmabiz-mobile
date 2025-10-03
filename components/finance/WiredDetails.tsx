import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { IconButtonProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { View } from 'react-native';
import Card from '../atoms/card';
import { DashedDivider } from '../atoms/divider';
import { Icon } from '../atoms/icon';

export default function WiredDetails() { 
    return (
        <Card className='border-t-0 rounded-t-none gap-2'>
            <DetailsItem title='Name' value='IBHMO Ozturk'/>
            <DetailsItem title='TR Identity Number' value='12345678901' buttons={[{icon: 'copy', onPress: () => {}}]}/>
            <DetailsItem title='User ID' value='45872'/>

            <DashedDivider/>

            <DetailsItem title='Receiving bank' value='Zirrat bank'/>
            <DetailsItem title='Selected bank' value='İşbank'/>
            <DetailsItem title='Bank transaction num' value='TR45 0006 22...'/>


            <DashedDivider />

            <DetailsItem title="Transaction ID" value="TXN-88374521" buttons={[{ icon: 'copy', onPress: () => {} }]}/>
            <DetailsItem title="Ref ID" value="REF-20250916-8457" buttons={[{ icon: 'pen', onPress: () => {} }]}/>
            <DetailsItem title="Method" value="Bank transfer" />
            <DetailsItem title="Provider ID" value="PVD-10039" buttons={[{ icon: 'copy', onPress: () => {} }]} />
            <DetailsItem title="Quantity" value="1" />
            <DetailsItem title="Amount" value="351.98" />
            <DetailsItem title="Reason for cancellation" value="-" />

            <DashedDivider />

            <DetailsItem title="Creation date" value="2025-09-12 14:32" />
            <DetailsItem title="Approved date" value="2025-09-12 14:40" />
            <DetailsItem title="Updated date" value="2025-09-13 08:15" />

            <DetailsItem title="Notes" value="-" />
            <DetailsItem title="Transaction" value="Completed" valueClassName="text-[#50A864]" />
        </Card>
    ) 
}

function DetailsItem ({title, value, buttons, valueClassName}: {title: string, value: string, valueClassName?: string, buttons?: IconButtonProps[]}) {
    return (
        <View className='flex-row gap-2 justify-between items-center'>

            <Text className='text-sm text-subtitle'>{title}</Text>

            <View className='flex-row gap-1 justify-between items-center'>
                <Text className={cn('text-sm text-foreground font-semibold', valueClassName)}>{value}</Text>
                {buttons && buttons.map((button, index) => (
                    <Icon key={index} name={button.icon} color={button.color?? THEME.subtitle} width={button.size?? 16} height={button.size?? 16}> </Icon>
                ))}
            </View>

        </View>
    )
}