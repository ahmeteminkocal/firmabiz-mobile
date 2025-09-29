import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import { TextInput, View, type TextInputProps } from 'react-native';

function Input({
  className,
  placeholderClassName,
  error,
  ...props
}: TextInputProps & React.RefAttributes<TextInput> & {error?: string}) {
  return (
    <View className='flex gap-2'>
      <TextInput
        selectionColor={THEME.label}
        cursorColor={THEME.label}
        className={cn(
          'border border-input bg-background text-foreground flex h-9 w-full flex-row items-center rounded-[5px] px-3 py-1 text-base leading-5',
          props.editable === false && 'opacity-60',
          error? 'border-destructive' : 'focus:border-label',
          className
        )}
        {...props}
        />
      {error && <Text className='ml-1 text-xs text-destructive'>{error}</Text>}
      
    </View>
  );
}

export { Input };
