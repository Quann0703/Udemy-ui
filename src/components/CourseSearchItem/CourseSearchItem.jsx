import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CourseSearchItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function CourseSearchItem({ to, title, image, creator }) {
    return (
        <Link
            to={to}
            className={cx(
                'wrapper',
                'ud-block-list-item',
                'ud-block-list',
                'ud-search-form-autocomplete-suggestion-block-list-item',
            )}
        >
            <Image className={cx('img-course')} src={image} alt="react" width="50" height="50" />

            <div className={cx('course-info', 'ud-search-form-autocomplete-suggestion-content')}>
                <p className={cx('name', 'ud-search-form-autocomplete-suggestion-content', 'ud-heading-md')}>{title}</p>
                <div className={cx('detail', 'ud-search-form-autocomplete-suggestion-details')}>
                    <span className={cx('ud-heading-xs')}>Khóa học</span>
                    <span className={cx('ud-text-xs', 'ud-search-form-autocomplete-suggestion-instructor-name')}>
                        {creator}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default CourseSearchItem;
