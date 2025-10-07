import { Text } from '@/components/atoms/text';
import { THEME } from '@/lib/theme';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import { Platform, Pressable, View } from 'react-native';
import Animated, {
  FadeOutUp,
  interpolateColor,
  LayoutAnimationConfig,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { Icon } from '../atoms/icon';
import { TextClassContext } from '../atoms/text';
import JsonViewer from '../ui/JsonViewer';

const ANIMATION_DURATION = 300;
 
function Accordion({
  children,
  ...props
}: Omit<AccordionPrimitive.RootProps, 'asChild'> &
  React.RefAttributes<AccordionPrimitive.RootRef>) {
  return (
    <LayoutAnimationConfig skipEntering>
      <AccordionPrimitive.Root
        {...(props as AccordionPrimitive.RootProps)}
        asChild={Platform.OS !== 'web'}>
        <Animated.View layout={LinearTransition.duration(ANIMATION_DURATION)}>{children}</Animated.View>
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
        'border border-tertiary rounded-[5px]',
        className
      )}
      value={value}
      asChild
      {...props}>
      <Animated.View
        className="overflow-hidden"
        layout={LinearTransition.duration(ANIMATION_DURATION)}>
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
    () => (isExpanded ? withTiming(1, { duration: ANIMATION_DURATION }) : withTiming(0, { duration: ANIMATION_DURATION })),
    [isExpanded]
  );
  const chevronStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
    }),
    [progress]
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [THEME.background, THEME.tertiaryBackground]
      ),
    };
  });
 
  return (
    <TextClassContext.Provider
      value={cn(
        'text-sm text-tertiary font-medium',
      )}>
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger {...props} asChild>
          <Trigger>
            <Animated.View 
            className={cn(
              'flex-row items-center justify-between p-3',
              className
            )}
            style={animatedStyle}>
                <>{children}</>
                <Animated.View style={chevronStyle}>
                  <Icon
                    name={'arrowDown'}
                    width={16}
                    height={16}
                    color={THEME.tertiary}
                  />
                </Animated.View>
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
        className='overflow-hidden'
        {...props}>
        <Animated.View
          exiting={FadeOutUp.duration(ANIMATION_DURATION)}
          className={cn('', className)}>
          {children}
        </Animated.View>
      </AccordionPrimitive.Content>
    </TextClassContext.Provider>
  );
}
 
export default function CryptoAccordionView({data, response} : {data: {}, response: {}}) {  

  return <Accordion type='multiple' collapsible className='gap-2 mt-1'>
    <AccordionItem value='data'>
      <AccordionTrigger>
        <Text>Data</Text>
      </AccordionTrigger>
      <AccordionContent>
          <JsonViewer data={data} />
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='response'>
      <AccordionTrigger>
        <Text>Response</Text>
      </AccordionTrigger>
      <AccordionContent>
          <JsonViewer data={response} />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
}


