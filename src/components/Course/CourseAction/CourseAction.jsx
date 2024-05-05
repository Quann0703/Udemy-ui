import classNames from 'classnames/bind';

import styles from './CourseAction.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function CourseAction({ study, cart, wishlist }) {
    return (
        <div className={cx('panel-item', 'item-card-module')}>
            <div className={cx('item-card-img-wrapper')}>
                <Image
                    src="https://img-c.udemycdn.com/course/240x135/473160_d929_3.jpg"
                    width={240}
                    height={135}
                    loading="lazy"
                    _mstvisible={7}
                    className={cx('card-module--course-image')}
                />
            </div>
            <div className={cx('card-module--course-info')}>
                {study && (
                    <>
                        <a
                            href="/course-dashboard-redirect/?course_id=473160"
                            className={cx(
                                'ud-heading-sm',
                                'card-module--course-title',
                                'card-module--course-title-condensed',
                                'card-module--item-card-title',
                            )}
                        >
                            Web Design for Web Developers: Build Beautiful Websites!
                        </a>
                        <span className={cx('ud-heading-sm', 'card-module--start-learning')}>Bắt đầu học</span>
                    </>
                )}
                {(wishlist || cart) && (
                    <>
                        <a
                            href="/course-dashboard-redirect/?course_id=473160"
                            className={cx(
                                'ud-heading-sm',
                                'card-module--course-title',
                                'card-module--course-title-condensed',
                                'card-module--item-card-title',
                            )}
                        >
                            Web Design for Web Developers: Build Beautiful Websites!
                        </a>
                        <div className={cx('ud-text-xs', 'item-module--buyable-instructors')}>Jonas Schmedtmann</div>
                        <div className={cx('base-price-text-module--container')}>
                            <div className={cx('base-price-text-module--price-part', 'ud-heading-sm')}>
                                <span>
                                    <span>₫&nbsp;2.399.000</span>
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CourseAction;
