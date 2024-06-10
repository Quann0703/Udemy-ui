import classnames from 'classnames/bind';

import styles from './CommentItem.module.scss';
import CommentItem from './CommentItem';

const cx = classnames.bind(styles);

function CommentReply({ replies = [], currentUser }) {
    return (
        <div className={cx('replyWrap')}>
            {replies.length > 0 &&
                replies.map((reply) => {
                    return <CommentItem key={reply.id} comment={reply} />;
                })}
        </div>
    );
}

export default CommentReply;
