import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/img';
import { Link } from 'react-router-dom';
import config from '~/config';
import Search from '../Search';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-left')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home} className={cx('logo-link')}>
                            <img src={images.logo} alt="Udemy" />
                        </Link>
                    </div>
                    <div className={cx('category', 'ud-text-sm')}>
                        <span className={cx('category-text')}>Thể Loại</span>
                    </div>
                </div>
                <Search />
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
