import { cn } from '@/lib/utils'
import React from 'react'
import { Pressable, PressableProps } from 'react-native'

export function Card({
  className,
  ...props
}: PressableProps){
    return (
        <Pressable 
            className={cn(
                'bg-background rounded-[5px] border border-border p-3',
                className
            )}
            {...props}
        />
    )
}

export default Card
