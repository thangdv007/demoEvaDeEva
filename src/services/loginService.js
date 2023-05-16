import * as httpRequest from '~/utils/httpRequest';

export const login = async () => {
    try {
        const res = await httpRequest.post('auth/login');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
