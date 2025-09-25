import { Text } from '@/components/atoms/text'
import { ButtonAction } from '@/lib/types'
import { cn } from '@/lib/utils'
import { View } from 'react-native'
import { Button } from '../atoms/button'

interface ReusableDialogParams {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    content: React.ReactElement,
    title: string,
    actions: ButtonAction[]
}

export function ReusableDialog({visible, setVisible, content, title, actions}: ReusableDialogParams) {

    return (
        <View className='w-full bg-background rounded-2xl'>
            {/* ----------------------------- Title ----------------------------- */}
            <Text className='text-lg text-black font-semibold text-center p-4'>
               {title}
            </Text>

            {/* ----------------------------- Content ----------------------------- */}
            <View
                className='flex justify-center items-center bg-background rounded border border-border py-3 px-4'>
                {content}
            </View>

            {/* ----------------------------- Footer ----------------------------- */}
            <View className={cn(
                'flex justify-center items-center p-4 w-full gap-2',
                actions.length === 2 && 'flex-row gap-1',
            )}>
                {actions.map((action) => (
                    <Button 
                        key={action.title}
                        variant={action.variant}
                        className={actions.length !== 2? 'w-full' : 'flex-1'}
                        onPress={() => {
                            setVisible(false);
                            action.action({});
                        }}>
                            <Text>{action.title}</Text>
                    </Button>))}
            </View>
        </View>
    )
}

export default ReusableDialog
