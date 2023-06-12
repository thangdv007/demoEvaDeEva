import httpRequest from '~/utils/httpRequest';

export const loginApi = (username, password) => {
    const url = `api/login`;
    return httpRequest.post(url, { username, password });
};
