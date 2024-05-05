import classNames from 'classnames/bind';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Me.module.scss';
import Menu from './Study/Menu';

const cx = classNames.bind(styles);
const ME = [
    { title: 'Tất cả khóa học', to: 'learning' },
    { title: 'Danh sách khóa học', to: 'lists' },
    { title: 'Mong muốn', to: 'wishlist' },
    { title: 'Đã lưu chữ', to: 'archived' },
    { title: 'Công cụ học tập', to: 'learning-tools' },
];
function Me() {
    const location = useLocation();
    const [tab, setTab] = useState();
    useEffect(() => {
        const currentRoute = location.pathname.split('/')[location.pathname.split('/').length - 1];
        setTab(currentRoute);
    }, [location.pathname]);
    return (
        <div className={cx('my-course-app')}>
            <div className={cx('ud-container')}>
                <h1 className={cx('ud-heading-serif-xxxl', 'app--page-title')}>Học tập</h1>
            </div>
            <div className={cx('tab-container')}>
                <div className={cx('ud-tabs-nav-buttons', 'tabs-module--tabs-nav-buttons')}>
                    <Menu tab={ME} />
                </div>
                <div className={cx('ud-tab-content', 'tabs-module--tab-content')}>
                    <Outlet context={{ tab }} />
                </div>
            </div>
        </div>
    );
}

export default Me;
