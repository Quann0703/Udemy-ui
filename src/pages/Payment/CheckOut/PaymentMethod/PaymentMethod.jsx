import classNames from 'classnames/bind';

import styles from './PaymentMethod.module.scss';
import { LockIcon, TickIcon, WarningIcon } from '~/components/Icons';
import PaymentMethodItem from './PaymentMethodItem';
import { useState } from 'react';

const cx = classNames.bind(styles);
function PaymentMethod() {
    const [showOptions, setShowOptions] = useState({
        visa: false,
        payment: false,
        paybal: false,
    });

    const handleToggleOption = (option) => {
        setShowOptions((prevOptions) => ({
            ...prevOptions,
            [option]: !prevOptions[option],
        }));
    };
    return (
        <section className={cx('payment__method-container')}>
            <div className={cx('payment__method-title')}>
                <h2 className={cx('ud-heading-xl')}>Phương thức thanh toán</h2>
                <p className={cx('ud-text-xs ', 'payment__text')}>
                    <span className={cx('span-text')}>Kết nối bảo mật</span>
                    <LockIcon classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral')} />
                </p>
            </div>
            <div className={cx('payment__content')}>
                <div>
                    <PaymentMethodItem visa onClick={() => handleToggleOption('visa')}>
                        {showOptions.visa && (
                            <div className={cx('accordion-panel-module--content-wrapper')}>
                                <div className={cx('ud-accordion-panel-content', 'accordion-panel-module--content')}>
                                    <div className={cx('payment-credit-card--payment-credit-card')}>
                                        <section>
                                            <h4 className={cx('ud-heading-sm')}>Tên trên thẻ</h4>
                                            <p className={cx('ud-text-sm')}>TRAN VAN QUAN</p>
                                        </section>
                                        <section>
                                            <h4 className={cx('ud-heading-sm')}>Số thẻ</h4>
                                            <p className={cx('ud-text-sm')}>**** 8077</p>
                                        </section>
                                        <section>
                                            <h4 className={cx('ud-heading-sm')}>Ngày hết hạn</h4>
                                            <p className={cx('ud-text-sm')}>3/2028</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        )}
                    </PaymentMethodItem>
                    <PaymentMethodItem card onClick={() => handleToggleOption('payment')}>
                        {showOptions.payment && (
                            <div className={cx('accordion-panel-module--content-wrapper')}>
                                <div className={cx('ud-accordion-panel-content', 'accordion-panel-module--content')}>
                                    <div className={cx('stripe-payment-method-credit')}>
                                        <div className={cx('ud-form-group', 'stripe-payment-row')}>
                                            <label className={cx('ud-form-label', 'ud-heading-sm')}>
                                                Tên trên thẻ
                                                <span className={cx('ud-text-xs', 'ud-form-label-tag')}>Bắt buộc</span>
                                            </label>
                                            <input
                                                placeholder="Tên trên thẻ"
                                                className={cx('ud-text-input', 'ud-text-input-large', 'ud-text-md')}
                                            />
                                        </div>
                                        <div className={cx('ud-form-group', 'stripe-payment-row')}>
                                            <label className={cx('ud-form-label', 'ud-heading-sm')}>
                                                Số thẻ
                                                <span className={cx('ud-text-xs', 'ud-form-label-tag')}>Bắt buộc</span>
                                            </label>
                                            <input
                                                placeholder="028329 823782 2978"
                                                className={cx('ud-text-input', 'ud-text-input-large', 'ud-text-md')}
                                            />
                                        </div>
                                        <div className={cx('stripe-payment-input-container')}>
                                            <div className={cx('ud-form-group', 'stripe-payment-row')}>
                                                <label className={cx('ud-form-label', 'ud-heading-sm')}>
                                                    Ngày hết hạn
                                                    <span className={cx('ud-text-xs', 'ud-form-label-tag')}>
                                                        Bắt buộc
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder="MM/YY"
                                                    className={cx('ud-text-input', 'ud-text-input-large', 'ud-text-md')}
                                                />
                                            </div>
                                            <div className={cx('ud-form-group', 'stripe-payment-row')}>
                                                <label className={cx('ud-form-label', 'ud-heading-sm')}>
                                                    CVC/CVV
                                                    <span className={cx('ud-text-xs', 'ud-form-label-tag')}>
                                                        Bắt buộc
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder="CVC"
                                                    className={cx('ud-text-input', 'ud-text-input-large', 'ud-text-md')}
                                                />
                                            </div>
                                        </div>
                                        <label className={cx('ud-toggle-input-container', 'ud-text-sm')}>
                                            <input
                                                className={cx('ud-sr-only', 'ud-real-toggle-input')}
                                                type="checkbox"
                                            />
                                            <TickIcon
                                                classNames={cx(
                                                    'ud-icon',
                                                    'ud-icon-xsmall',
                                                    'ud-fake-toggle-input',
                                                    'ud-fake-toggle-checkbox',
                                                )}
                                            />
                                            Lưu thẻ này an toàn cho giao dịch mua hàng sau này của tôi
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </PaymentMethodItem>
                    <PaymentMethodItem paybal onClick={() => handleToggleOption('paybal')}>
                        {showOptions.paybal && (
                            <div className={cx('accordion-panel-module--content-wrapper')}>
                                <div className={cx('ud-accordion-panel-content', 'accordion-panel-module--content')}>
                                    <div className={cx('ud-text-md', 'paypal-payment-method-content-detail')}>
                                        Để hoàn tất giao dịch, chúng tôi sẽ chuyển bạn đến các máy chủ an toàn của
                                        PayPal.
                                    </div>
                                    <div className={cx('payment-method-price-info')}>
                                        <div className={cx('payment-method-price-info-content')}>
                                            <WarningIcon
                                                classNames={cx(
                                                    'ud-icon',
                                                    'ud-icon-small',
                                                    'ud-icon-color-warning',
                                                    'checkout-warning-message--checkout',
                                                )}
                                            />
                                            Rất tiếc, PayPal không hỗ trợ thanh toán bằng VND nên giao dịch thanh toán
                                            của bạn sẽ được thực hiện bằng USD.
                                        </div>
                                        <b>Số tiền mà bạn sẽ bị Paypal tính phí là US$&nbsp;241,68.</b>
                                    </div>
                                </div>
                            </div>
                        )}
                    </PaymentMethodItem>
                </div>
            </div>
        </section>
    );
}

export default PaymentMethod;
