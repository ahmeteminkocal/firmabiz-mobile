import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@rn-primitives/switch';
 
function Switch({
  className,
  ...props
}: SwitchPrimitives.RootProps & React.RefAttributes<SwitchPrimitives.RootRef>) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'flex h-4 w-6 shrink-0 flex-row items-center rounded-full border border-transparent',
        props.checked ? 'bg-[#34C759]' : 'bg-[#78788029]',
        props.disabled && 'opacity-50',
        className
      )}
      {...props}>
      <SwitchPrimitives.Thumb
        className={cn(
          'bg-background size-3 rounded-full transition-transform shadow-sm shadow-black/10',
          props.checked
            ? 'translate-x-2.5'
            : 'translate-x-0'
        )}
      />
    </SwitchPrimitives.Root>
  );
}
 
export { Switch };
