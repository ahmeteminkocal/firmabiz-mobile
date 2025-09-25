import React, { useMemo } from "react";

import { View, FlatList, useWindowDimensions } from "react-native";
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