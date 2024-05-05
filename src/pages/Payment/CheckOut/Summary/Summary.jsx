import classNames from 'classnames/bind';

import styles from './Summary.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Summary() {
    return (
        <section className={cx('order-summary-container')}>
            <h2 className={cx('ud-heading-xl', 'summary-order-header')}>Thông tin đặt hàng</h2>
            <ul className={cx('order-items-list')}>
                <li className={cx('order-items-list-item')}>
                    <div className={cx('order-item-summary')}>
                        <Image
                            src="https://img-c.udemycdn.com/course/100x100/3812184_290c.jpg"
                            width={50}
                            height={50}
                            alt="buyables"
                            className={cx('order-item-summary-img')}
                            loading="lazy"
                        />
                        <span>Javascript cho người mới bắt đầu</span>
                    </div>
                    <div className={cx('order-item-price')}>
                        <div className={cx('order-items-purchase-price')}>
                            <span>₫&nbsp;1.299.000</span>
                        </div>
                    </div>
                </li>
                <li className={cx('order-items-list-item')}>
                    <div className={cx('order-item-summary')}>
                        <Image
                            src="https://img-c.udemycdn.com/course/100x100/3812184_290c.jpg"
                            width={50}
                            height={50}
                            alt="buyables"
                            className={cx('order-item-summary-img')}
                            loading="lazy"
                        />
                        <span>Javascript cho người mới bắt đầu</span>
                    </div>
                    <div className={cx('order-item-price')}>
                        <div className={cx('order-items-purchase-price')}>
                            <span>₫&nbsp;1.299.000</span>
                        </div>
                    </div>
                </li>
                <li className={cx('order-items-list-item')}>
                    <div className={cx('order-item-summary')}>
                        <Image
                            src="https://img-c.udemycdn.com/course/100x100/3812184_290c.jpg"
                            width={50}
                            height={50}
                            alt="buyables"
                            className={cx('order-item-summary-img')}
                            loading="lazy"
                        />
                        <span>Javascript cho người mới bắt đầu</span>
                    </div>
                    <div className={cx('order-item-price')}>
                        <div className={cx('order-items-purchase-price')}>
                            <span>₫&nbsp;1.299.000</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Summary;
