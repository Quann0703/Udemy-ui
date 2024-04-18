import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function TopicMenu() {
    return (
        <div className={cx('course-landing-page__main-content', 'course-landing-page__topic-menu')}>
            <div className={cx('topic-menu', 'topic-list', 'ud-breadcrumb', 'topic-menu-condensed')}>
                <a href="/" className={cx('ud-heading-sm', 'link-topic')}>
                    Develop
                </a>
                <span className={cx('ud-breadcrumb-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-icon')}>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('width-icon')} />
                </span>
                <a href="/" className={cx('ud-heading-sm', 'link-topic')}>
                    Web Development
                </a>
                <span className={cx('ud-breadcrumb-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-icon')}>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('width-icon')} />
                </span>
                <a href="/" className={cx('ud-heading-sm', 'link-topic')}>
                    Full stack web development
                </a>
                <span className={cx('ud-breadcrumb-icon', 'ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-icon')}>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('width-icon')} />
                </span>
            </div>
        </div>
    );
}

export default TopicMenu;
