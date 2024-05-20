import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import Button from '~/components/Button';
import Rating from '~/components/Rating';
import { LanguageIcon, NewIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function MainContent({ data = [] }) {
    const { title, description, rating, rank, studentsCount, user = {}, updatedAt, language } = data;
    return (
        <div className={cx('course-landing-page__main-content')}>
            <div className={cx('ud-text-sm', 'clp-lead')}>
                <h1 className={cx('ud-heading-xl', 'clp-lead__title')}>{title}</h1>
                <div className={cx('ud-text-md', 'clp-lead__headline')}>{description}</div>
                <div className={cx('clp-lead__badge-ratings-enrollment')}>
                    <div className={cx('clp-lead__element-item', 'clp-lead__element-item--row')}>
                        <Button
                            href="/"
                            size={cx('ud-btn-large')}
                            className={cx('ud-btn-link', 'ud-heading-md', 'ud-text-sm', 'rating-wrapper')}
                        >
                            <span className={cx('star-rating-wrapper')}>
                                <span className={cx('ud-heading-sm', 'rating-number')}>{rating}</span>
                                <Rating />
                            </span>
                            <span>{`(${rank} xếp hạng)`}</span>
                            <div className={cx('enrollment')}>{studentsCount}</div>
                        </Button>
                    </div>
                </div>
                <div className={cx('clp-lead__element-item')}>
                    <div className={cx('instructor-links')}>
                        <span className={cx('instructor-links-name')}>
                            <span className={cx('ud-text-sm')}>Được tạo bởi</span>
                            <Button
                                href="/"
                                size={cx('ud-btn-large')}
                                className={cx('ud-btn-link', 'ud-heading-md', 'ud-text-sm', 'ud-instructor-links')}
                            >
                                <span>{user.fullName}</span>
                            </Button>
                        </span>
                    </div>
                </div>
                <div className={cx('clp-lead__element-meta')}>
                    <div className={cx('clp-lead__element-item')}>
                        <div className={cx('last-update-date')}>
                            <NewIcon
                                classNames={cx(
                                    'ud-icon',
                                    'ud-icon-xsmall',
                                    'ud-icon-color-neutral',
                                    'last-update-date__icon',
                                )}
                            />
                            <span>Lần cập nhật gần đây nhất {updatedAt}</span>
                        </div>
                    </div>
                    <div className={cx('clp-lead__element-item', 'clp-lead__locale')}>
                        <LanguageIcon classNames={cx('ud-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'icon')} />
                        <font _mstmutation="1">{language}</font>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
