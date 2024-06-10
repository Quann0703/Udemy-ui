import classNames from 'classnames/bind';

import styles from './Summary.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Summary({ carts }) {
    console.log(carts);
    return (
        <section className={cx('order-summary-container')}>
            <h2 className={cx('ud-heading-xl', 'summary-order-header')}>Thông tin đặt hàng</h2>
            <ul className={cx('order-items-list')}>
                {carts.map((item) => {
                    return (
                        <li className={cx('order-items-list-item')}>
                            <div className={cx('order-item-summary')}>
                                <Image
                                    src={item?.image}
                                    width={50}
                                    height={50}
                                    alt="buyables"
                                    className={cx('order-item-summary-img')}
                                    loading="lazy"
                                />
                                <span>{item?.title}</span>
                            </div>
                            <div className={cx('order-item-price')}>
                                <div className={cx('order-items-purchase-price')}>
                                    <span>₫&nbsp;{item?.price}</span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Summary;
