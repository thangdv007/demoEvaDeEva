import httpRequest from '~/utils/httpRequest';

export const registerApi = (data) => {
    const url = `api/register`;
    return httpRequest.post(url, data);
};
