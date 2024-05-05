import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Group.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import GroupBtn from './GroupBtn';
import { CourseAction } from '~/components/Course';
import Header from './Header';

const cx = classNames.bind(styles);
function Group({ linkTo, cart, study, wishlist, business, notification, children, content = {} }) {
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
                            <CourseAction study />
                        </div>
                    )}
                    {wishlist && (
                        <>
                            <div className={cx('shopping-action')}>
                                <CourseAction wishlist />
                                <GroupBtn btnWishlist />
                            </div>
                            <div className={cx('shopping-action')}>
                                <CourseAction wishlist />
                                <div className={cx('wrapper-shopping')}>
                                    <GroupBtn btnWishlist />
                                </div>
                            </div>
                        </>
                    )}
                    {cart && (
                        <div className={cx('shopping-action')}>
                            <CourseAction cart />
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
                                            <span>₫ 6.196.000</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <GroupBtn btnButton title={content.textBtn} />
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
