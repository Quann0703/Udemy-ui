import classNames from 'classnames/bind';

import styles from './GroupField.module.scss';

const cx = classNames.bind(styles);
function GroupField({ children }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('ud-heading-xl', 'heading')}>Thông tin cá nhân</h2>
            {children}
        </div>
    );
}

export default GroupField;
