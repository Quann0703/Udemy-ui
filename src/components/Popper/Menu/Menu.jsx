import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper', 'ud-unstyled-list', 'ud-block-list')}>
                    <div className={cx('menu-body')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <HeadlessTippy interactive offset={[10, 26]} delay={[0, 200]} placement="bottom-end" render={renderResult}>
            {children}
        </HeadlessTippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
};
export default Menu;
