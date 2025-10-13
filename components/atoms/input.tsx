import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import { TextInput, View, type TextInputProps } from 'react-native';

function Input({
  className,
  placeholderClassName,
  leading,
  trailing,
  error,
  label,
  ...props
}: TextInputProps & React.RefAttributes<TextInput> & {leading?: React.ReactElement, trailing?: React.ReactElement, error?: string, label?: string}) {
  return (
    <View className='gap-1'>
      {label && <Text className='text-xs text-label'>{label}</Text>}
      <View className={cn('border border-input bg-background flex-row justify-center items-center rounded-[5px] px-3 gap-1',
            props.editable === false && 'opacity-60',
            error? 'border-destructive' : 'focus:border-label',
      )}>
        {leading && leading}
        <TextInput
          onPress={props.onPress}
          selectionColor={THEME.label}
          className={cn(
            'flex-1 text-foreground h-9 text-base leading-5 p-0',
            className
          )}
          cursorColor={THEME.label}
          {...props}
        />
        {trailing && trailing}
      </View>
      {error && <Text className='ml-1 text-xs text-destructive'>{error}</Text>}
    </View>
  );
}

export { Input };
