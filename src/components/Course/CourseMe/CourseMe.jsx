import classNames from 'classnames/bind';

import styles from './CourseMe.module.scss';
import Image from '~/components/Image';
import { MoreIcon, PlayOverlayIcon } from '~/components/Icons';
import Button from '~/components/Button';
import More from '~/components/More';
import { useState } from 'react';

const cx = classNames.bind(styles);
function CourseMe() {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore((prev) => {
            return !prev;
        });
    };
    return (
        <div>
            <div className={cx('enrolled-course-card--container')}>
                <div className={cx('course-card-module--container', 'course-card-module--medium')}>
                    <div className={cx('course-card-module--image-container')}>
                        <Image
                            src="https://img-c.udemycdn.com/course/240x135/473160_d929_3.jpg"
                            alt=""
                            srcSet="https://img-c.udemycdn.com/course/240x135/473160_d929_3.jpg 1x, https://img-c.udemycdn.com/course/480x270/473160_d929_3.jpg 2x"
                            className={cx('enrolled-course-card--image')}
                            width={240}
                            height={135}
                            loading="lazy"
                        />
                        <div className={cx('enrolled-course-card--image-overlay')}>
                            <span className={cx('ud-play-overlay', 'enrolled-course-card--play-overlay')}>
                                <PlayOverlayIcon
                                    classNames={cx('ud-icon', 'ud-icon-xlarge', 'ud-focus-visible-target')}
                                />
                            </span>
                        </div>
                    </div>
                    <div className={cx('course-card-module--main-content')}>
                        <div>
                            <div className={cx('course-card-title-module--title')}>
                                <h3 className={cx('ud-heading-md', 'course-card-title-module--course-title')}>
                                    <a href="/course-dashboard-redirect/?course_id=473160" className={cx('color-text')}>
                                        Web Design for Web Developers: Build Beautiful Websites!
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className={cx('ud-text-xs')}>
                            <div className={cx('course-card-instructors-module--instructor-list')}>
                                Jonas Schmedtmann
                            </div>
                        </div>
                        <div className={cx('course-card-module--price-text-container')} />
                        <div className={cx('course-card-module--badges-container')}>
                            <div className={cx('course-card-badges-module--course-badges')} />
                        </div>
                        <div
                            aria-hidden="true"
                            className={cx(
                                'enrolled-course-card--meter',
                                'ud-meter-wrapper',
                                'meter-module--meter-wrapper',
                            )}
                        >
                            <div
                                className={cx('ud-meter', 'meter-module--meter')}
                                aria-label="Hoàn thành 0%"
                                data-purpose="meter"
                                style={{ transform: 'scaleX(0)' }}
                            />
                        </div>
                        <div className={cx('ud-text-xs', 'enrolled-course-card--progress-and-rating')}>
                            BẮT ĐẦU KHÓA HỌC
                        </div>
                    </div>
                </div>
                <div className={cx('enrolled-course-card--options-menu')}>
                    <div className={cx('popper-module--popper')}>
                        <Button
                            size={cx('ud-btn-small')}
                            className={cx(
                                'ud-btn',
                                'ud-btn-white-solid',
                                'ud-heading-sm',
                                'ud-btn-icon',
                                'ud-btn-icon-small',
                                'margin-btn',
                            )}
                            onClick={handleShowMore}
                        >
                            <MoreIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                        </Button>
                        {showMore && (
                            <div
                                className={cx('popper-module--popper-content')}
                                style={{ top: '100%', right: 0, width: '26rem' }}
                            >
                                <More />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseMe;