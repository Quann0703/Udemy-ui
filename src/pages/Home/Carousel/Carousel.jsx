import classNames from 'classnames/bind';
import React from 'react';
import Slider from 'react-slick';

import styles from './Carousel.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import BannerSlider from './BannerSlider';
import Arrow from './Arrow';

const cx = classNames.bind(styles);
const LISTSLIDER = [
    {
        title: 'AI tạo sinh (GenAI) đang thay đổi cuộc chơi',
        linkImg: images.slider_1,
        description: {
            title: 'Học các kỹ năng có thể thích nghi với sự thay đổi',
            href: 'https://www.udemy.com/topic/generative-ai/',
            titleLink: ' Các khóa học về AI ',
            subtitle: '(và nhiều khóa học khác) có giá từ ₫&nbsp;249.000 đến hết ngày 28/3.',
        },
    },
    {
        title: 'Chậm mà chắc',
        linkImg: images.slider_2,
        description: {
            title: 'Cố gắng học chỉ 5–10 phút mỗi ngày. ',
            href: 'https://www.udemy.com/home/my-courses/learning/?locale=vi_VN',
            titleLink: 'Tiếp tục hoàn thành khóa học ',
            subtitle: ' và phát huy tối đa tiềm năng của bạn.',
        },
    },
    {
        title: 'Phát triển kỹ năng của bạn',
        linkImg: images.slider_3,
        description: {
            title: 'Học các ngôn ngữ lập trình có nhu cầu lớn như Python, Java, C ++, v.v. ',
            href: 'https://www.udemy.com/courses/development/programming-languages/?locale=vi_VN',
            titleLink: 'Tìm khóa học dành cho bạn',
        },
    },
];
function Carousel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        nextArrow: <Arrow nextArrow classNames={cx('slick-next')} />,
        prevArrow: <Arrow prevIcon classNames={cx('slick-prev')} />,
    };
    return (
        <div className={cx('carousel')}>
            <Slider {...settings}>
                {LISTSLIDER.map((item, index) => {
                    return (
                        <div key={index} className={cx('slider')}>
                            <div className={cx('slider-background')}>
                                <Image
                                    src={item.linkImg}
                                    alt=""
                                    width="1340"
                                    height="400"
                                    className={cx('slider-img')}
                                />
                            </div>
                            <div className={cx('banner-wrapper')}>
                                <BannerSlider title={item.title} description={item.description} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Carousel;
