import classnames from 'classnames/bind';

import styles from './PhotoField.module.scss';
import Avatar from '../Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Button from '../Button';

const cx = classnames.bind(styles);

function PhotoField({ label, name, value, desc }) {
    const [photo, setPhoto] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        return () => {
            photo && URL.revokeObjectURL(photo.preview);
        };
    }, [photo]);

    const handleChoosePhoto = () => {
        !isEdit && setIsEdit(true);
        isEdit && inputRef.current.click();
    };

    const handleChangePhoto = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPhoto(file);
    };

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleSave = () => {
        setIsEdit(false);
    };

    const handleCancel = () => {
        setIsEdit(false);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <label className={cx('label')}>{label}</label>
                <div className={cx('body')}>
                    <p className={cx('desc')}>{desc}</p>
                    <div className={cx('avatar')} onClick={handleChoosePhoto}>
                        <Avatar src={photo?.preview || value} alt="hoafn" style={{ '--font-size': '8.9px' }} />
                        {isEdit && (
                            <div className={cx('chooseAva')}>
                                <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
                                <input
                                    ref={inputRef}
                                    name={name}
                                    type="file"
                                    id={'avatar'}
                                    accept="image/jpg, image/jpeg, image/png"
                                    onChange={handleChangePhoto}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {!isEdit && (
                <Button
                    ghost={cx('ud-btn-ghost')}
                    size={cx('ud-btn-large')}
                    className={cx('ud-heading-md', 'btn-edit')}
                    onClick={handleEdit}
                >
                    <span className={cx('ud-heading-sm')}>Chỉnh sửa</span>
                </Button>
            )}
            {isEdit && (
                <>
                    <Button
                        ghost={cx('ud-btn-ghost')}
                        size={cx('ud-btn-large')}
                        className={cx('ud-heading-md', 'btn-edit', 'btn-save')}
                        onClick={handleSave}
                    >
                        <span className={cx('ud-heading-sm')}>Lưu</span>
                    </Button>
                    <Button
                        ghost={cx('ud-btn-ghost')}
                        size={cx('ud-btn-large')}
                        className={cx('ud-heading-md', 'btn-edit', 'btn-cancel')}
                        onClick={handleCancel}
                    >
                        <span className={cx('ud-heading-sm')}>Hủy</span>
                    </Button>
                </>
            )}
        </>
    );
}

export default PhotoField;
