import classNames from 'classnames/bind';

import styles from './LessonList.module.scss';
import Button from '~/components/Button';
import { DetailLesson, LessonItem } from '.';
import { useState } from 'react';

const cx = classNames.bind(styles);
function LessonList() {
    const [showLesson, setShowLesson] = useState(false);
    const show = () => {
        setShowLesson((prev) => {
            return !prev;
        });
    };
    return (
        <div className={cx('component-margin')}>
            <span className={cx('in-page-offset-anchor')}></span>
            <div>
                <h2 className={cx('ud-heading-xl', 'curriculum-header')}>Nội dung khóa học</h2>
                <div className={cx('curriculum-sub-header')}>
                    <div className={cx('ud-text-sm')}>
                        <span className={cx('curriculum-content-length')}>
                            8 phần • 71 bài giảng •
                            <span>
                                <span>12&nbsp;giờ&nbsp;15&nbsp;phút</span> tổng thời lượng
                            </span>
                        </span>
                    </div>
                    <Button
                        ghost={cx('ud-btn-ghost')}
                        size={cx('ud-btn-medium')}
                        className={cx('ud-heading-sm', 'color-btn')}
                    >
                        <span>Mở rộng tất cả các phần</span>
                    </Button>
                </div>
                <div>
                    <LessonItem clickLesson={show}>{showLesson && <DetailLesson />}</LessonItem>
                </div>
            </div>
        </div>
    );
}

export default LessonList;
