import classNames from 'classnames/bind';

import styles from './LessonList.module.scss';
import DetailLessonItem from './DetailLessonItem';

const cx = classNames.bind(styles);
function DetailLesson({ data }) {
    return (
        <div className={cx('accordion-panel-module-content-wrapper')}>
            <div className={cx('ud-accordion-panel-content', '')}>
                <ul className={cx('ud-unstyled-list', 'ud-block-list')}>
                    <DetailLessonItem video />
                    <DetailLessonItem doc title="hello" />
                    <DetailLessonItem doc title="hello" />
                    <DetailLessonItem doc title="hello" />
                </ul>
            </div>
        </div>
    );
}

export default DetailLesson;
