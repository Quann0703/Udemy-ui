import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './CommentItem.module.scss';

import MarkdownParser from '~/components/MarkdownParser';
import Avatar from '~/components/Avatar';
import { useState } from 'react';
import CommentBox from '~/components/CommentBox';
import moment from 'moment';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classnames.bind(styles);

function CommentItem({ onShowReply, onDelete, comment, currentUserId, activeComment, setActiveComment, addComment }) {
    const [formReply, setFormReply] = useState(false);
    const fiveMinutes = 60 * 60 * 1000;
    const commentDate = moment(comment.createdAt);
    const currentTime = moment();
    const timePassed = currentTime.diff(commentDate) > fiveMinutes;
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = comment.parentId ? comment.parentId : comment.userId;

    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;

    const handleShowForm = () => {
        setFormReply((prev) => !prev);
        setActiveComment({ id: comment.id, type: 'editing' });
    };
    const handleShowFormReply = () => {
        setFormReply((prev) => !prev);
        setActiveComment({ id: comment.id, type: 'replying' });
    };
    // console.log(activeComment);
    // console.log(isReplying);
    // console.log(replyId);
    // console.log(replyId);
    const formatDate = moment(comment.createdAt).format('DD/MM/YYYY');
    const renderResult = (attrs) => {
        return (
            <div className={cx('group-content')} tabIndex="-1" {...attrs}>
                <PopperWrapper classNames={cx('options')}>
                    {canEdit && (
                        <li onClick={() => handleShowForm()}>
                            <span>Sửa</span>
                        </li>
                    )}
                    {canDelete && (
                        <li onClick={() => onDelete(comment.id)}>
                            <span>Xóa</span>
                        </li>
                    )}
                    <li>
                        <span>Báo cáo bình luận</span>
                    </li>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div
            className={cx('item', {
                replyCommentWrap: true,
            })}
        >
            <div className={cx('avatarWrap')}>
                <Link to={'/'}>
                    <Avatar
                        src="https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj"
                        style={{ '--font-size': '0.4rem' }}
                    />
                </Link>
            </div>
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <div className={cx('commentContent')}>
                        <div className={cx('commentContentHeading')}>
                            <Link to={'/'}>
                                <span className={cx('commentAuthor')}>{comment.user.username}</span>
                            </Link>
                        </div>
                        <div className={cx('commentText')}>
                            <MarkdownParser
                                content={comment.comment}
                                style={{ '--font-size': '1.4rem', '--line-height': 2 }}
                            />
                        </div>
                    </div>
                    <div className={cx('commentReact')}>
                        <span className={cx('likeComment')}>Thích</span>
                        {canReply && (
                            <span className={cx('replyComment')} onClick={handleShowFormReply}>
                                Trả lời
                            </span>
                        )}
                        <span className={cx('createdAt')}>~ {formatDate}</span>
                        <HeadlessTippy
                            interactive
                            offset={[-5, 3]}
                            delay={[0, 50]}
                            placement="bottom-end"
                            render={renderResult}
                        >
                            <span className={cx('moreBtn')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </HeadlessTippy>
                    </div>
                    {formReply && <CommentBox reply onAddCommentEdit={addComment} parentId={replyId} />}
                </div>
                <div className={cx('viewRepliesMore')} onClick={onShowReply}>
                    <span className={cx('showHideComment')}>Xem 1 câu trả lời</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
