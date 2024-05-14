import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Progress.module.scss';

const cx = classNames.bind(styles);
function Progress({ children, hideOnClick = true }) {
    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div
                        className={cx(
                            'popover-module--popover',
                            'popover-module--popover-bottom-arrow',
                            'popover-module--popover-padding',
                        )}
                    >
                        <div className={cx('popover-module--inner')}>
                            <div className={cx('progress-popover-content--container')}>
                                <div className={cx('ud-heading-sm')}>Đã hoàn thành 0/21.</div>
                            </div>
                        </div>
                        <div
                            className={cx('popover-module--arrow', 'popover-module--arrow-bottom')}
                            style={{ top: -8, left: '155.006px' }}
                        />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <HeadlessTippy
            interactive
            offset={[10, 26]}
            delay={[0, 200]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            trigger="click"
            render={renderResult}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Progress;