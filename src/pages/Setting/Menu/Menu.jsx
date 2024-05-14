import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menu({ children }) {
    return (
        <>
            <ul className={cx('sidebar-list')}>{children}</ul>
        </>
    );
}

export default Menu;
