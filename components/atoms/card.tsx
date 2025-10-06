import { cn } from '@/lib/utils';
import React from 'react';
import { GestureResponderEvent, Pressable, View, ViewProps } from 'react-native';

export function Card({
  className,
  ...props
}: ViewProps & {
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined
}){
    const cardClass = cn('bg-background rounded-[5px] border border-border p-3', className);
    if(props.onPress){
        return (
            <Pressable 
                className={cardClass}
                {...props}
            />
        );
    }
    return (
        <View 
            className={cardClass}
            {...props}
        />
    );
}

export default Card
