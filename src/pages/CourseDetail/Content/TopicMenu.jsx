import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function TopicMenu({ data = {} }) {
    // Kiểm tra dữ liệu trước khi truy cập thuộc tính
    const categoryTitle = data.field?.category?.title;
    const fieldTitle = data.field?.title;
    const topicTitle = data.title;

    return (
        <div className={cx('course-landing-page__main-content', 'course-landing-page__topic-menu')}>
            <div className={cx('topic-menu', 'topic-list', 'ud-breadcrumb', 'topic-menu-condensed')}>
                {categoryTitle && (
                    <>
                        <Link to="/" className={cx('ud-heading-sm', 'link-topic')}>
                            {categoryTitle}
                        </Link>
                        <span
                            className={cx('ud-breadcrumb-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-icon')}
                        >
                            <FontAwesomeIcon icon={faAngleRight} className={cx('width-icon')} />
                        </span>
                    </>
                )}
                {fieldTitle && (
                    <>
                        <Link to="/" className={cx('ud-heading-sm', 'link-topic')}>
                            {fieldTitle}
                        </Link>
                        <span
                            className={cx('ud-breadcrumb-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-icon')}
                        >
                            <FontAwesomeIcon icon={faAngleRight} className={cx('width-icon')} />
                        </span>
                    </>
                )}
                {topicTitle && (
                    <>
                        <Link to="/" className={cx('ud-heading-sm', 'link-topic')}>
                            {topicTitle}
                        </Link>
                        <span
                            className={cx('ud-breadcrumb-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-icon')}
                        >
                            <FontAwesomeIcon icon={faAngleRight} className={cx('width-icon')} />
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopicMenu;
