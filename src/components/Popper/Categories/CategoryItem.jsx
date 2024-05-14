import classNames from 'classnames/bind';

import styles from './Categories.module.scss';
import Button from '~/components/Button';
import { NextIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function CategoryItem({ data, onClick }) {
    const classes = cx(
        'ud-text-sm',
        'ud-block-list-item',
        'ud-block-list-item-small',
        'ud-block-list-item-neutral',
        'menu-item',
        {
            separate: data.separate,
        },
    );
    return (
        <Button
            to={data.to}
            secondary={cx('ud-btn-ghost')}
            size={cx('ud-btn-large')}
            className={classes}
            onClick={onClick}
        >
            <div className={cx('menu-content', 'ud-block-list-item-content')}>{data.title}</div>
            <div className={cx('sub-item')}>
                <>
                    <span className={cx('icon')}>
                        <NextIcon classNames={cx('ud-icon', 'ud-icon-xsmall')} />
                    </span>
                </>
            </div>
        </Button>
    );
}

export default CategoryItem;
