import classNames from 'classnames/bind';

import styles from './Preview.module.scss';
import { PlayIcon } from '../Icons';

const cx = classNames.bind(styles);
function PreviewItem({ isCurrent, title, duration, image, onVideo }) {
    return (
        <button
            className={cx('ud-custom-focus-visible', 'course-preview--preview-row', {
                'course-preview--current-preview-row': isCurrent,
            })}
            onClick={onVideo}
        >
            <div className={cx('course-preview--preview-thumbnail-wrapper')}>
                <img
                    src={image}
                    alt=""
                    width={640}
                    height={480}
                    className={cx('course-preview--preview-thumbnail')}
                    loading="lazy"
                />
            </div>
            <PlayIcon classNames={cx('ud-icon', 'ud-icon-small', 'course-preview--icon')} />
            <div className={cx('ud-heading-sm', 'ud-focus-visible-target', 'course-preview--preview-title')}>
                {title}
            </div>
            <div className={cx('ud-heading-xs')}>{duration}:19</div>
        </button>
    );
}

export default PreviewItem;
