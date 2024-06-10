import httpRequest from '~/utils/httpRequest';

const register = async (data) => {
    return await httpRequest.post('/auth/register', { ...data });
};
const login = async (data) => {
    return await httpRequest.post('/auth/login', { ...data });
};

const logout = async () => {
    return httpRequest.get('/auth/logout');
};

const getCurrentUser = async () => {
    return httpRequest.get('/auth/current-user');
};
export { register, login, logout, getCurrentUser };
