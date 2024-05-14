import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

const openModal = () => {
    return {
        type: OPEN_MODAL,
    };
};

const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    };
};

export { openModal, closeModal };
