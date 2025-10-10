import Building from '../../assets/images/building.svg';
import Crypto from '../../assets/images/crypto.svg';
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

} as const;

export type SvgAsset = keyof typeof svgs;

export default function SvgIcon({name, size}: {name: SvgAsset, size?: number}) {

    const Icon = svgs[name];

    return (
        <Icon
            height={size}
            width={size}
        />
    );
}