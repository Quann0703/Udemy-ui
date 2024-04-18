import classNames from 'classnames/bind';

import styles from './WrapperList.module.scss';

const cx = classNames.bind(styles);
function WrapperList({ children }) {
    return <section className={cx('wrapper')}>{children}</section>;
}

export default WrapperList;
