import classNames from 'classnames/bind';

import styles from './CourseComparision.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PeopleIcon, WishListIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function CourseComparison() {
    return (
        <div>
            <div className={cx('course__container')}>
                <div className={cx('course__main-content')}>
                    <a href="/bootcamp" className={cx('main-content-title', 'ud-heading-md ')}>
                        The Web Developer Bootcamp 2024
                    </a>
                    <div className={cx('main-content-info')}>
                        <div className={cx('content-info-badges')}>
                            <div className={cx('badges-bestseller', 'ud-badge', 'ud-heading-xs')}>Bán chạy nhất</div>
                        </div>
                        <div className={cx('content-info-information', 'ud-text-sm')}>
                            <span className={cx('information-time')}>Tổng số 77 giờ •</span>
                            <span className={cx('information-day')}>Đã cập nhật 10/2023</span>
                        </div>
                    </div>
                </div>
                <div className={cx('course__content-total')}>
                    <span className={cx('total-star')}>
                        <span className={cx('ud-heading-sm', 'rating-number')}>4.8</span>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#f69c08' }} />
                    </span>
                    <span className={cx('ud-text-sm', 'total-student')}>
                        <PeopleIcon classNames={cx('ud-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral')} />
                        <span>5.536</span>
                    </span>
                    <div className={cx('total-fee')}>
                        <div className={cx('base-price-text', 'ud-heading-sm')}>
                            <span>
                                <span>₫&nbsp;249.000</span>
                            </span>
                        </div>
                        <div className={cx('base-price-text', 'ud-text-xs', 'original-price')}>
                            <span>
                                <s>
                                    <span>₫&nbsp;1.699.000</span>
                                </s>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('course__img-wrapper')}>
                    <Image
                        src="https://img-b.udemycdn.com/course/240x135/5620946_7c11.jpg"
                        alt=""
                        className={cx('course-comparison--course-image')}
                        loading="lazy"
                    />
                </div>
                <a href="/" className={cx('comparison-card-link')}>
                    {' '}
                </a>
                <div className={cx('course__wishlish-container')}>
                    <div>
                        <Button
                            size={cx('ud-btn-medium')}
                            secondary={cx('ud-btn-secondary')}
                            rounded={cx('ud-btn-round')}
                            className={cx('ud-heading-sm', 'ud-btn-icon', 'ud-btn-icon-medium', 'ud-btn-icon-round')}
                        >
                            <WishListIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseComparison;
