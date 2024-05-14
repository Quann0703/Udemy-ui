import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon }) {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('item', {
                    active: nav.isActive,
                })
            }
        >
            {icon}
            <span>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
