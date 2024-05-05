import classNames from 'classnames/bind';

import styles from './Group.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('panel-menu-module--section-heading', 'panel-menu-module--gap-bottom')}>
            <div className={cx('ud-heading-lg', 'panel-menu-module--section-heading-title')}>Thông báo.</div>
            <a
                className={cx('ud-heading-sm', 'panel-menu-module--section-heading-link')}
                href="/user/edit-notifications/"
            >
                Cài đặt
            </a>
        </div>
    );
}

export default Header;
