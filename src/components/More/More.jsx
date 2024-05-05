import classNames from 'classnames/bind';

import styles from './More.module.scss';
import MoreItem from './MoreItem';
import { ExpandPlusIcon, FolderIcon, RatingStarIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);
const OPTIONMORE = [
    {
        title: 'Chia sẻ',
        icon: <ShareIcon classNames={cx('ud-icon ud-icon-xsmall', 'ud-block-list-item-icon')} />,
    },
    {
        title: 'Tạo danh sách mới',
        icon: <ExpandPlusIcon classNames={cx('ud-icon ud-icon-xsmall', 'ud-block-list-item-icon')} />,
    },
    {
        title: 'Thích',
        icon: <RatingStarIcon classNames={cx('ud-icon ud-icon-xsmall', 'ud-block-list-item-icon')} />,
    },
    {
        title: 'Lưu trữ',
        icon: <FolderIcon classNames={cx('ud-icon ud-icon-xsmall', 'ud-block-list-item-icon')} />,
    },
];
function More() {
    return (
        <div className={cx('popper-module--animation-wrapper')}>
            <div
                className={cx('dropdown-module--menu', 'dropdown-module--dropdown-menu')}
                style={{ maxHeight: 'none' }}
            >
                <div className={cx('options-menu--menu-container')}>
                    <div className={cx('ud-heading-sm', 'options-menu--menu-heading')}>Danh sách</div>
                    <ul className={cx('ud-unstyled-list', 'ud-block-list', 'options-menu--collections-menu')}>
                        <h3 className={cx('ud-heading-sm', 'text-color')}>Bạn không có danh sách nào</h3>
                    </ul>
                    <ul className={cx('ud-unstyled-list', 'ud-block-list', 'border-list')}>
                        {OPTIONMORE.map((item, index) => {
                            return (
                                <li key={index}>
                                    <MoreItem title={item.title} icon={item.icon} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default More;
