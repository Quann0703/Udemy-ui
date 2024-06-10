import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Comment.module.scss';
import { ExitsIcon } from '~/components/Icons';
import Heading from '../Heading';
import CommentBox from '../CommentBox';
import CommentItem, { CommentReply } from './CommentItem';
import useModal from '~/hooks/useModal';
import { closeModal } from '~/store/actions/modalAction';
import * as commentService from '~/services/commentService';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);
function Comment({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [isComment, setIsComment] = useState(false);
    const { dispatch } = useModal();
    const [showMoreReply, setShowMoreReply] = useState(false);
    const [rootComments, setRootComments] = useState([]);
    const getReplies = (userId) => {
        return backendComments
            .filter((backendComment) => backendComment.parentId === userId)
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };

    useEffect(() => {
        const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);
        setRootComments(rootComments);
        console.log('ok');
    }, [backendComments]);

    useEffect(() => {
        commentService.getComments().then((data) => {
            setBackendComments(data);
            setIsComment(false);
        });
    }, [isComment]);

    const handleCloseComment = () => {
        dispatch(closeModal());
    };

    const handleShowMoreReply = () => {
        setShowMoreReply((prev) => {
            return !prev;
        });
    };

    const handleAddComment = (event, value, replyId = undefined) => {
        event.preventDefault();
        const formData = {
            comment: value,
            parentId: replyId,
        };
        commentService.createComments(formData).then(() => {
            toast.success('bình luân thanh cong!', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            setIsComment(true);

            // setBackendComments((prevComments) => [...prevComments]);
        });
    };

    const handleDeleteComment = (commentId) => {
        if (window.confirm('Bạn có chắc muốn xóa bình luận này không?')) {
            commentService
                .deleteComments(commentId)
                .then(() => {
                    const updateBackendComments = backendComments.filter(
                        (backendComment) => backendComment.id !== commentId,
                    );
                    setBackendComments(updateBackendComments);
                    toast.success('Xóa bình luận thành công!', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                })
                .catch((error) => {
                    toast.error('Xóa bình luận thất bại!', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    console.error('Error deleting comment:', error);
                });
        }
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
                                title={`${backendComments.length} hỏi đáp`}
                                updatedAt="(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)"
                            />
                        </div>
                        <CommentBox onAddComment={handleAddComment} form />
                        {rootComments.map((rootComment) => {
                            return (
                                <>
                                    <CommentItem
                                        key={rootComment.id}
                                        onShowReply={handleShowMoreReply}
                                        comment={rootComment}
                                        currentUserId={currentUserId}
                                        onDelete={handleDeleteComment}
                                        activeComment={activeComment}
                                        setActiveComment={setActiveComment}
                                        addComment={handleAddComment}
                                    />
                                    <CommentReply
                                        key={`reply-${rootComment.id}`}
                                        replies={getReplies(rootComment.userId)}
                                        currentUser={currentUserId}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
