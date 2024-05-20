import classNames from 'classnames/bind';

import styles from './LessonList.module.scss';
import Button from '~/components/Button';
import { ExpandIcon } from '~/components/Icons';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function LessonItem({ children, clickLesson, amountLesson = 0 }) {
    const [rotate, setRotate] = useState(true);
    useEffect(() => {
        if (clickLesson) {
            setRotate((prev) => {
                return !prev;
            });
        }
    }, [clickLesson]);
    return (
        <div className={cx('accordion-panel-module', 'section-panel')}>
            <div
                className={cx(
                    'ud-btn',
                    'ud-btn-large',
                    'ud-btn-link',
                    'ud-heading-md',
                    'ud-accordion-panel-toggler',
                    'accordion-panel-module',
                    'accordion-panel-module-outer',
                )}
                onClick={clickLesson}
            >
                <h3 className={cx('ud-accordion-panel-heading')}>
                    <Button
                        size={cx('ud-btn-large')}
                        className={cx('ud-btn-link', 'ud-heading-md', 'accordion-module-panel-toggler')}
                    >
                        <span className={cx('ud-accordion-panel-title')}>
                            <span className={cx('section-title')}>Danh sách khóa học</span>
                            <span className={cx('section-content', 'ud-text-sm ')}>
                                {amountLesson} bài giảng •{/* <span>26 phút</span> */}
                            </span>
                        </span>
                    </Button>
                </h3>
                <ExpandIcon
                    classNames={cx(
                        'ud-icon ud-icon-small ud-icon-color-neutral',
                        'accordion-panel-module--expand-icon',
                        {
                            'accordion-panel-module--expand-icon-rotate': rotate,
                        },
                    )}
                />
            </div>
            {children}
        </div>
    );
}

export default LessonItem;
