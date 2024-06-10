import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { PreviousIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function LoginBack({ onBack }) {
    return (
        <div className={cx('back-btn')} onClick={onBack}>
            <PreviousIcon classNames={cx('ud-icon', 'ud-icon-large', 'ud-icon-color-neutral')} />
        </div>
    );
}

export default LoginBack;
