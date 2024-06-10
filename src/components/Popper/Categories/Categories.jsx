import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Categories.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';
import Header from './Header';
import CategoryItem from './CategoryItem';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Categories({ items = [], children, hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    useEffect(() => {
        setHistory([{ data: items }]);
    }, [items]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <CategoryItem
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
                <PopperWrapper classNames={cx('menu-popper', 'ud-unstyled-list', 'ud-block-list')}>
                    <div className={cx('menu-body')}>
                        {history.length > 1 && <Header title="Chủ đề phổ biến" onBack={handdleBack} />}
                        {renderItems()}
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
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
        </div>
    );
}

export default Categories;
