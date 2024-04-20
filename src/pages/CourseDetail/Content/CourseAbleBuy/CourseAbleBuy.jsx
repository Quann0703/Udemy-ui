import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './CourseAbleBuy.module.scss';
import { CourseComparison } from '~/components/Course';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function CourseAbleBuy() {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow((prev) => {
            return !prev;
        });
    };
    return (
        <div className={cx('component-margin', 'wrapper')}>
            <h2 className={cx('ud-heading-xl')}>Học viên cũng mua</h2>
            <div className={cx('course-comparison--show-more', 'show-more-module-container')}>
                <div
                    className={cx('show-more-content', {
                        'height-limit': show,
                    })}
                >
                    <div>
                        <div className={cx('course-comparison-list')}>
                            <CourseComparison />
                            <CourseComparison />
                            <CourseComparison />
                            <CourseComparison />
                            <CourseComparison />
                        </div>
                    </div>
                </div>
                <Button
                    size={cx('ud-btn-medium')}
                    secondary={cx('ud-btn-secondary')}
                    className={cx('ud-heading-sm', 'show-more-full-width')}
                    onClick={handleShow}
                >
                    <span>
                        {show && <span className="show-more-btn">Hiện thêm</span>}
                        {!show && <span className="show-less-btn">Ẩn bớt </span>}
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default CourseAbleBuy;
