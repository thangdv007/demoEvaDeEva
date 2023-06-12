import axios from 'axios';

//thiết lập cấu hình mặc định cho các yêu cầu http request
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});

export default httpRequest;
