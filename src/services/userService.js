import httpRequest from '~/utils/httpRequest';

const createUser = async (data) => {
    return await httpRequest.post('/users', data);
};

export { createUser };
