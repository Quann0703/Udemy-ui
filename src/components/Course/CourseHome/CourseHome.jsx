import classNames from 'classnames/bind';

import styles from './CourseHome.module.scss';
import Image from '~/components/Image';
import Rating from '~/components/Rating';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { WishListIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function CourseHome({ data, wishList }) {
    if (!data) return null;
    const fullName = data.user?.fullName;
    return (
        <div className={cx('course-home')}>
            <Link
                to={`/courses/${data.slug}`}
                className={cx('course-unit-container', 'course-module', 'course-container')}
            >
                <div className={cx('course-img')}>
                    <Image
                        src={data.image}
                        alt={data.title}
                        className={cx('course-img-module')}
                        width="240"
                        height="135"
                    />
                </div>
                <div className={cx('course-content', 'course-card-module')}>
                    <div>
                        <div className={cx('course-cart-title')}>
                            <h3 className={cx('ud-heading-md', 'course-title')}>{data.title}</h3>
                        </div>
                    </div>
                    <div className={cx('ud-text-xs')}>
                        <div className={cx('course-introduct-list')}>{fullName}</div>
                    </div>
                    <div className={cx('course-rating')}>
                        <span className={cx('course-rating-wrapper')}>
                            <span className={cx('rating-number', 'ud-heading-sm')}>{data.rating}</span>
                            <Rating />
                        </span>
                        <span className={cx('ud-text-xs', 'course-access')}>({data.rank})</span>
                    </div>
                    <div className={cx('course-price')}>
                        <div className={cx('base-price', 'base-price-text')}>
                            <div className={cx('new-price', 'ud-heading-md')}>
                                <span>
                                    <span>₫&nbsp;{data.price}</span>
                                </span>
                            </div>
                            {data.oldPrice && (
                                <div className={cx('old-price')}>
                                    <div className={cx('old-price-text')}>
                                        <span>
                                            <s>
                                                <span>₫&nbsp;{data.oldPrice}</span>
                                            </s>
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
            {wishList && (
                <Button
                    size="medium"
                    ghost
                    className={cx(
                        'ud-heading-sm',
                        'ud-btn-icon',
                        'ud-btn-icon-medium',
                        'wishlisted-course-card--wishlist-button',
                    )}
                >
                    <WishListIcon className={cx('ud-icon', 'ud-icon-medium')} />
                </Button>
            )}
        </div>
    );
}

export default CourseHome;
