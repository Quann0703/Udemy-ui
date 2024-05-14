import classNames from 'classnames/bind';

import styles from './Heading.module.scss';

const cx = classNames.bind(styles);
function Heading({ h1, title, updatedAt, h4 }) {
    return (
        <header className={cx('wrapper')}>
            {h1 && <h1 className={cx('ud-heading-serif-xxl', 'heading')}>{title}</h1>}
            {h4 && <h4 className={cx('ud-heading-serif-xl')}>{title}</h4>}
            <p
                className={cx('ud-text-xs', {
                    updateDate: h1,
                    help: h4,
                })}
            >
                {updatedAt}
            </p>
        </header>
    );
}

export default Heading;
