import React, { useMemo } from "react";

import { FlatList, useWindowDimensions, View } from "react-native";
const DEFAULT_GAP = 12;

export interface GridViewProps<T> {
  data: T[];
  keyExtractor: (item: T, index: number) => string,
  itemBuilder: (item: T, index: number, size: number) => React.ReactElement,
  horizontalGap?: number,
  verticalGap?: number
}

export default function GridView<T>({
  data,
  keyExtractor,
  itemBuilder,
  horizontalGap = DEFAULT_GAP,
  verticalGap = DEFAULT_GAP
}: GridViewProps<T>) {

  const { width } = useWindowDimensions();

  const numColumns = useMemo(() => {
    if (width < 640) return 3;
    if (width < 768) return 4;
    if (width < 1024) return 5;
    return 6;
  }, [width]);

  const ITEM_SIZE = (width - DEFAULT_GAP * (numColumns + 1)) / numColumns;

  return (
    <View className="flex-1 bg-white items-center"> 
      <FlatList
        data={data}
        bounces={false}
        renderItem={({ item: element, index }) => (
          <View style={{ width: ITEM_SIZE, height: ITEM_SIZE,}}>
            {itemBuilder(element, index, ITEM_SIZE)}
          </View>
        )}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        columnWrapperStyle={{ columnGap: horizontalGap, marginBottom: verticalGap }}
        showsVerticalScrollIndicator={false}
        extraData={width} // ensures re-render on resize/rotation
      />
    </View>
  );
}


// Usage Example: 

// import { Icon } from '@/components/atoms/icon';
// import { Text } from '@/components/atoms/text';
// import GridView from '@/components/ui/GridView';
// import { UniconName } from '@/components/unicons';
// import { Pressable, View } from 'react-native';

// interface ItemType {
//     id: number, 
//     name: string, 
//     icon: UniconName, 
//     color: string,
//     iconBackgroundColor: string,
//     backgroundColor: string,
// }

// const data: ItemType[] = [
//     {id: 1, name:'Wired', icon: 'moneyStack', color: '#C0770F', iconBackgroundColor: 'bg-[#FFC67640]', backgroundColor: 'bg-[#FFF7D5]'},
//     {id: 2, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
//     {id: 3, name: 'Other', icon: 'moneyWithdraw', color: '#13938C', iconBackgroundColor: 'bg-[#62D6D02B]', backgroundColor: 'bg-[#E1F6F2]'}, 
//     {id: 4, name: 'Crypto', icon: 'bitcoinSign', color: '#149F18', iconBackgroundColor: 'bg-[#A9DFAC63]', backgroundColor: 'bg-[#DDF3DE]'}, 
// ];

// export default function FinanceScreen() {    
//     return (
//       <View className='flex-1 bg-background px-2 pt-4'>
//         <GridView<ItemType> 
//             data={data} 
//             keyExtractor={(item: ItemType, index: number): string => item.id.toString()} 
//             itemBuilder={(item, index, size) => (
//                 <Pressable
//                     key={item.id}
//                     onPress={() => {}}
//                     className={`flex-1 ${item.backgroundColor} rounded-xl items-center justify-center gap-3`}>
//                     <View className={`rounded-full ${item.iconBackgroundColor} p-3`}>
//                         <Icon name={item.icon} color={item.color} width={32}/>
//                     </View>
//                     <Text className="text-sm text-subtitle">{item.name}</Text>
//                 </Pressable>
//             )}/>
//       </View>
//     )
// }
