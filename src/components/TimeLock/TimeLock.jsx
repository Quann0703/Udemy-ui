import classNames from 'classnames/bind';

import styles from './TimeLock.module.scss';
import { AlarmIcon } from '../Icons';
import Button from '../Button';

const cx = classNames.bind(styles);
function TimeLock() {
    return (
        <div>
            <div className={cx('my-courses--learning-reminder-banner')}>
                <div>
                    <div
                        className={cx(
                            'alert-banner-module--alert-banner',
                            'alert-banner-module--alert-banner-information',
                        )}
                    >
                        <AlarmIcon classNames={cx('ud-icon', 'ud-icon-large', 'ud-icon-color-neutral')} />
                        <div style={{ flex: '1 1 0%' }}>
                            <div
                                className={cx(
                                    'alert-banner-module--text-frame',
                                    'alert-banner-module--text-frame-with-icon',
                                )}
                            >
                                <span className={cx('ud-sr-only')}>cảnh báo thông tin</span>
                                <h2 className={cx('ud-heading-md')}>Lên lịch thời gian học</h2>
                                <div className={cx('ud-text-sm', 'alert-banner-module--body')}>
                                    Học một chút mỗi ngày sẽ giúp bạn tích lũy kiến thức. Nghiên cứu cho thấy rằng những
                                    học viên biến việc học thành thói quen sẽ có nhiều khả năng đạt được mục tiêu hơn.
                                    Hãy dành thời gian để học và nhận lời nhắc bằng cách sử dụng trình lên lịch học tập.
                                </div>
                            </div>
                            <div className={cx('alert-banner-module--cta-container')}>
                                <Button
                                    size={cx('ud-btn-medium')}
                                    primary={cx('ud-btn-primary')}
                                    className={cx(' ud-heading-sm', 'alert-banner-module--button')}
                                >
                                    <span>Bắt đầu</span>
                                </Button>
                                <Button
                                    type="button"
                                    ghost={cx('ud-btn-ghost')}
                                    size={cx('ud-btn-medium')}
                                    className={cx('ud-heading-sm', 'ud-link-neutral', 'alert-banner-module--button')}
                                >
                                    <span>Hủy bỏ</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLock;
