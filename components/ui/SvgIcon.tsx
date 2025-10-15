import { Pressable } from 'react-native';
import Delete from '../../assets/images/icons/actions/delete.svg';
import PasswordHide from '../../assets/images/icons/actions/passwordHide.svg';
import PasswordShow from '../../assets/images/icons/actions/passwordShow.svg';
import Crypto from '../../assets/images/icons/crypto/crypto.svg';
import Building from '../../assets/images/icons/navigation/building.svg';
import Layers from '../../assets/images/icons/navigation/layers.svg';
import Wired from '../../assets/images/icons/navigation/wired.svg';
import Failure from '../../assets/images/icons/status/failure.svg';
import Pending from '../../assets/images/icons/status/pending.svg';
import Success from '../../assets/images/icons/status/success.svg';
import Pin from '../../assets/images/icons/ui/pin.svg';

const svgs = {
    'success': Success,
    'pending': Pending,
    'failure': Failure,
    'crypto': Crypto,
    'pin': Pin,
    'wired': Wired,
    'building': Building,
    'layers': Layers,
    'delete': Delete,
    'passwordShow': PasswordShow,
    'passwordHide': PasswordHide

} as const;

export type SvgAsset = keyof typeof svgs;

export default function SvgIcon({name, size, color, onPress}: {name: SvgAsset, size?: number, color?: string, onPress?: () => void}) {

    const Icon = svgs[name];
    if(onPress) {
        return (
          <Pressable onPress={onPress} hitSlop={4}>
              <Icon height={size} width={size} color={color}/>          
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