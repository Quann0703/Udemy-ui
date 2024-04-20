import classNames from 'classnames/bind';

import styles from './Describle.module.scss';
import { BulletIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Request() {
    return (
        <div className={cx('component-margin')}>
            <h2 className={cx('ud-heading-xl', 'request-title')}>Yêu cầu</h2>
            <ul className={cx('ud-unstyled-list', 'ud-block-list')}>
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
                        <BulletIcon
                            classNames={cx(
                                'ud-icon',
                                'ud-icon-xsmall',
                                'ud-icon-color-neutral',
                                'ud-block-list-item-icon',
                            )}
                        />
                        <div className={cx('request-content')}>No programming experience needed!</div>
                    </div>
                </li>
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
                        <BulletIcon
                            classNames={cx(
                                'ud-icon',
                                'ud-icon-xsmall',
                                'ud-icon-color-neutral',
                                'ud-block-list-item-icon',
                            )}
                        />
                        <div className={cx('request-content')}>No programming experience needed!</div>
                    </div>
                </li>
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
                        <BulletIcon
                            classNames={cx(
                                'ud-icon',
                                'ud-icon-xsmall',
                                'ud-icon-color-neutral',
                                'ud-block-list-item-icon',
                            )}
                        />
                        <div className={cx('request-content')}>No programming experience needed!</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Request;
