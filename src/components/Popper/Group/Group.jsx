import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './Group.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import GroupBtn from './GroupBtn';
import { CourseAction } from '~/components/Course';
import Header from './Header';
import { getRegisteredCourses } from '~/services/courseService';
import useAccount from '~/hooks/useAccount';

const cx = classNames.bind(styles);
function Group({ linkTo, cart, study, wishlist, business, notification, children, content = {} }) {
    const carts = useSelector((state) => state.cart);
    const [studyData, setStudyData] = useState([]);
    const { state } = useAccount();
    useEffect(() => {
        if (state.isLogin) {
            getRegisteredCourses().then((res) => {
                setStudyData(res);
            });
        }
    }, []);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        carts?.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };

    const renderItems = () => {
        return (
            <>
                <div className={cx('group-item')}>
                    {business && (
                        <div className={cx('shopping-action')}>
                            <span className={cx('group-text', 'ud-heading-lg')}>{content.text}</span>
                        </div>
                    )}
                    {study && (
                        <div className={cx('shopping-action')}>
                            {studyData.map((study) => (
                                <CourseAction
                                    key={study.id}
                                    title={study.title}
                                    image={study.image}
                                    slug={study.slug}
                                    study
                                />
                            ))}
                        </div>
                    )}
                    {wishlist && (
                        <>
                            <div className={cx('shopping-action')}>
                                {carts.map((cart) => (
                                    <div className={cx('margin-top-item')}>
                                        <CourseAction
                                            key={cart.id}
                                            title={cart.title}
                                            price={cart.price}
                                            creator={cart.user.fullName}
                                            image={cart.image}
                                            cart
                                        />
                                        <div className={cx('wrapper-shopping')}>
                                            <GroupBtn btnWishlist />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className={cx('shopping-action')}>
                                <CourseAction wishlist />
                                <div className={cx('wrapper-shopping')}>
                                    <GroupBtn btnWishlist />
                                </div>
                            </div> */}
                        </>
                    )}
                    {cart && (
                        <div className={cx('shopping-action')}>
                            {carts.map((cart) => (
                                <CourseAction
                                    key={cart.id}
                                    title={cart.title}
                                    price={cart.price}
                                    creator={cart.user.fullName}
                                    image={cart.image}
                                    cart
                                />
                            ))}
                        </div>
                    )}
                    {notification && (
                        <div>
                            <Header />
                            <span className={cx('group-text', 'ud-heading-lg')}>{content.text}</span>
                        </div>
                    )}
                </div>
                {linkTo && (
                    <div className={cx('panel-menu-module--footer', 'shopping-items-module--sticky-footer')}>
                        {cart && (
                            <div className={cx('ud-heading-lg', 'shopping-items-module--total')}>
                                <div>Tổng:&nbsp;</div>
                                <div className={cx('base-price-text-module--container')}>
                                    <div
                                        className={cx('base-price-text-module--price-part', 'ud-heading-lg')}
                                        data-purpose="course-price-text"
                                    >
                                        <span>
                                            <span>₫ {getTotal().totalPrice}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {cart ? (
                            <GroupBtn btnButton title={content.textBtn} />
                        ) : (
                            <GroupBtn btnStudy title={content.textBtn} />
                        )}
                    </div>
                )}
            </>
        );
    };
    const renderResult = (attrs) => {
        return (
            <div className={cx('group-content')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('group-body')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <HeadlessTippy interactive offset={[-5, 3]} delay={[0, 50]} placement="bottom-end" render={renderResult}>
                {children}
            </HeadlessTippy>
        </div>
    );
}
Group.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.object,
};
export default Group;
