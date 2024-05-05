import classNames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';

import styles from './Tab.module.scss';
import TimeLock from '~/components/TimeLock';
import { CourseHome, CourseMe } from '~/components/Course';
import Search from './Search';
import Tool from './Tool';

const cx = classNames.bind(styles);
function Tab() {
    const { tab } = useOutletContext();
    console.log(tab);
    return (
        <>
            {tab === 'learning' && (
                <div className={cx('my-courses__main-content', 'ud-container')}>
                    <TimeLock />
                    <div className={cx('my-courses__course-card-grid')}>
                        <CourseMe />
                    </div>
                </div>
            )}
            {tab === 'lists' && (
                <div className={cx('my-courses__main-content', 'ud-container')}>
                    <div className={cx('empty-state--container', 'empty-state--vertical')}>
                        <div>
                            <h3 className={cx('ud-heading-lg', 'empty-state--title')}>
                                Sắp xếp và truy cập vào các khóa học của bạn nhanh hơn!
                            </h3>
                            <p className={cx('ud-text-with-links')}>
                                <span>
                                    <a href="/home/my-courses" className={cx('ud-text-bold')}>
                                        Chuyển đến tab Tất cả khóa học
                                    </a>
                                    {''}để tạo danh sách.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {tab === 'wishlist' && (
                <div className={cx('my-courses__main-content', 'ud-container')}>
                    <Search />
                    <div className={cx('my-courses__course-card-grid')}>
                        <CourseHome wishList />
                        <CourseHome wishList />
                        <CourseHome wishList />
                    </div>
                </div>
            )}
            {tab === 'archived' && (
                <div className={cx('my-courses__main-content', 'ud-container')}>
                    <div className={cx('my-courses__course-card-grid')}>
                        <CourseMe />
                    </div>
                </div>
            )}
            {tab === 'learning-tools' && (
                <div className={cx('my-courses__main-content', 'ud-container')}>
                    <Tool />
                </div>
            )}
        </>
    );
}

export default Tab;
