import { THEME } from '@/lib/theme';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from './icon';

type FABProps = {
    onPress: () => void;
    children?: React.ReactNode;
};

const FAB: React.FC<FABProps> = ({ onPress, children }) => (
    <View className='absolute right-6 bottom-6'>
        <Pressable
            onPress={onPress}
            className='rounded-full bg-secondary items-center justify-center shadow-drop p-3'
        >
            {children?? <Icon name='plus' width={24} height={24} color={THEME.background}/>}
        </Pressable>
    </View>
);

export default FAB;