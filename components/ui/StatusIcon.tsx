import Failure from '../../assets/images/failure.svg';
import Pending from '../../assets/images/pending.svg';
import Success from '../../assets/images/success.svg';

const statusMap = {
    'success': Success,
    'pending': Pending,
    'failure': Failure,
};

export default function StatusIcon({status, size}: {status: 'success' | 'pending' | 'failure', size?: number}) {

    const Icon = statusMap[status];

    return (
        <Icon
            height={size?? 24}
            width={size?? 24}
        />
    );
}