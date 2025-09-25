import { Icon } from '@/components/atoms/icon';
import { TextClassContext } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import { Platform, Pressable, View } from 'react-native';
import Animated, {
  FadeOutUp,
  LayoutAnimationConfig,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
 
function Accordion({
  children,
  ...props
}: Omit<AccordionPrimitive.RootProps, 'asChild'> &
  React.RefAttributes<AccordionPrimitive.RootRef>) {
  return (
    <LayoutAnimationConfig skipEntering>
      <AccordionPrimitive.Root
        {...(props as AccordionPrimitive.RootProps)}
        asChild>
        <Animated.View layout={LinearTransition.duration(200)}>{children}</Animated.View>
      </AccordionPrimitive.Root>
    </LayoutAnimationConfig>
  );
}
 
function AccordionItem({
  children,
  className,
  value,
  ...props
}: AccordionPrimitive.ItemProps & React.RefAttributes<AccordionPrimitive.ItemRef>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'border-tertiary border rounded-[5px]',
        className
      )}
      value={value}
      asChild
      {...props}>
      <Animated.View
        className="overflow-hidden"
        layout={LinearTransition.duration(200)}>
        {children}
      </Animated.View>
    </AccordionPrimitive.Item>
  );
}
 
const Trigger = Platform.OS === 'web' ? View : Pressable;
 
function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.TriggerProps & {
  children?: React.ReactNode;
} & React.RefAttributes<AccordionPrimitive.TriggerRef>) {
  const { isExpanded } = AccordionPrimitive.useItemContext();
 
  const progress = useDerivedValue(
    () => (isExpanded ? withTiming(1, { duration: 250 }) : withTiming(0, { duration: 200 })),
    [isExpanded]
  );
  const chevronStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
    }),
    [progress]
  );
 
  return (
    <TextClassContext.Provider
      value={cn(
        'text-left text-sm text-tertiary font-medium',
      )}>
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger {...props} asChild>
          <Trigger
            className={cn(
              'flex-row items-start justify-between gap-4 rounded-[5px] p-3',
              isExpanded && 'bg-tertiary-background',
              className
            )}>
            <>{children}</>
            <Animated.View style={chevronStyle}>
              <Icon
                name='arrowDown'
                width={24}
                color={THEME.tertiary}
                style={{
                    flexShrink: 0
                }}
              />
            </Animated.View>
          </Trigger>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </TextClassContext.Provider>
  );
}
 
function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.ContentProps & React.RefAttributes<AccordionPrimitive.ContentRef>) {
  const { isExpanded } = AccordionPrimitive.useItemContext();
  return (
    <TextClassContext.Provider value="text-sm">
      <AccordionPrimitive.Content
        className={cn(
          'overflow-hidden'
        )}
        {...props}>
        <Animated.View
          exiting={ FadeOutUp.duration(200) }
          className={cn('pb-4', className)}>
          {children}
        </Animated.View>
      </AccordionPrimitive.Content>
    </TextClassContext.Provider>
  );
}
 
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
