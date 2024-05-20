import classNames from 'classnames/bind';
import MarkdownParser from '~/components/MarkdownParser';

import styles from './Lesson.module.scss';
// import LessonContentItem from './LessonContentItem';

const cx = classNames.bind(styles);
function LessonContent({ data }) {
    const { content } = data;
    return (
        <div className={cx('component-margin', 'what-you-will-learn')}>
            <h2 className={cx('ud-heading-xl', 'what-you-will-learn-title')}>Nội dung bài học</h2>
            <div className={cx('what-you-will-learn--content')}>
                <ul
                    className={cx(
                        'ud-unstyled-list',
                        'ud-block-list',
                        'learn-objectives-list',
                        'learn-objectives-list-two-column-layout',
                    )}
                >
                    <MarkdownParser content={content} style={{ '--font-size': '1.6rem', '--line-height': 2 }} />
                </ul>
            </div>
        </div>
    );
}

export default LessonContent;
