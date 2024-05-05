import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import Profile from '../Group/Profile';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ isUser, children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handdleBack = () => {
        setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
    };
    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper', 'ud-unstyled-list', 'ud-block-list')}>
                    <div className={cx('menu-body')}>
                        {history.length > 1 && <Header title="Language" onBack={handdleBack} />}
                        {history.length === 1 && isUser && (
                            <Profile fullName="Trần văn quân" email="tranquan07112003@gmail.com" />
                        )}
                        {renderItems()}
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <HeadlessTippy
            interactive
            offset={[10, 26]}
            delay={[0, 200]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
        >
            {children}
        </HeadlessTippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};
export default Menu;
