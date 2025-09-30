import { Button } from '@/components/atoms/button'
import Dialog from '@/components/atoms/dialog'
import { Text } from '@/components/atoms/text'
import ReusableDialog from '@/components/ui/ReusableDialog'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View } from 'react-native'

export default function SplashScreen() {

    const router = useRouter();

    const [ dialogVisible , setDialogVisible] = useState(false);


    return (
      <View className='flex-1 justify-center items-center'>
        <Button
          variant={'link'}
          onPress={() => {
            setDialogVisible(true);
          }}
          > 
          <Text className='text-foreground'>
            Dialog Test
          </Text>
        </Button>
        <Button
          variant={'link'}
          onPress={() => {
            router.replace('/(protected)/(tabs)/home')
          }}
          > 
          <Text className='text-foreground'>
            Home
          </Text>
        </Button>

        <Dialog 
          visible={dialogVisible} 
          setVisible={setDialogVisible}        
          builder={(
            <ReusableDialog
              visible={dialogVisible} 
              setVisible={setDialogVisible}
              title='Add Note'
              content={(<Text>Dialog Content</Text>)}
              actions={[
                { title: 'Cancel', action: () => {}, variant: 'outline' },
                { title: 'Update', action: () => {}, variant: 'default' }
              ]}
            />
          )} 
        />
      </View>
    )
}

