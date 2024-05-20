import classNames from 'classnames/bind';

import styles from './LessonList.module.scss';
import Button from '~/components/Button';
import { DetailLesson, LessonItem } from '.';
import { useState } from 'react';

const cx = classNames.bind(styles);
function LessonList({ data }) {
    const [showLesson, setShowLesson] = useState(false);
    const show = () => {
        setShowLesson((prev) => {
            return !prev;
        });
    };
    const { step = [] } = data;
    console.log(data);
    return (
        <div className={cx('component-margin')}>
            <span className={cx('in-page-offset-anchor')}></span>
            <div>
                <h2 className={cx('ud-heading-xl', 'curriculum-header')}>Nội dung khóa học</h2>
                <div className={cx('curriculum-sub-header')}>
                    <div className={cx('ud-text-sm')}>
                        <span className={cx('curriculum-content-length')}>
                            • {step.length} bài giảng •
                            {/* <span>
                                <span>12&nbsp;giờ&nbsp;15&nbsp;phút</span> tổng thời lượng
                            </span> */}
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
                    <LessonItem amountLesson={step.length} clickLesson={show}>
                        {showLesson && <DetailLesson data={step} />}
                    </LessonItem>
                </div>
            </div>
        </div>
    );
}

export default LessonList;
