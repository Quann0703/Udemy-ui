import classNames from 'classnames/bind';

import styles from './Marketplace.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Marketplace({ total, makePayment }) {
    return (
        <div className={cx('check__out-summary')}>
            <div className={cx('check__out-content-wrapper')}>
                <section className={cx('pricing__summary')}>
                    <h2 className={cx('pricing__title', 'ud-heading-xl')}>Tóm tắt</h2>
                    <div className={cx('list__amount-summary', 'ud-text-sm')}>
                        <span>Giá gốc: </span>
                        <span className={cx('total__curent')}> ₫ {total}</span>
                    </div>
                    <div className={cx('discount__amount-summary', 'ud-text-sm')}>
                        <span>Mức chiết khấu: </span>
                        <span> -₫ 0</span>
                    </div>
                    <div className={cx('pricing__content-divider')} />
                    <div className={cx('total__amount-summary', 'ud-text-sm')}>
                        <span>Tổng tiền:</span>
                        <span className={cx('total__payment')}>₫ {total}</span>
                    </div>
                </section>
                <div className={cx('check__out-btn')}>
                    <div className={cx('checkout__button-wrapper')}>
                        <div className={cx('checkout__term', 'ud-text-xs')}>
                            <span>
                                Bằng việc hoàn tất giao dịch mua, bạn đồng ý với
                                <a
                                    href="https://www.udemy.com/terms/"
                                    className={cx('bold')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Điều khoản dịch vụ
                                </a>
                                này.
                            </span>
                        </div>
                        <div className={cx('checkout-btn-container')}>
                            <Button
                                size={cx('ud-btn-large')}
                                className={cx('ud-btn', 'ud-btn-brand', 'ud-heading-md', 'checkout-button')}
                                onClick={makePayment}
                            >
                                <span>Hoàn tất thanh toán</span>
                            </Button>
                        </div>
                        <div className={cx('checkout__term-refund', 'ud-text-xs')}>Đảm bảo hoàn tiền trong 30 ngày</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marketplace;
