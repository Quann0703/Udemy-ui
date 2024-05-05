import classNames from 'classnames/bind';

import styles from './Payment.module.scss';
import { Address, Marketplace, PaymentMethod, Summary } from './CheckOut';

const cx = classNames.bind(styles);
function Payment() {
    return (
        <div className={cx('ud-main-content')}>
            <div className={cx('marketplace-checkout-app')}>
                <div className={cx('marketplace-main-container')}>
                    <main className={cx('marketplace-checkout-overview')}>
                        <h1 className={cx('ud-heading-serif-xxl', 'marketplace-checkout-header')}>Thanh toán</h1>
                        <Address />
                        <PaymentMethod />
                        <Summary />
                    </main>
                    <aside className={cx('marketplace-check-summary')}>
                        <Marketplace />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Payment;
