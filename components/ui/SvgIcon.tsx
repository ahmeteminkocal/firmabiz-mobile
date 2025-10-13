import { Pressable } from 'react-native';
import Building from '../../assets/images/building.svg';
import Crypto from '../../assets/images/crypto.svg';
import Delete from '../../assets/images/delete.svg';
import Failure from '../../assets/images/failure.svg';
import Layers from '../../assets/images/layers.svg';
import Pending from '../../assets/images/pending.svg';
import Pin from '../../assets/images/pin.svg';
import Success from '../../assets/images/success.svg';
import Wired from '../../assets/images/wired.svg';

const svgs = {
    'success': Success,
    'pending': Pending,
    'failure': Failure,
    'crypto': Crypto,
    'pin': Pin,
    'wired': Wired,
    'building': Building,
    'layers': Layers,
    'delete': Delete

} as const;

export type SvgAsset = keyof typeof svgs;

export default function SvgIcon({name, size, onPress}: {name: SvgAsset, size?: number, onPress?: () => void}) {

    const Icon = svgs[name];
    if(onPress) {
        return (
          <Pressable onPress={onPress} hitSlop={4}>
              <Icon height={size} width={size}/>          
          </Pressable>
        )
      }
    return (
        <Icon
            height={size}
            width={size}
        />
    );
}