import { Assets } from '@/assets';
import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { Image, View } from "react-native";
import { Button } from '../atoms/button';
import Card from "../atoms/card";
import { Icon } from '../atoms/icon';
import { Input } from '../atoms/input';
import SvgIcon from "../ui/SvgIcon";

export default function BankLimitCard() {
    return <Card className='gap-1'>
        <View className='justify-start'>
            <View className='flex-row gap-2 justify-between items-center'>
                <View className='flex-row gap-1.5 justify-between items-center'>
                    <Image
                        resizeMode="contain"
                        source={Assets.QNB}
                        style={{width: 26, height: 26}}
                    />
                    <Text className='text-lg text-foreground font-bold'>QNB Financebank</Text>
                    <Icon name="copy" width={16} height={16} color={THEME.subtitle}/>
                </View>
                <SvgIcon name="delete" size={16}/>
            </View>
            <Text className='text-sm text-subtitle pl-[32px]'>0892/1249</Text>
        </View>

        <View className='flex-row gap-2 justify-center items-center'>
            <View className='flex-1'>
                <Input trailing={(<Text className='text-xs text-subtitle'>Min</Text>)}/>
            </View>
            <View className='flex-1'>
                <Input trailing={(<Text className='text-xs text-subtitle'>Max</Text>)}/>
            </View>
        </View>
        <View className='flex-row gap-2 justify-between items-center'>
            <Card className='border-0 bg-[#E6F4FF75] p-1 flex-row justify-center items-center gap-1'>
                <Icon name='profile' width={12} height={12} color={THEME.primary}/>
                <Text className='text-xs text-primary'>Omar edit</Text>
            </Card>
            <Button className='bg-stroke text-white text-xs py-1'>
                <Text>Save</Text>
            </Button>
        </View>
    </Card>
}