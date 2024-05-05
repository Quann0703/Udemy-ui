import classNames from 'classnames/bind';

import styles from './PaymentMethod.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function PaymentMethodItem({ children, visa, card, paybal, onClick }) {
    return (
        <div className={cx('accordion-panel-module--panel', 'accordion-panel-module--panel-bd-top')}>
            <div
                className={cx(
                    'ud-btn',
                    'ud-btn-large',
                    'ud-btn-link',
                    'ud-heading-lg',
                    'ud-accordion-panel-toggler',
                    'accordion-panel-toggler',
                    'accordion-panel-toggler-outer',
                )}
                onClick={onClick}
            >
                <h3 className={cx('ud-accordion-panel-heading')}>
                    <Button size={cx('ud-btn-large')} className={cx('ud-btn-link', 'ud-heading-lg', 'module-panel')}>
                        <span className={cx('ud-accordion-panel-title')}>
                            {/* <span
                                className={cx(
                                    'ud-fake-toggle-input',
                                    'ud-fake-toggle-radio',
                                    'ud-fake-toggle-radio-small',
                                    {
                                        'paymentMethod-option-radio': activeToggle,
                                    },
                                )}
                            /> */}
                            <span className={cx('paymentMethod-label')}>
                                <div className={cx('payment-method--label-card')}>
                                    {(visa || card) && (
                                        <Image
                                            src="https://www.udemy.com/staticx/udemy/images/v9/card-default.svg"
                                            className={cx('payment-method-img')}
                                            width="300"
                                            height="112"
                                        />
                                    )}
                                    {paybal && (
                                        <Image
                                            src="https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg"
                                            className={cx('payment-method-img')}
                                            width="300"
                                            height="112"
                                        />
                                    )}
                                    {visa && <span className="ud-heading-md">Visa **** 8077</span>}
                                    {card && <span className="ud-heading-md">Thẻ tín dụng/Thẻ ghi nợ</span>}
                                    {paybal && <span className="ud-heading-md">PayPal</span>}
                                </div>
                                <span className={cx('payment-method--label-option')}>
                                    {card && (
                                        <>
                                            <Image
                                                src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
                                                className={cx('payment-method-option-img')}
                                                width="300"
                                                height="112"
                                                loading="eager"
                                            />
                                            <Image
                                                src="https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg"
                                                className={cx('payment-method-option-img')}
                                                width="300"
                                                height="112"
                                                loading="eager"
                                            />
                                            <Image
                                                src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
                                                className={cx('payment-method-option-img')}
                                                width="300"
                                                height="112"
                                                loading="eager"
                                            />
                                            <Image
                                                src="https://www.udemy.com/staticx/udemy/images/v9/card-jcb.svg"
                                                className={cx('payment-method-option-img')}
                                                width="300"
                                                height="112"
                                                loading="eager"
                                            />
                                        </>
                                    )}
                                    {visa && (
                                        <Image
                                            src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
                                            className={cx('payment-method-option-img')}
                                            width="300"
                                            height="112"
                                            loading="eager"
                                        />
                                    )}
                                </span>
                            </span>
                        </span>
                    </Button>
                </h3>
            </div>
            {children}
        </div>
    );
}

export default PaymentMethodItem;
