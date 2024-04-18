import classNames from 'classnames/bind';

import styles from './Course.module.scss';

const cx = classNames.bind(styles);
function Course({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Course;
