import classNames from 'classnames/bind';

import styles from './Business.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const LOGOPARTNERS = [
    {
        id: 1,
        logoPartners: images.volkswagen,
        w: '44',
        h: '38',
    },
    {
        id: 2,
        logoPartners: images.box,
        w: '67',
        h: '38',
    },
    {
        id: 3,
        logoPartners: images.eventbrite,
        w: '115',
        h: '38',
    },
    {
        id: 4,
        logoPartners: images.netApp,
        w: '115',
        h: '38',
    },
    {
        id: 5,
        logoPartners: images.nasdaq,
        w: '115',
        h: '38',
    },
];
function Business() {
    return (
        <div className={cx('component-margin', 'curated-for-ufb-notice')}>
            <div className={cx('curated-for-ufb-text')}>
                <span className={cx('ud-heading-md')}>Các công ty hàng đầu cung cấp khóa học này cho nhân viên</span>
                <span className={cx('ud-text-sm', 'curated-for-ufb-text-body')}>
                    Chúng tôi lựa chọn khóa học này cho tuyển tập khóa học đầu bảng được các doanh nghiệp toàn cầu tin
                    dùng.
                    <a href="/" className={cx('ud-link-underline')}>
                        Tìm hiểu thêm
                    </a>
                </span>
            </div>
            <div className={cx('curated-for-ufb-logos')}>
                <div className={cx('curated-for-ufb-top-companies')}>
                    {LOGOPARTNERS.map((item, index) => {
                        return <Image key={index} src={item.logoPartners} width={item.w} height={item.h} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Business;
