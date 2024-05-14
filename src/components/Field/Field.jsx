import classNames from 'classnames/bind';

import styles from './Field.module.scss';

const cx = classNames.bind(styles);
function Field({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Field;
