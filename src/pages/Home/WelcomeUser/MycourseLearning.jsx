import classNames from 'classnames/bind';

import styles from './WellcomeUser.module.scss';
import CourseItem from './CourseItem';

const cx = classNames.bind(styles);
function MyCourseLearning() {
    return (
        <section className={cx('container')}>
            <div className={cx('myLearning-unit', 'grid-learning', 'grid-colum-learning', 'scroll-port')}>
                <div className={cx('scroll-item')}>
                    <div className={cx('course-wrraper')}>
                        <CourseItem />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyCourseLearning;
