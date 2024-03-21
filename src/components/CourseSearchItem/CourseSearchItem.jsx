import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CourseSearchItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function CourseSearchItem() {
    return (
        <Link
            to={`/`}
            className={cx(
                'wrapper',
                'ud-block-list-item',
                'ud-block-list',
                'ud-search-form-autocomplete-suggestion-block-list-item',
            )}
        >
            <Image
                className={cx('img-course')}
                src="https://img-c.udemycdn.com/course/50x50/4467252_61d1_2.jpg"
                alt="react"
                width="32"
                height="32"
            />

            <div className={cx('course-info', 'ud-search-form-autocomplete-suggestion-content')}>
                <p className={cx('name', 'ud-search-form-autocomplete-suggestion-content', 'ud-heading-md')}>
                    React Ultimate - React.JS Cơ Bản Từ Z Đến A Cho Beginners
                </p>
                <div className={cx('detail', 'ud-search-form-autocomplete-suggestion-details')}>
                    <span className={cx('ud-heading-xs')}>Khóa học</span>
                    <span className={cx('ud-text-xs', 'ud-search-form-autocomplete-suggestion-instructor-name')}>
                        Hỏi Dân IT với Eric .
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default CourseSearchItem;
