import classNames from 'classnames/bind';

import styles from './InputField.module.scss';
import Button from '../Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function InputField({ lable, type = 'text', value, name, placeholder, description, onChange }) {
    const [isEdit, setIsEdit] = useState(false);
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
                <h3 className={cx('title')}>{lable}</h3>
                <div>
                    <div className={cx('content-edit')}>
                        <input
                            type={type}
                            name={name}
                            className={cx('content-Input')}
                            maxLength={50}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            disabled={isEdit}
                        />
                    </div>
                    <div className={cx('description')}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className={cx('edit-mode')}>
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
            </div>
        </>
    );
}

export default InputField;
