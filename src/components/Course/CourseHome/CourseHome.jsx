import classNames from 'classnames/bind';

import styles from './CourseHome.module.scss';
import Image from '~/components/Image';
import Rating from '~/components/Rating';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { WishListIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function CourseHome({ img, title, teacher, price, wishList }) {
    return (
        <div className={cx('course-home')}>
            <div className={cx('course-unit-container', 'course-module', 'course-container')}>
                <div className={cx('course-img')}>
                    <Image
                        src="https://img-b.udemycdn.com/course/240x135/5316412_a0dd.jpg"
                        alt=""
                        className={cx('course-img-module')}
                        width="240"
                        height="135"
                    />
                </div>
                <div className={cx('course-content', 'course-card-module')}>
                    <div>
                        <div className={cx('course-cart-title')}>
                            <h3 className={cx('ud-heading-md', 'course-title')}>
                                <Link to="/course/html-css-mater" className={cx('link-color')}>
                                    HTML CSS Master - Nắm chắc toàn bộ kiến thức HTML CSS A-Z
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className={cx('ud-text-xs')}>
                        <div className={cx('coures-introduct-list')}>Ujjwal Singh</div>
                    </div>
                    <div className={cx('course-rating')}>
                        <span className={cx('course-rating-wrapper')}>
                            <span className={cx('rating-number', 'ud-heading-sm')}>4,7</span>
                            <Rating />
                        </span>
                        <span className={cx('ud-text-xs', 'course-access')}>(169)</span>
                    </div>
                    <div className={cx('course-price')}>
                        <div className={cx('base-price', 'base-price-text')}>
                            <div className={cx('new-price', 'ud-heading-md')}>
                                <span>
                                    <span>₫&nbsp;249.000</span>
                                </span>
                            </div>
                            <div className={cx('old-price')}>
                                <div className={cx('old-price-text')}>
                                    <span>
                                        <s>
                                            <span>₫&nbsp;1.599.000</span>
                                        </s>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {wishList && (
                <Button
                    size={cx('ud-btn-medium')}
                    ghost={cx('ud-btn-ghost')}
                    className={cx(
                        'ud-heading-sm',
                        'ud-btn-icon',
                        'ud-btn-icon-medium',
                        'wishlisted-course-card--wishlist-button',
                    )}
                >
                    <WishListIcon classNames={cx('ud-icon', 'ud-icon-medium')} />
                </Button>
            )}
        </div>
    );
}

export default CourseHome;
