import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import { VideoPlayer } from '~/components/Video';
import Heading from '~/components/Heading';
import MarkdownParser from '~/components/MarkdownParser';
import Powered from '~/components/Powered';

const cx = classNames.bind(styles);
const data = {
    title: 'Xây Dựng UI Phần Header Dự Án Tiktok #1 | Thực Hành ReactJS Tại F8',
    video: 'o_VDcEy029M',
    type: 'youtube',
    content:
        '<h3><strong>Tham gia nhóm ReactJS Việt Nam</strong></h3><p>Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.</p><p>Nay F8 tạo nhóm "ReactJS Việt Nam" mới, với mong muốn mang lại môi trường tốt hơn cho việc chia sẻ, học tập kiến thức liên quan tới ReactJS tại Việt Nam 🎉</p><p>👉 <strong>Xin mời tham gia tại đây: </strong><a href="https://fullstack.edu.vn/external-url?continue=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1134618593772787"><strong>https://www.facebook.com/groups/1134618593772787</strong></a></p><blockquote><p>Cao ốc nào cũng được xây từ viên gạch đầu tiên, hãy đăng câu hỏi hoặc chia sẻ kiến thức của bạn để nhóm mới này sớm trở thành tòa cao ốc bạn nhé &lt;3</p></blockquote>',
};
function Video({ allWidth }) {
    return (
        <div
            className={cx('wrapper', {
                'video-all-width': allWidth,
            })}
        >
            <div className={cx('video')}>
                <VideoPlayer title={data.title} video={data.video} type={data.type} />
            </div>
            <div className={cx('content')}>
                <div className={cx('content-top')}>
                    <Heading h1 title="ReactJS là gì? Tại sao nên học ReactJS?" updatedAt="tháng 11 năm 2022" />
                </div>
                <MarkdownParser content={data.content} style={{ '--font-size': '1.6rem', '--line-height': 2 }} />
            </div>
            <Powered />
        </div>
    );
}

export default Video;
