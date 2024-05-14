import classNames from 'classnames/bind';

import styles from './CommentBox.module.scss';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';
import MdEditor from '../MdEditor';
import Button from '../Button';

const cx = classNames.bind(styles);
function CommentBox() {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);
    const handleShow = () => {
        setShow((prev) => {
            return !prev;
        });
    };
    const handleValue = (value) => {
        setValue(value);
    };
    useEffect(() => {
        setActive(value !== '');
    }, [value]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar-wrapper')}>
                <Avatar
                    src="https://img-c.udemycdn.com/user/75x75/245266240_ca52.jpg"
                    style={{ '--font-size': '0.4rem' }}
                />
            </div>
            <div className={cx('content')}>
                {!show && (
                    <div className={cx('placeholder')} onClick={handleShow}>
                        <span>Bạn có thắc mắc gì trong bài học này?</span>
                    </div>
                )}
                {show && <MdEditor value={value} onchangeValue={(newValue) => handleValue(newValue)} />}
                {show && (
                    <div className={cx('action')}>
                        <Button
                            ghost={cx('ud-btn-ghost')}
                            className={cx('ud-heading-sm', 'cancel-btn')}
                            onClick={handleShow}
                        >
                            <span>Hủy</span>
                        </Button>
                        <Button
                            size={cx('ud-btn-medium')}
                            primary={cx('ud-btn-primary')}
                            className={cx('ud-heading-sm', 'btn-style', {
                                active: active,
                            })}
                        >
                            <span>Bình luận</span>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentBox;
