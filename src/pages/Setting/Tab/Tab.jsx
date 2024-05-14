import classNames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';

import styles from './Tab.module.scss';
import GroupField from '~/components/GroupField';
import Field from '~/components/Field';
import InputField from '~/components/InputField';
import { useState } from 'react';
import PhotoField from '~/components/PhotoField';

const cx = classNames.bind(styles);
function Tab() {
    const { tab } = useOutletContext();
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <section className={cx('module-row')}>
            <section className={cx('module-col', 'c-12', 'm-12', 'l-12')}>
                <div className={cx('wrapper')}>
                    {tab === 'personal' && (
                        <GroupField>
                            <Field>
                                <InputField
                                    lable="Họ tên"
                                    name="full_name"
                                    placeholder="Thêm tên của bạn"
                                    type="text"
                                    value={value}
                                    onChange={handleInput}
                                    description="Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn."
                                />
                            </Field>
                            <Field>
                                <InputField
                                    lable="Bio"
                                    name="bio"
                                    value={value}
                                    onChange={handleInput}
                                    placeholder="Thêm giới thiệu"
                                    type="text"
                                    description="Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn."
                                />
                            </Field>
                            <Field>
                                <PhotoField
                                    label={'Avatar'}
                                    name={'fullName'}
                                    value={
                                        'https://files.fullstack.edu.vn/f8-prod/user_avatars/121525/66420a5cea928.jpg'
                                    }
                                    placeholder={'Họ tên'}
                                    desc={'Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.'}
                                />
                            </Field>
                        </GroupField>
                    )}
                    {tab === 'security' && (
                        <div>
                            <h2>security</h2>
                        </div>
                    )}
                    {tab === 'notifications' && (
                        <div>
                            <h2>notification</h2>
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
}

export default Tab;
