import classNames from 'classnames/bind';

import styles from './Tab.module.scss';
import Button from '~/components/Button';
import { AddCircleSolidIcon, CalenderIcon, LifeTimeIcon, MoreIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Tool() {
    return (
        <div className={cx('learning-tools--learning-tools-container')}>
            <h2 className={cx('ud-heading-xl')}>Nhắc nhở học tập</h2>
            <h3 className={cx('ud-heading-lg')}>Sự kiện trên lịch</h3>
            <p>
                Học một chút mỗi ngày sẽ giúp bạn tích lũy kiến thức. Nghiên cứu cho thấy rằng những học viên biến việc
                học thành thói quen sẽ có nhiều khả năng đạt được mục tiêu hơn. Hãy dành thời gian để học và nhận lời
                nhắc bằng cách sử dụng trình lên lịch học tập.
            </p>
            <div className={cx('ud-text-xs', 'learning-tools--subtext')}>
                Cần sử dụng Lịch Google, Lịch Apple hoặc Outlook
            </div>
            <Button
                size={cx('ud-btn-large')}
                className={cx('ud-btn-brand', 'ud-heading-md', 'learning-tools--create-button')}
            >
                <span>Lên lịch thời gian học</span>
                <AddCircleSolidIcon classNames={cx('ud-icon', 'ud-icon-small')} />
            </Button>
            <div className={cx('learning-tools--reminder-container', 'learning-tools--scheduled')}>
                <div className={cx('learning-tools--learning-reminder-container')}>
                    <CalenderIcon
                        classNames={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral', 'learning-tools--icon')}
                    />
                    <div>
                        <h4 className={cx('ud-heading-md', 'learning-tools--title')}>Nhắc nhở học tập</h4>
                        <div />
                        <div>
                            <div>Hàng ngày</div>
                        </div>
                        <div>
                            <span style={{ display: 'block' }}>
                                Thông báo nhắc <span>30 phút</span> trước
                            </span>
                        </div>
                        <div>
                            <span style={{ display: 'block' }}>
                                <span>30 phút</span> vào 21:00
                            </span>
                        </div>
                        <div />
                        <div>
                            <span className={cx('learning-tools--icon-container--hTdsl')}>
                                <LifeTimeIcon
                                    classNames={cx(
                                        'ud-icon',
                                        'ud-icon-small',
                                        'ud-icon-color-neutral',
                                        'learning-tools--icon',
                                    )}
                                />
                            </span>
                            <span>Đã thêm vào Google Calendar</span>
                        </div>
                    </div>
                    <div className={cx('popper-module--popper', 'learning-tools--dropdown')}>
                        <Button
                            size={cx('ud-btn-large')}
                            className={cx('ud-btn-link', 'ud-heading-md', 'learning-tools--more-button')}
                            aria-expanded="false"
                            tabIndex={0}
                        >
                            <MoreIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                        </Button>
                        {/* <div
                            id="u66-popper-content--101"
                            aria-labelledby="u66-dropdown-trigger--99"
                            className={cx('popper-module--popper-content--XE9z5')}
                            data-testid="popup"
                            style={{ top: '100%', right: 0, width: '20rem' }}
                        >
                            <div className={cx('popper-module--animation-wrapper--tM0UK')}>
                                <div
                                    className={cx('dropdown-module--menu---dCM1 dropdown-module--dropdown-menu--7Qc2I')}
                                    style={{ maxHeight: '28rem' }}
                                >
                                    <ul className={cx('ud-unstyled-list ud-block-list')}>
                                        <li>
                                            <button
                                                type="button"
                                                data-purpose="edit-button"
                                                className={cx(
                                                    'ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral',
                                                )}
                                            >
                                                <div className={cx('ud-block-list-item-content')}>Chỉnh sửa</div>
                                            </button>
                                        </li>
                                        <li>
                                            <a href='/'
                                                className={cx(
                                                    'ud-btn ud-btn-large ud-btn-ghost ud-text-sm learning-tools--google-button--XgUU5 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral',
                                                )}
                                            >
                                                <div className={cx('ud-block-list-item-content')}>
                                                    <button
                                                        type="button"
                                                        className={cx('ud-btn ud-btn-large ud-btn-link ud-text-sm')}
                                                    >
                                                        <svg
                                                            aria-label="Google"
                                                            role="img"
                                                            focusable="false"
                                                            className={cx(
                                                                'ud-icon ud-icon-small google-calendar-button--google-icon--dCGLl',
                                                            )}
                                                        >
                                                            <use xlinkHref="#icon-google" />
                                                        </svg>
                                                        <span
                                                            className={cx('google-calendar-button--google-link--vlnRv')}
                                                        >
                                                            Xóa
                                                        </span>
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className={cx(
                                                    'ud-btn ud-btn-large ud-btn-ghost ud-text-sm learning-tools--google-button--XgUU5 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral',
                                                )}
                                            >
                                                <div className={cx('ud-block-list-item-content')}>
                                                    <button
                                                        type="button"
                                                        className={cx('ud-btn ud-btn-large ud-btn-link ud-text-sm')}
                                                    >
                                                        <svg
                                                            aria-label="Google"
                                                            role="img"
                                                            focusable="false"
                                                            className={cx(
                                                                'ud-icon ud-icon-small google-calendar-button--google-icon--dCGLl',
                                                            )}
                                                        >
                                                            <use xlinkHref="#icon-google" />
                                                        </svg>
                                                        <span
                                                            className={cx('google-calendar-button--google-link--vlnRv')}
                                                        >
                                                            Đồng bộ hóa lại
                                                        </span>
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tool;
