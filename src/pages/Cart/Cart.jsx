import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import ShoppingList from './ShoppingList';
import CartCheckOut from './ShoppingList/CartCheckOut';
import CartItem from './ShoppingList/CartItem';

const cx = classNames.bind(styles);
function Cart() {
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
                            <h3 className={cx('ud-heading-md', 'shopping-list-title')}>4 khóa học trong giỏ hàng</h3>
                            <ShoppingList>
                                <CartItem bestseller cart />
                                <CartItem updated bestseller cart />
                            </ShoppingList>
                        </div>
                        <div className={cx('shopping-list')}>
                            <h3 className={cx('ud-heading-md', 'shopping-list-title')}>
                                Gần đây được thêm vào danh sách mong ước
                            </h3>
                            <ShoppingList>
                                <CartItem bestseller wishList />
                                <CartItem updated bestseller wishList />
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
