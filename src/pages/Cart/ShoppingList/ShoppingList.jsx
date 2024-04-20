import classNames from 'classnames/bind';

import styles from './ShoppingList.module.scss';

const cx = classNames.bind(styles);
function ShoppingList({ children }) {
    return (
        <div>
            <ul className={cx('ud-unstyled-list', 'same-buyable-type-wrapper')}>{children}</ul>
        </div>
    );
}

export default ShoppingList;
