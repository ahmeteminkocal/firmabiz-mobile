import { Text } from '@/components/atoms/text';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/TertiaryAccordion';
import { View } from 'react-native';

export function Details() {
    return (
      <View className='flex-1 bg-background gap-2 px-2 pt-2 mt-safe'>
        <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
                <AccordionTrigger>
                    <Text>Is it accessible?</Text>
                </AccordionTrigger>
                <AccordionContent>
                    <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
                <AccordionTrigger className='text-tertiary'>
                    <Text>Is it accessible?</Text>
                </AccordionTrigger>
                <AccordionContent>
                    <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </View>
    )
}

export default Details
