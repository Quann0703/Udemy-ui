import classNames from 'classnames/bind';

import styles from './CourseCard.module.scss';
import Image from '~/components/Image';
import Rating from '~/components/Rating';
const cx = classNames.bind(styles);
function CourseCard() {
    return (
        <div className={cx('course-card-container', 'course-card-module--large')}>
            <div className={cx('course-card-img')}>
                <Image src="https://img-b.udemycdn.com/course/240x135/5620946_7c11.jpg" width="200px" height="135px" />
            </div>
            <div className={cx('course-card-main-content', 'has-price-text')}>
                <div>
                    <div className={cx('course-card-title')}>
                        <h3 className={cx('ud-heading-md', 'course-card-title-text')}>
                            <a href="/">
                                <font>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</font>
                            </a>
                        </h3>
                    </div>
                </div>
                <div className={cx('ud-text-xs')}>
                    <div className={cx('course-card-instructors')}>Jonas Schmedtmann</div>
                </div>
                <div className={cx('course-card-rating')}>
                    <span className={cx('star-rating-wrapper')}>
                        <span className={cx('ud-heading-sm', 'rating-number')}>4,7</span>
                        <Rating />
                    </span>
                    <span className={cx('text-xs', 'rating-review')}>(43.574)</span>
                </div>
                <div className={cx('course-card-price')}>
                    <div className={cx('total-fee')}>
                        <div className={cx('base-price-text', 'ud-heading-md')}>
                            <span>
                                <span>₫&nbsp;299.000</span>
                            </span>
                        </div>
                        <div className={cx('base-price-text', 'ud-text-sm', 'original-price', 'bundle-course-price')}>
                            <span>
                                <s>
                                    <span>₫&nbsp;1.899.000</span>
                                </s>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className={cx('course-card-badges')}>
                    <div className={cx('course-badges-inner')}>
                        <div className={cx('ud-badge', 'ud-heading-xs', 'badges-bestseller')}>Bán chạy nhất</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default CourseCard;
