import { cn } from '@/lib/utils'
import React from 'react'
import { View, ViewProps } from 'react-native'

export function Card({
  className,
  ...props
}: ViewProps){
    return (
        <View 
            className={cn(
                'bg-background rounded-[5px] border border-border p-3',
                className
            )}
            {...props}
        />
    )
}

export default Card
