import classnames from 'classnames/bind';

import styles from './CommentItem.module.scss';
import CommentItem from '.';

const cx = classnames.bind(styles);

function CommentReply() {
    return (
        <div className={cx('replyWrap')}>
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    );
}

export default CommentReply;
