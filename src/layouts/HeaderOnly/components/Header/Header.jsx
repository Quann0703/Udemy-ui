import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Udemy" />
                </Link>
            </div>
            <Button size={cx('ud-btn-medium')} ghost={cx('ud-btn-ghost')} className={cx('ud-heading-sm', 'color-btn')}>
                <span>Hủy</span>
            </Button>
        </div>
    );
}

export default Header;
