import classNames from 'classnames/bind';

import styles from './WellcomeUser.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { PlayIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function CourseItem() {
    return (
        <div className={cx('course-item-card', 'lecture__progress-card', 'lecture-boder')}>
            <div className={cx('lecture__progress-card-img')}>
                <Image src={images.coursejs} alt="" width="240" height="135" className={cx('lecture-img')} />
                <div className={cx('lecture-overlay')}></div>
                <span className={cx('ud-play-overlay')}>
                    <PlayIcon classNames={cx('ud-icon', 'ud-icon-xlarge')} />
                </span>
            </div>
            <div className={cx('lecture__progress-card-info')}>
                <div>
                    <div className={cx('ud-heading-xs', 'lecture-progress-card-title', 'lecture-title-with-more')}>
                        Web Design for Web Developers: Build Beautiful Websites!
                    </div>
                    <a
                        href="/course/web"
                        className={cx(
                            'ud-heading-md',
                            'lecture-title-with-more',
                            'lecture__progress-card-title-langue',
                            'color-title',
                            'lecture-title',
                        )}
                        alt=""
                    >
                        1. Welcome To This Course
                    </a>
                </div>
                <div>
                    <span className={cx('progress-text')}>
                        <span className={cx('ud-heading-xs')}>Bài giảng</span> •{' '}
                        <span className={cx('ud-text-xs')}>
                            <span>
                                Còn <span>2&nbsp;phút</span>
                            </span>
                        </span>
                    </span>
                    <div className={cx('lecture-progress-meter', 'ud-meter-wrapper', 'meter-wrapper')}>
                        <div
                            className={cx('ud-meter', 'meter-module-meter')}
                            aria-label="Hoàn thành 19%"
                            style={{ transform: 'scaleX(0.19)' }}
                        ></div>
                    </div>
                </div>
                <div className={cx('lecture__progress-more-btn')}></div>
            </div>
        </div>
    );
}

export default CourseItem;
