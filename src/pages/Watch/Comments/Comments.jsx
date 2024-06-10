import classNames from 'classnames/bind';

import styles from './Comments.module.scss';
import { CommentIcon } from '~/components/Icons';
import Modal from '~/components/Modal';
import Comment from '~/components/Comment';
import useModal from '~/hooks/useModal';
import { openModal } from '~/store/actions/modalAction';

const cx = classNames.bind(styles);

function Comments({ isShowTracks }) {
    const { state, dispatch } = useModal();

    const handleShowComments = () => {
        dispatch(openModal());
    };

    return (
        <div
            className={cx('main-comment-btn', {
                'main-show-track': isShowTracks,
            })}
        >
            <button className={cx('comment-btn')} onClick={handleShowComments}>
                <CommentIcon classNames={cx('ud-icon', 'ud-icon-xsmall')} />
                <span className={cx('title')}>Hỏi đáp</span>
            </button>

            {state.isOpen && (
                <Modal>
                    <Comment currentUserId={14} />
                </Modal>
            )}
        </div>
    );
}

export default Comments;
