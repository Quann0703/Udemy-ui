import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ tab }) {
    return (
        <nav className={cx('wrapper')}>
            <div
                className={cx('carousel-module--scroll-port', 'carousel-module--grid', 'carousel-module--scroll-lock')}
            >
                {tab.map((item, index) => {
                    return <MenuItem key={index} title={item.title} to={item.to} />;
                })}
            </div>
        </nav>
    );
}

export default Menu;
