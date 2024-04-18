import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';

import Header from './Header';
import Arrow from '../Carousel/Arrow';
import WrapperListTopic from './WrapperList';

import styles from './Slick.module.scss';
const LISTTOPICS = [
    {
        title: 'Hooks React',
        slug: 'hooks-react,',
    },
    {
        title: 'GraphQL',
        slug: 'hooks-react,',
    },
    {
        title: 'JavaScript',
        slug: 'hooks-react,',
    },
    {
        title: 'React Native',
        slug: 'hooks-react,',
    },
    {
        title: 'Node.Js',
        slug: 'hooks-react,',
    },
    {
        title: 'Web interface dev',
        slug: 'hooks-react,',
    },
    {
        title: 'MERN Stack',
        slug: 'hooks-react,',
    },
    {
        title: 'Typescript',
        slug: 'hooks-react,',
    },
    {
        title: 'Web Development',
        slug: 'hooks-react,',
    },
    {
        title: 'Next.js',
        slug: 'hooks-react,',
    },
    {
        title: 'ReactJs',
        slug: 'hooks-react,',
    },
    {
        title: 'MongoDB',
        slug: 'hooks-react,',
    },
];
const cx = classNames.bind(styles);
function SlickTopic() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 2,
        nextArrow: <Arrow nextArrow classNames={cx('slick-next-topic')} />,
        prevArrow: <Arrow prevIcon classNames={cx('slick-prev-topic')} />,
    };
    return (
        <>
            <Header title="Các chủ đề đề xuất dành cho bạn" />
            <WrapperListTopic>
                <div className={cx('slider-container')}>
                    <Slider {...settings}>
                        {LISTTOPICS.map((item, index) => {
                            return (
                                <div className={cx('scroll-item')} key={index}>
                                    <a href={item.slug} className={cx('ud-heading-md', 'popular-topics-unit')}>
                                        {item.title}
                                    </a>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </WrapperListTopic>
        </>
    );
}

export default SlickTopic;
