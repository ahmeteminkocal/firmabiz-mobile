import { Icon } from '@/components/atoms/icon';
import { Text } from '@/components/atoms/text';
import GridView from '@/components/ui/GridView';
import { UniconName } from '@/components/unicons';
import { router } from 'expo-router';
import { Pressable, View } from 'react-native';

interface ItemType {
    id: number, 
    name: string, 
    icon: UniconName, 
    color: string,
    iconBackgroundColor: string,
    backgroundColor: string,
}

const data: ItemType[] = [
    {id: 1, name:'Wired', icon: 'moneyStack', color: '#C0770F', iconBackgroundColor: 'bg-[#FFC67640]', backgroundColor: 'bg-[#FFF7D5]'},
    {id: 2, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
    {id: 3, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 4, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
    {id: 5, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 6, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
    {id: 7, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 8, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
    {id: 9, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 10, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
    {id: 11, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 12, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 13, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 14, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 15, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
    {id: 16, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 

];

export function Finance() {
    // const tabBarHeight = useBottomTabBarHeight();
    
    return (
      <View className='flex-1 bg-background px-2 pt-4'>
        <GridView<ItemType> 
            data={data} 
            keyExtractor={(item: ItemType, index: number): string => item.id.toString()} 
            itemBuilder={(item, index, size) => (
                <Pressable
                    key={item.id}
                    onPress={() => 
                        // failure(tabBarHeight)
                        router.push('/(protected)/(home)/(finance)/details')
                    }
                    className={`flex-1 ${item.backgroundColor} rounded-xl items-center justify-center gap-3`}
                >
                    <View className={`rounded-full ${item.iconBackgroundColor} p-3`}>
                        <Icon name={item.icon} color={item.color} width={32}/>
                    </View>
                    <Text className="text-sm text-subtitle">{item.name}</Text>
                </Pressable>
            )}/>
      </View>
    )
}

export default Finance
