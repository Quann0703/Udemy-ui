import classNames from 'classnames/bind';

import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);
function BannerSlider({ title, description }) {
    return (
        <div className={cx('banner-inner')}>
            <h1 className={cx('ud-heading-serif-xxl')}>{title}</h1>
            <p className={cx('ud-text-md')}>
                {description.title}
                <u>
                    <a target='“_blank"' href={description.href}>
                        {description.titleLink}
                    </a>
                </u>
                {description.subtitle}
            </p>
            <div className={'banner-container'}></div>
        </div>
    );
}

export default BannerSlider;
