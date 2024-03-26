import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss';
import config from '~/config';
import Search from '../Search';
import Button from '~/components/Button';
import { CartIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import Group from '~/components/Popper/Group';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Ngôn ngữ',
        typeLanguage: 'Tiếng việt',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        title: 'Cài đặt',
        to: '/setting',
    },
    {
        title: 'Trợ Giúp',
        to: '/help,',
    },
];
const UDEMYBUSINESS = {
    text: 'Cho phép nhóm của bạn truy cập vào hơn 25.000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc.',
    textBtn: 'Dùng thử Udemy Business',
};

const UDEMYTEACH = {
    text: 'Turn what you know into an opportunity and reach millions around the world.',
    textBtn: 'Tìm Hiểu Thêm',
};

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            //handle change language
            break;
        default:
    }
};
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
                    <Group content={UDEMYBUSINESS}>
                        <div>
                            <Button
                                secondary={cx('ud-btn-ghost')}
                                btnText
                                size={cx('ud-btn-large')}
                                className={cx('ud-heading-md')}
                            >
                                <span className={cx('nav-text', 'ud-text-sm')}>Udemy Business</span>
                            </Button>
                        </div>
                    </Group>

                    <Group content={UDEMYTEACH}>
                        <div>
                            <Button
                                secondary={cx('ud-btn-ghost')}
                                btnText
                                size={cx('ud-btn-large')}
                                className={cx('ud-heading-md')}
                            >
                                <span className={cx('nav-text', 'ud-text-sm')}>Giảng dạy trên Udemy</span>
                            </Button>
                        </div>
                    </Group>

                    <Button
                        secondary={cx('ud-btn-ghost')}
                        btnText
                        size={cx('ud-btn-large')}
                        className={cx('ud-heading-md', 'ud-btn-icon-large', 'ud-btn-icon')}
                    >
                        <CartIcon className={cx('ud-icon', 'ud-icon-color-neutral')} />
                    </Button>

                    <Button secondary={cx('ud-btn-primary')} size={cx('ud-btn-medium')} className={cx('ud-heading-sm')}>
                        <span>sign in</span>
                    </Button>
                    <Button primary={cx('ud-btn-secondary')} size={cx('ud-btn-medium')} className={cx('ud-heading-sm')}>
                        <span>sign up</span>
                    </Button>

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
