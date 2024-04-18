import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import {
    ArticlesIcon,
    DownloadAbleIcon,
    LifeTimeIcon,
    MobileIcon,
    PlayOverlayIcon,
    TrophyIcon,
    VideoIcon,
    WishListIcon,
} from '~/components/Icons';
import { IncentiveItem } from '~/components/Incentive';
const cx = classNames.bind(styles);

const LISTINCENTIVE = [
    {
        id: 1,
        icon: (
            <VideoIcon
                classNames={cx('ud-icon', ' ud-icon-xsmall', ' ud-icon-color-neutral', ' ud-block-list-item-icon')}
            />
        ),
        content: '12 giờ video theo yêu cầu',
    },
    {
        id: 2,
        icon: (
            <ArticlesIcon
                classNames={cx('ud-icon', ' ud-icon-xsmall', ' ud-icon-color-neutral', ' ud-block-list-item-icon')}
            />
        ),
        content: '3 bài viết',
    },
    {
        id: 3,
        icon: (
            <DownloadAbleIcon
                classNames={cx('ud-icon', ' ud-icon-xsmall', ' ud-icon-color-neutral', ' ud-block-list-item-icon')}
            />
        ),
        content: '10 tài nguyên có thể tải xuống',
    },
    {
        id: 4,
        icon: (
            <MobileIcon
                classNames={cx('ud-icon', ' ud-icon-xsmall', ' ud-icon-color-neutral', ' ud-block-list-item-icon')}
            />
        ),
        content: 'Truy cập trên thiết bị di động và TV',
    },
    {
        id: 5,
        icon: (
            <LifeTimeIcon
                classNames={cx('ud-icon', ' ud-icon-xsmall', ' ud-icon-color-neutral', ' ud-block-list-item-icon')}
            />
        ),
        content: 'Quyền truy cập đầy đủ suốt đời',
    },
    {
        id: 6,
        icon: (
            <TrophyIcon
                classNames={cx('ud-icon', ' ud-icon-xsmall', ' ud-icon-color-neutral', ' ud-block-list-item-icon')}
            />
        ),
        content: 'Giấy chứng nhận hoàn thành',
    },
];
function SidebarContent({ data }) {
    return (
        <div className={cx('sidebar-container--content')}>
            <div className={cx('sidebar-container--content-group')}>
                <div className={cx('introduction-asset')}>
                    <div className={cx('intro-asset-wrapper')}>
                        <div className={cx('intro-asset')}>
                            <Button
                                secondary={cx('ud-btn-ghost')}
                                className={cx('ud-heading-md', 'intro-asset-placeholder')}
                            >
                                <span className={cx('intro-asset-img')}>
                                    <Image
                                        src="https://img-c.udemycdn.com/course/240x135/4993934_0107_4.jpg"
                                        className={cx('asset-img')}
                                    />
                                </span>
                                <span className={cx('intro-asset-overlay', 'intro-asset--gradient')}></span>
                                <span className={cx('ud-play-overlay')}>
                                    <PlayOverlayIcon classNames={cx('ud-icon', 'ud-icon-xxlarge')} />
                                </span>
                                <span className={cx('ud-heading-md', 'intro-asset-overlay-border', 'intro-asset-text')}>
                                    Xem trước khóa học này
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('purchase-section')}>
                    <div className={cx('purchase-section-container')}>
                        <div className={cx('generic-purchase-main')}>
                            <div className={cx('purchase-buy-box-main')}>
                                <div className={cx('buy-box')}>
                                    <div className={cx('buy-box-item')}>
                                        <div>
                                            <div className={cx('base-price-text')}>
                                                <div className={cx('price-part', 'ud-heading-xxl')}>
                                                    <span>
                                                        <span>₫&nbsp;1.699.000</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('buy-box-item', 'buy-box-discount')}></div>
                                    <div className={cx('buy-box-item', 'buy-box-add-to-cart')}>
                                        <div className={cx('add-to-cart-block')}>
                                            <Button
                                                size={cx('ud-btn-large')}
                                                className={cx('ud-heading-md', 'ud-btn-brand', 'add-to-cart')}
                                            >
                                                Thêm vào giỏ hàng
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                size={cx('ud-btn-large')}
                                                secondary={cx('ud-btn-secondary')}
                                                className={cx('ud-heading-md', 'ud-btn-icon', 'ud-btn-icon-large')}
                                            >
                                                <WishListIcon classNames={cx('style-icon')} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('buy-box-item', 'buy-box-buy-button')}>
                                        <Button
                                            primary={cx('ud-btn-primary')}
                                            size={cx('ud-btn-large')}
                                            className={cx('ud-heading-md', 'btn-express-checkout')}
                                        >
                                            <span>Mua ngay</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('purchase-local-incentive')}>
                                <div className={cx('money-back-guarantee')}>
                                    <span className="money-back">Đảm bảo hoàn tiền trong 30 ngày</span>
                                </div>
                            </div>
                            <div className={cx('purchase-available-coupons')}></div>
                            <div className={cx('purchase-local-incentive')}>
                                <div className={cx('incentives-hide-on-tablet')}>
                                    <div className={cx('incentives-container')}>
                                        <h2 className={cx('ud-heading-md', 'incentives-header')}>
                                            Khóa học này bao gồm:
                                        </h2>
                                        <ul className={cx('ud-unstyled-list', 'ud-block-list', 'incentive-list')}>
                                            {LISTINCENTIVE.map((item, index) => {
                                                return (
                                                    <IncentiveItem
                                                        key={index}
                                                        icon={item.icon}
                                                        content={item.content}
                                                    />
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('local-ctas')}>
                                <div className={cx('local-ctas-wrapper')}>
                                    <div className={cx('ctas-multiple')}>
                                        <Button
                                            ghost={cx('ud-btn-ghost')}
                                            size={cx('ud-btn-medium')}
                                            className={cx('ud-heading-sm', 'ud-link-underline', 'ud-link-neutral')}
                                        >
                                            <span>Chia sẻ</span>
                                        </Button>
                                        <Button
                                            href="/gift/course"
                                            ghost={cx('ud-btn-ghost')}
                                            size={cx('ud-btn-medium')}
                                            className={cx(
                                                'ud-heading-sm',
                                                'ud-link-underline',
                                                'ud-link-neutral',
                                                'btn-margin',
                                            )}
                                        >
                                            <span>Tặng khóa học này</span>
                                        </Button>
                                        <Button
                                            type="submit"
                                            ghost={cx('ud-btn-ghost')}
                                            size={cx('ud-btn-medium')}
                                            className={cx(
                                                'ud-heading-sm',
                                                'ud-link-underline',
                                                'ud-link-neutral',
                                                'btn-margin',
                                            )}
                                        >
                                            <span>Áp dụng coupon</span>
                                        </Button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarContent;
