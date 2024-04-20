import classNames from 'classnames/bind';

import styles from './LessonList.module.scss';
import { ArticlesIcon, VideoIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function DetailLessonItem({ video, doc, preview, duration = '0:00', title = 'introduction' }) {
    return (
        <li>
            <div
                className={cx('ud-block-list-item', 'ud-block-list-item-small', 'ud-text-sm', 'lesson-item', {
                    'ud-block-list-item-link': video,
                    'ud-block-list-item-neutral': doc,
                    preview: preview,
                })}
            >
                {video && (
                    <VideoIcon
                        classNames={cx('ud-block-list-item-icon', 'ud-icon ud-icon-xsmall', 'ud-icon-color-neutral')}
                    />
                )}
                {doc && (
                    <ArticlesIcon
                        classNames={cx('ud-block-list-item-icon', 'ud-icon ud-icon-xsmall', 'ud-icon-color-neutral')}
                    />
                )}
                <div className={cx('ud-block-list-item-content')}>
                    <div>
                        <div className={cx('section-row')}>
                            <span className={cx('section-item-title')}>{title}</span>
                        </div>
                    </div>
                    {preview && (
                        <button type="button" className={cx('ud-btn ud-btn-large ud-btn-link ud-text-sm')}>
                            <span className={cx('section--preview-text')}>Preview</span>
                        </button>
                    )}
                    <span className={cx('section--hidden-on-mobile')} style={{ flex: '1 1 0%' }}></span>
                    <span className={cx('section--hidden-on-mobile', 'section-duration')}>{duration}</span>
                </div>
            </div>
        </li>
    );
}

export default DetailLessonItem;
