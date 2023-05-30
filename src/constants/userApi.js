import httpRequest from '~/utils/httpRequest';

export const signup = (data) => {
    const url = `api/register`;
    return httpRequest.post(url, data);
};
