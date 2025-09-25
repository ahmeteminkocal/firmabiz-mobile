import { cn } from '@/lib/utils';
import { TextInput, type TextInputProps } from 'react-native';

function Input({
  className,
  placeholderClassName,
  ...props
}: TextInputProps & React.RefAttributes<TextInput>) {
  return (
    <TextInput
      className={cn(
        'border-border bg-background text-foreground flex h-10 w-full min-w-0 flex-row items-center rounded-[5px] border px-3 py-1 text-base leading-5 shadow-sm shadow-black/5 sm:h-9',
        props.editable === false &&
          cn(
            'opacity-50',
          ),
          'placeholder:text-placeholder',
          
        className
      )}
      {...props}
    />
  );
}

export { Input };
