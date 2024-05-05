import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ title, to }) {
    return (
        <div className={cx('carousel-module--scroll-item')}>
            <NavLink
                to={to}
                className={(nav) =>
                    cx('ud-nav-button-container', 'tabs-module--nav-button-container', {
                        // active: nav.isActive,
                        'nav-button-container-active': nav.isActive,
                    })
                }
            >
                <h2 className={cx('hover-title')}>
                    <Button
                        size={cx('ud-btn-large')}
                        ghost={cx('ud-btn-ghost')}
                        className={cx('ud-heading-md', 'ud-nav-button', 'tabs-module--nav-button')}
                    >
                        <span>{title}</span>
                    </Button>
                </h2>
            </NavLink>
        </div>
    );
}

export default MenuItem;
