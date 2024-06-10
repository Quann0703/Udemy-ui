import httpRequest from '~/utils/httpRequest';

const createInvoices = async (data) => {
    return await httpRequest.post('/invoices', data);
};
export { createInvoices };
