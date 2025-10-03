import Crypto from '../../assets/images/crypto.svg';
import Failure from '../../assets/images/failure.svg';
import Pending from '../../assets/images/pending.svg';
import Success from '../../assets/images/success.svg';

const svgs = {
    'success': Success,
    'pending': Pending,
    'failure': Failure,
    'crypto': Crypto
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