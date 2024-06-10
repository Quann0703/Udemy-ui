import httpRequest from '~/utils/httpRequest';

const createRegister = async (data) => {
    return await httpRequest.post('/registers', data);
};
export { createRegister };
