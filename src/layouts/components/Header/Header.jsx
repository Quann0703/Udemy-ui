import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss';
import config from '~/config';
import Search from '../Search';
import Button from '~/components/Button';
import { CartIcon, NotificationIcon, WishListIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import Group from '~/components/Popper/Group';
import Image from '~/components/Image';
import * as categoryService from '~/services/categoryService';
import { useEffect, useState } from 'react';
import Categories from '~/components/Popper/Categories';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Cài đặt',
        to: '/setting',
        separate: true,
    },
    {
        title: 'Ngôn ngữ',
        typeLanguage: 'Tiếng việt',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        separate: true,
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
        title: 'Trợ Giúp',
        to: '/help,',
        separate: true,
    },
];
const ACTION = {
    UDEMYBUSINESS: {
        text: 'Cho phép nhóm của bạn truy cập vào hơn 25.000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc.',
        textBtn: 'Dùng thử Udemy Business',
    },
    UDEMYTEACH: {
        text: 'Turn what you know into an opportunity and reach millions around the world.',
        textBtn: 'Tìm Hiểu Thêm',
    },
    STUDY: {
        textBtn: 'Đi tới học tập',
    },
    CART: {
        textBtn: 'Chuyển đên giỏ hàng',
    },
    WISHLIST: {
        textBtn: 'Đến danh sách mong ước',
    },
};

function Header() {
    const [categories, setCategories] = useState();
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    useEffect(() => {
        categoryService.getCategories().then((res) => {
            const newData = res.map((item) => {
                return {
                    ...item,
                    children: {
                        data: [
                            ...item.field.map((item) => {
                                return {
                                    ...item,
                                    children: { data: [...item.topic] },
                                };
                            }),
                        ],
                    },
                };
            });
            setCategories(newData);
        });
    }, []);

    const currentUser = true;
    const userMenu = [
        {
            title: 'Học tập',
            to: '/me/learning',
        },
        {
            title: 'Giỏ hàng',
            to: '/cart',
        },
        {
            title: 'Mong muốn',
            to: '/me/wishlist',
        },
        {
            title: 'Giảng dạy trên Udemy',
            to: '/',
        },
        {
            title: 'Thông báo',
            to: '/',
            separate: true,
        },
        {
            title: 'Tin nhắn',
            to: '/',
        },
        ...MENU_ITEMS,
        {
            title: 'Đăng xuất',
            to: '/',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Udemy" />
                    </Link>
                </div>

                <Categories items={categories}>
                    <div>
                        <Button
                            secondary={cx('ud-btn-ghost')}
                            btnText
                            size={cx('ud-btn-large')}
                            className={cx('ud-heading-md')}
                        >
                            <span className={cx('category-text', 'ud-text-sm')}>Thể Loại</span>
                        </Button>
                    </div>
                </Categories>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Group linkTo business content={ACTION.UDEMYBUSINESS}>
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

                            <Group linkTo business content={ACTION.UDEMYTEACH}>
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

                            <Group linkTo study content={ACTION.STUDY}>
                                <div>
                                    <Button
                                        secondary={cx('ud-btn-ghost')}
                                        btnText
                                        size={cx('ud-btn-large')}
                                        className={cx('ud-heading-md')}
                                    >
                                        <span className={cx('nav-text', 'ud-text-sm')}>Học tập</span>
                                    </Button>
                                </div>
                            </Group>

                            <Group linkTo cart content={ACTION.CART}>
                                <div>
                                    <Button
                                        secondary={cx('ud-btn-ghost')}
                                        btnText
                                        to="/cart"
                                        size={cx('ud-btn-large')}
                                        className={cx('ud-heading-md', 'ud-btn-icon-large', 'ud-btn-icon')}
                                    >
                                        <CartIcon
                                            className={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral')}
                                        />
                                        <span
                                            className={cx(
                                                'desktop-header-module--dropdown-counter-badge',
                                                'notification-badge-module--ud-notification-badge',
                                                'notification-badge-module--ud-notification-counter',
                                            )}
                                            title="4 items in the cart"
                                        >
                                            4
                                        </span>
                                    </Button>
                                </div>
                            </Group>

                            <Group linkTo wishlist content={ACTION.WISHLIST}>
                                <div>
                                    <Button
                                        secondary={cx('ud-btn-ghost')}
                                        btnText
                                        size={cx('ud-btn-large')}
                                        className={cx('ud-heading-md', 'ud-btn-icon-large', 'ud-btn-icon')}
                                    >
                                        <WishListIcon
                                            classNames={cx(
                                                'ud-icon',
                                                'ud-icon-medium',
                                                'ud-icon-color-neutral',
                                                'transparent-icon',
                                            )}
                                        />
                                    </Button>
                                </div>
                            </Group>

                            <Group notification>
                                <div>
                                    <Button
                                        secondary={cx('ud-btn-ghost')}
                                        btnText
                                        size={cx('ud-btn-large')}
                                        className={cx('ud-heading-md', 'ud-btn-icon-large', 'ud-btn-icon')}
                                    >
                                        <NotificationIcon
                                            classNames={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral')}
                                        />
                                    </Button>
                                </div>
                            </Group>
                        </div>
                    ) : (
                        <>
                            <Group linkTo business content={ACTION.UDEMYBUSINESS}>
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

                            <Group linkTo business content={ACTION.UDEMYTEACH}>
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

                            <Group linkTo cart content={ACTION.CART}>
                                <div>
                                    <Button
                                        secondary={cx('ud-btn-ghost')}
                                        btnText
                                        to="/cart"
                                        size={cx('ud-btn-large')}
                                        className={cx('ud-heading-md', 'ud-btn-icon-large', 'ud-btn-icon')}
                                    >
                                        <CartIcon
                                            className={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral')}
                                        />
                                        <span
                                            className={cx(
                                                'desktop-header-module--dropdown-counter-badge',
                                                'notification-badge-module--ud-notification-badge',
                                                'notification-badge-module--ud-notification-counter',
                                            )}
                                            title="4 items in the cart"
                                        >
                                            4
                                        </span>
                                    </Button>
                                </div>
                            </Group>

                            <Button
                                primary={cx('ud-btn-primary')}
                                size={cx('ud-btn-medium')}
                                className={cx('ud-heading-sm')}
                            >
                                <span>sign in</span>
                            </Button>
                            <Button
                                secondary={cx('ud-btn-secondary')}
                                size={cx('ud-btn-medium')}
                                className={cx('ud-heading-sm')}
                            >
                                <span>sign up</span>
                            </Button>
                        </>
                    )}
                    <Menu isUser={currentUser} items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://img-c.udemycdn.com/user/75x75/245266240_ca52.jpg"
                                alt="nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
