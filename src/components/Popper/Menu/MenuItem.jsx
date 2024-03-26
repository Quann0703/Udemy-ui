import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            secondary={cx('ud-btn-ghost')}
            size={cx('ud-btn-large')}
            className={cx(
                'ud-text-sm',
                'ud-block-list-item',
                'ud-block-list-item-small',
                'ud-block-list-item-neutral',
                'menu-item',
            )}
            onClick={onClick}
        >
            <div className={cx('menu-content', 'ud-block-list-item-content')}>{data.title}</div>
            <div className={cx('sub-item')}>
                {data.icon && (
                    <>
                        <span>Tiếng việt</span>
                        <span className={cx('icon')}>{data.icon}</span>
                    </>
                )}
            </div>
        </Button>
    );
}
MenuItem.propType = {
    data: PropTypes.object,
};
export default MenuItem;
