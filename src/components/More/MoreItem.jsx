import classNames from 'classnames/bind';

import styles from './More.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);
function MoreItem({ icon, title }) {
    return (
        <Button
            size={cx('ud-btn-large')}
            ghost={cx('ud-btn-ghost')}
            style={{ margin: 0 }}
            className={cx('ud-text-sm', 'ud-block-list-item', 'ud-block-list-item-small', 'ud-block-list-item-neutral')}
        >
            {icon}
            <div className={cx('ud-block-list-item-content')}>{title}</div>
        </Button>
    );
}

export default MoreItem;
