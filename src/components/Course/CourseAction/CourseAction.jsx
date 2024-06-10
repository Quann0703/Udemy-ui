import classNames from 'classnames/bind';

import styles from './CourseAction.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function CourseAction({ study, cart, wishlist, title, price, creator, image, slug }) {
    return (
        <div className={cx('panel-item', 'item-card-module')}>
            <div className={cx('item-card-img-wrapper')}>
                <Image
                    src={image}
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
                            {title}
                        </a>
                        <span className={cx('ud-heading-sm', 'card-module--start-learning')}>Bắt đầu học</span>
                    </>
                )}
                {(wishlist || cart) && (
                    <>
                        <Link
                            href={`/courses/${slug}`}
                            className={cx(
                                'ud-heading-sm',
                                'card-module--course-title',
                                'card-module--course-title-condensed',
                                'card-module--item-card-title',
                            )}
                        >
                            {title}
                        </Link>
                        <div className={cx('ud-text-xs', 'item-module--buyable-instructors')}>{creator}</div>
                        <div className={cx('base-price-text-module--container')}>
                            <div className={cx('base-price-text-module--price-part', 'ud-heading-sm')}>
                                <span>
                                    <span>₫&nbsp;{price}</span>
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
