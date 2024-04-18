import classNames from 'classnames/bind';

import styles from './Incentive.module.scss';

const cx = classNames.bind(styles);
function IncentiveItem({ icon, content }) {
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
                {icon}
                <div className={cx('ud-block-list-item-content')}>
                    <span>{content}</span>
                </div>
            </div>
        </li>
    );
}

export default IncentiveItem;
