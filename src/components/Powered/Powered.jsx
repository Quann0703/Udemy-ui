import classNames from 'classnames/bind';

import styles from './Powered.module.scss';
import { HeartIcon } from '../Icons';

const cx = classNames.bind(styles);
function Powered() {
    return (
        <p className={cx('wrapper')}>
            Made with
            <HeartIcon classNames={cx('heart', 'ud-icon', 'ud-icon-xxsmall')} />
            <span className={cx('dot')}>·</span>
            Powered by Udemy
        </p>
    );
}

export default Powered;
