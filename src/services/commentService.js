import httpRequest from '~/utils/httpRequest';
const getComments = async () => {
    return await httpRequest.get('/comments').then((res) => res.data);
};
const createComments = async (data) => {
    return await httpRequest.post('/comments', data);
};
const updateComments = async (data, id) => {
    return await httpRequest.put('/comments/' + id, data);
};

const deleteComments = async (id) => {
    return await httpRequest.delete('/comments/' + id);
};

export { getComments, createComments, updateComments, deleteComments };
