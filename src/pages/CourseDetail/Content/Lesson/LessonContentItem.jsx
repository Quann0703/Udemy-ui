import classNames from 'classnames/bind';

import styles from './Lesson.module.scss';
import { TickIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function LessonContentItem() {
    return (
        <li>
            <div
                className={cx(
                    'ud-block-list-item',
                    'ud-block-list-item-small',
                    'ud-block-list-item-tight',
                    'ud-block-list-item-neutral',
                    'ud-text-sm',
                )}
            >
                <TickIcon
                    classNames={cx('ud-icon ud-icon-xsmall', 'ud-icon-color-neutral', 'ud-block-list-item-icon')}
                />
                <div className={cx('ud-block-list-item-content')}>
                    <span className={cx('learn--objective-item')}>
                        You WILL build a fun web application in just a few days! No experience needed
                    </span>
                </div>
            </div>
        </li>
    );
}

export default LessonContentItem;
