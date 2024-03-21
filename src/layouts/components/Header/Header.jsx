import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import Search from '../Search';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Udemy" />
                    </Link>
                </div>

                <Button
                    secondary={cx('ud-btn-ghost')}
                    btnText
                    size={cx('ud-btn-large')}
                    className={cx('ud-heading-md')}
                >
                    <span className={cx('category-text', 'ud-text-sm')}>Thể Loại</span>
                </Button>
                <Search />
                <div className={cx('actions')}>
                    <Button
                        secondary={cx('ud-btn-ghost')}
                        btnText
                        size={cx('ud-btn-large')}
                        className={cx('ud-heading-md')}
                    >
                        <span className={cx('nav-text', 'ud-text-sm')}>Udemy Business</span>
                    </Button>

                    <Button
                        secondary={cx('ud-btn-ghost')}
                        btnText
                        size={cx('ud-btn-large')}
                        className={cx('ud-heading-md')}
                    >
                        <span className={cx('nav-text', 'ud-text-sm')}>Giảng dạy trên Udemy</span>
                    </Button>

                    <Button secondary={cx('ud-btn-primary')} size={cx('ud-btn-medium')} className={cx('ud-heading-sm')}>
                        <span>sign in</span>
                    </Button>
                    <Button primary={cx('ud-btn-secondary')} size={cx('ud-btn-medium')} className={cx('ud-heading-sm')}>
                        <span>sign up</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
