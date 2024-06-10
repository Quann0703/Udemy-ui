import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Payment.module.scss';
import { Address, Marketplace, PaymentMethod, Summary } from './CheckOut';
import useAccount from '~/hooks/useAccount';
// import { loadStripe } from '@stripe/stripe-js';
import { createInvoices } from '~/services/invoiceService';
import { createRegister } from '~/services/registerService';
import { toast } from 'react-toastify';
import { clearCart } from '~/redux/cartSlice';

const cx = classNames.bind(styles);

function Payment() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };
    const {
        state: { isLogin, userInfo },
    } = useAccount();
    const handlePayment = async () => {
        const invoicePromises = cart.map(async (item) => {
            const data = {
                courseId: item.id,
            };
            const response = await createInvoices(data);
            return response;
        });
        const registerPromises = cart.map(async (item) => {
            const data = {
                courseId: item.id,
            };
            const response = await createRegister(data);
            return response;
        });
        try {
            const responses = await Promise.all(invoicePromises);
            const register = await Promise.all(registerPromises);
            dispatch(clearCart());
            toast.success('bình luân thanh cong!', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            console.log('All invoices created:', responses);
            console.log('All register created:', register);
        } catch (error) {
            console.error('Error creating invoices:', error);
        }
    };
    return (
        <div className={cx('ud-main-content')}>
            <div className={cx('marketplace-checkout-app')}>
                <div className={cx('marketplace-main-container')}>
                    <main className={cx('marketplace-checkout-overview')}>
                        <h1 className={cx('ud-heading-serif-xxl', 'marketplace-checkout-header')}>Thanh toán</h1>
                        <Address />
                        <PaymentMethod info={userInfo} />
                        <Summary carts={cart} />
                    </main>
                    <aside className={cx('marketplace-check-summary')}>
                        <Marketplace total={getTotal().totalPrice} makePayment={handlePayment} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Payment;
