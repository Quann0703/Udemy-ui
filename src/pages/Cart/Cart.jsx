import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import ShoppingList from './ShoppingList';
import CartCheckOut from './ShoppingList/CartCheckOut';
import CartItem from '~/components/Course/CartItem';

const cx = classNames.bind(styles);
function Cart() {
    const cart = useSelector((state) => state.cart);
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };
    return (
        <div className={cx('main-content-wrapper')}>
            <div className={cx('cart-page-container')}>
                <div className={cx('cart-title-section')}>
                    <h1 className={cx('ud-heading-xxxl')}>Giỏ hàng</h1>
                </div>
                <div className={cx('cart-notifications')}>
                    <div className={cx('notifications')}></div>
                </div>
                <div className={cx('cart-shopping-section')}>
                    <div className={cx('cart-shopping-list-pane')}>
                        <div className={cx('shopping-list')}>
                            <h3 className={cx('ud-heading-md', 'shopping-list-title')}>
                                {getTotal().totalQuantity} khóa học trong giỏ hàng
                            </h3>
                            <ShoppingList>
                                {cart.map((item) => {
                                    return (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            bestseller
                                            cart
                                            cartItem
                                            image={item.image}
                                            title={item.title}
                                            slug={item.slug}
                                            price={item.price}
                                            language={item.language}
                                            creator={item.user['fullName']}
                                            rank={item.rank}
                                            rating={item.rating}
                                        />
                                    );
                                })}
                                {/* <CartItem updated bestseller cart cartItem /> */}
                            </ShoppingList>
                        </div>
                        <div className={cx('shopping-list')}>
                            <h3 className={cx('ud-heading-md', 'shopping-list-title')}>
                                Gần đây được thêm vào danh sách mong ước
                            </h3>
                            <ShoppingList>
                                {/* <CartItem bestseller wishList cartItem /> */}
                                <CartItem updated bestseller wishList cartItem />
                            </ShoppingList>
                        </div>
                    </div>
                    <div className={cx('cart-checkout-pane')}>
                        <CartCheckOut />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
