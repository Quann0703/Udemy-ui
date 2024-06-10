import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './CartItem.module.scss';
import { incrementQuantity, decrementQuantity, removeItem } from '~/redux/cartSlice';
import Image from '~/components/Image';
import Rating from '~/components/Rating';
import { BulletIcon, OfferIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function CartItem({
    id,
    updated,
    bestseller,
    wishList,
    cart,
    cartItem,
    resultItem,
    image,
    title,
    slug,
    creator,
    rating,
    rank,
    language,
    price,
}) {
    const dispatch = useDispatch();
    return (
        <div className={cx('style__shopping-item-wrapper')}>
            <div className={cx('shopping__item-container', 'shopping__item-with-inline')}>
                <div className={cx('shopping__item-img')}>
                    <div className={cx('shopping__item-img-wrapper')}>
                        <Image
                            className={cx({
                                'shopping-item--course-image': cartItem,
                                'result-item--course-image': resultItem,
                            })}
                            src={image}
                            alt=""
                            height={68}
                            width={120}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className={cx('shopping__item-header')}>
                    <h3 className={cx('ud-heading-md ', 'shopping-item--course-title')}>
                        <Link to={`/courses/${slug}`}>{title}</Link>
                    </h3>
                    <div className={cx('ud-text-xs', 'shopping__item-instructor')}>
                        <span className={cx('shopping-item--instructor-list')}>{creator}</span>
                    </div>
                </div>
                <div className={cx('shopping__item-badges')}>
                    {bestseller && (
                        <div className={cx('ud-badge', 'ud-heading-xs', 'course__badges-best-sales')}>
                            Bán chạy nhất
                        </div>
                    )}
                    {updated && (
                        <div className={cx('ud-badge', 'ud-heading-xs', 'course__badges-updated-recently')}>
                            Đã cập nhật gần đây
                        </div>
                    )}
                </div>
                <div className={cx('shopping__item-rating')}>
                    <div className={cx('star__rating-wrapper')}>
                        <div className={cx('rating-inner')}>
                            <span className={cx('ud-heading-sm', 'star__rating-rank')}>{rating}</span>
                            <Rating />
                        </div>
                        <span className={cx('ud-text-xs', 'shopping__item-review')}>({rank} xếp hạng)</span>
                    </div>
                </div>
                <div className={cx('ud-text-xs', 'shopping__item-meta')}>
                    <span className={cx('item-meta-hours')}>Ngôn ngữ {language} </span>
                    <BulletIcon classNames={cx('ud-icon', 'ud-icon-xxsmall', 'ud-icon-color-subdued')} />
                    <span className={cx('item-meta-number-lesson')}> bài giảng </span>
                    <BulletIcon classNames={cx('ud-icon', 'ud-icon-xxsmall', 'ud-icon-color-subdued')} />
                    <span className={cx('item-meta-level')}>Tất cả trình độ</span>
                </div>
                <div className={cx('shopping__item-action')}>
                    {cart && (
                        <>
                            <Button
                                ghost={cx('ud-btn-ghost')}
                                size={cx('ud-btn-xsmall')}
                                className={cx('ud-text-sm', 'btn-action')}
                                onClick={() => dispatch(removeItem(id))}
                            >
                                <span>Xóa</span>
                            </Button>
                            <Button
                                ghost={cx('ud-btn-ghost')}
                                size={cx('ud-btn-xsmall')}
                                className={cx('ud-text-sm', 'btn-action')}
                            >
                                <span>Lưu để mua sau</span>
                            </Button>
                            <Button
                                ghost={cx('ud-btn-ghost')}
                                size={cx('ud-btn-xsmall')}
                                className={cx('ud-text-sm', 'btn-action')}
                            >
                                <span>Chuyển vào danh sách mong ước</span>
                            </Button>
                        </>
                    )}
                    {wishList && (
                        <>
                            <Button
                                ghost={cx('ud-btn-ghost')}
                                size={cx('ud-btn-xsmall')}
                                className={cx('ud-text-sm', 'btn-action')}
                            >
                                <span>Xóa</span>
                            </Button>
                            <Button
                                ghost={cx('ud-btn-ghost')}
                                size={cx('ud-btn-xsmall')}
                                className={cx('ud-text-sm', 'btn-action')}
                            >
                                <span>Chuyển vào giỏ hàng</span>
                            </Button>
                        </>
                    )}
                </div>
                <div className={cx('shopping__item-price')}>
                    <div className={cx('shopping__price-discount', 'shopping-item-price')}>
                        <div
                            className={cx(
                                'ud-heading-md',
                                'base-price-text-module--price-part',
                                'shopping__price-part',
                            )}
                        >
                            <span>
                                <span>₫&nbsp;{price}</span>
                            </span>
                        </div>
                        <div
                            className={cx(
                                'ud-text-sm',
                                'base-price-text-module--price-part',
                                'shopping__price-current',
                            )}
                        >
                            <span>
                                <s>
                                    <span>₫&nbsp;{price}</span>
                                </s>
                            </span>
                        </div>
                    </div>
                    <div className={cx('shopping-item-coupon')}>
                        <OfferIcon
                            classNames={cx(
                                'ud-icon',
                                'ud-icon-xsmall',
                                'ud-icon-color-neutral',
                                'shopping-item-price-discounted',
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
