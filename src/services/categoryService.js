import httpRequest from '~/utils/httpRequest';
const getCategories = async () => {
    return await httpRequest.get('/home/category').then((res) => res.data);
};

export { getCategories };
