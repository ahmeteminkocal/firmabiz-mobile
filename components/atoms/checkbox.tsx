import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { View } from 'react-native';
import { Icon } from './icon';

const DEFAULT_HIT_SLOP = 24;

function Checkbox({
  title,
  className,
  checkedClassName,
  indicatorClassName,
  iconClassName,
  ...props
}: CheckboxPrimitive.RootProps &
  React.RefAttributes<CheckboxPrimitive.RootRef> & {
    checkedClassName?: string;
    indicatorClassName?: string;
    iconClassName?: string;
    title: string;
  }) {
  return (
    <View className='flex-row items-center gap-x-2'>
      <CheckboxPrimitive.Root
        className={cn(
          'size-4 bg-foreground shrink-0 rounded-[4px] border border-placeholder',
          'overflow-hidden',
          props.checked && cn('border-primary', checkedClassName),
          props.disabled && 'opacity-50',
          className
        )}
        hitSlop={DEFAULT_HIT_SLOP}
        {...props}>
        <CheckboxPrimitive.Indicator
          className={cn('bg-primary h-full w-full items-center justify-center', indicatorClassName)}>
          <Icon
            name='check'
            color='white'
            width={16}
            className={cn('text-primary-foreground', iconClassName)}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <Text className='text-md text-placeholder'>{title}</Text>
    </View> 

  );
}

export { Checkbox };
