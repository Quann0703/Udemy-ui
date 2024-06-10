import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './Video.module.scss';
import { VideoPlayer } from '~/components/Video';
import Heading from '~/components/Heading';
import MarkdownParser from '~/components/MarkdownParser';
import Powered from '~/components/Powered';

const cx = classNames.bind(styles);
function Video({
    allWidth,
    updatedAt,
    title,
    video = '',
    type = 'youtube',
    content = '',
    onStateChange,
    hasQuiz,
    onOpenQuiz,
}) {
    const formatDate = moment(updatedAt).format('DD/MM/YYYY');
    return (
        <div
            className={cx('wrapper', {
                'video-all-width': allWidth,
            })}
        >
            <div className={cx('video')}>
                <VideoPlayer title={title} video={video} type={type} onStateChange={onStateChange} />
            </div>
            <div className={cx('content')}>
                <div className={cx('content-top')}>
                    <Heading h1 title={title} updatedAt={`cập nhập ngày ${formatDate}`} />
                </div>
                {hasQuiz && (
                    <button className={cx('openQuizBtn', 'comment-btn')} outline rounded onClick={onOpenQuiz}>
                        Quiz
                    </button>
                )}
                {content && (
                    <MarkdownParser content={content} style={{ '--font-size': '1.6rem', '--line-height': 2 }} />
                )}
            </div>
            <Powered />
        </div>
    );
}

export default Video;
