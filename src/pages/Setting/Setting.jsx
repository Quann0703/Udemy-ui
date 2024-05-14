import classNames from 'classnames/bind';

import styles from './Setting.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NotificationIcon, PersonalIcon, SecurityIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Setting() {
    const location = useLocation();
    const [tab, setTab] = useState();
    useEffect(() => {
        const currentRoute = location.pathname.split('/')[location.pathname.split('/').length - 1];
        setTab(currentRoute);
    }, [location.pathname]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-wrapper')}>
                <h1 className={cx('heading')}>Cài đặt</h1>
                <Menu>
                    <MenuItem
                        title="Cài đặt tài khoản"
                        to="personal"
                        icon={<PersonalIcon classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-primary')} />}
                    />
                    <MenuItem
                        title="Bảo mật"
                        to="security"
                        icon={<SecurityIcon classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-primary')} />}
                    />
                    <MenuItem
                        title="Cài đặt thông báo"
                        to="notifications"
                        icon={
                            <NotificationIcon classNames={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-primary')} />
                        }
                    />
                </Menu>
            </div>
            <div className={cx('page-wrapper')}>
                <Outlet context={{ tab }} />
            </div>
        </div>
    );
}

export default Setting;
