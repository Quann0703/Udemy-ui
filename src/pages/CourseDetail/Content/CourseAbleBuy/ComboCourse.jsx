import classNames from 'classnames/bind';

import styles from './CourseAbleBuy.module.scss';
import { ExpandPlusIcon } from '~/components/Icons';
import { CourseCard } from '~/components/Course';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function ComboCourse() {
    return (
        <div className={cx('component-margin', 'wrapper')}>
            <div className={cx('combo-border-bundle')}>
                <div className={cx('combo-unit-title')}>
                    <div className={cx('title-unit-container')}>
                        <h2 className={cx('ud-heading-xl', 'unit-title')}>Thường xuyên được mua cùng nhau</h2>
                    </div>
                </div>
                <div className={cx('combo-unit-course')}>
                    <CourseCard />
                    <div className={cx('unit-course-container')}>
                        <div className={cx('unit-module-plus-wrapper')}>
                            <ExpandPlusIcon classNames={cx('ud-icon', 'ud-icon-large', 'ud-icon-color-neutral')} />
                        </div>
                        <CourseCard />
                    </div>
                    <div className={cx('unit-course-container')}>
                        <div className={cx('unit-module-plus-wrapper')}>
                            <ExpandPlusIcon classNames={cx('ud-icon', 'ud-icon-large', 'ud-icon-color-neutral')} />
                        </div>
                        <CourseCard />
                    </div>
                </div>
                <div className={cx('combo-unit-footer')}>
                    <div className={cx('add-to-cart')}>
                        <Button
                            size={cx('ud-btn-large')}
                            className={cx(
                                'ud-btn-brand',
                                'ud-heading-md',
                                'add-to-cart',
                                'bundle-unit-module--add-to-cart',
                            )}
                            style={{ width: '100%' }}
                        >
                            Thêm tất cả vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComboCourse;
