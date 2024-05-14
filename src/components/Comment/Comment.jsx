import classNames from 'classnames/bind';

import styles from './Comment.module.scss';
import { ExitsIcon } from '~/components/Icons';
import Heading from '../Heading';
import CommentBox from '../CommentBox';
import CommentItem, { CommentReply } from './CommentItem';
import useModal from '~/hooks/useModal';
import { closeModal } from '~/store/actions/modalAction';

const cx = classNames.bind(styles);
function Comment() {
    const { state, dispatch } = useModal();

    const handleCloseComment = () => {
        dispatch(closeModal());
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('close-btn')} onClick={handleCloseComment}>
                    <ExitsIcon classNames={cx('ud-icon', 'ud-icon-xsmall')} />
                </div>
                <div className={cx('body')}>
                    <div className={cx('detail-row')}>
                        <div className={cx('comment-heading')}>
                            <Heading
                                h4
                                title="67 hỏi đáp"
                                updatedAt="(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)"
                            />
                        </div>
                        <CommentBox />
                        <CommentItem />
                        <CommentReply />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
