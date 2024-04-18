import classNames from 'classnames/bind';

import styles from './Slick.module.scss';

const cx = classNames.bind(styles);
function Header({ title }) {
    return (
        <div className={cx('wrapper-header')}>
            <div className={cx('container')}>
                <h2 className={cx('ud-heading-xl', 'header-slick-course')}>{title}</h2>
            </div>
        </div>
    );
}

export default Header;
