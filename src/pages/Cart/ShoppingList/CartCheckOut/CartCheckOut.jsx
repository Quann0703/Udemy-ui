import classNames from 'classnames/bind';

import styles from './CartCheckOut.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function CartCheckOut() {
    return (
        <div>
            <div className={cx('purchase-buy-box-main')}>
                <div className={cx('buy-box')}>
                    <div className={cx('buy-box-item')}>
                        <div>
                            <div className={cx('total-price--total-label', 'ud-heading-md')}>Tổng:</div>
                            <div className={cx('base-price-text')}>
                                <div className={cx('price-part', 'ud-heading-xxl')}>
                                    <span>
                                        <span>₫&nbsp;1.699.000</span>
                                    </span>
                                </div>
                            </div>
                            <div className={cx('base-price-text', 'ud-text-md', 'base-original')}>
                                <div>
                                    <span>
                                        <s>
                                            <span>₫ 6.196.000</span>
                                        </s>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('buy-box-item', 'ud-text-md', 'base-price-text', 'buy-box-discount')}>
                        <span>Giảm 55%</span>
                    </div>
                    <div className={cx('buy-box-item', 'buy-box-add-to-cart')}>
                        <div className={cx('add-to-cart-block')}>
                            <Button
                                size={cx('ud-btn-large')}
                                className={cx('ud-heading-md', 'ud-btn-brand', 'add-to-cart')}
                            >
                                Thanh Toán
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCheckOut;
