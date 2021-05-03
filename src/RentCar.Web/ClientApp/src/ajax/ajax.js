import axios from 'axios';

const Ajax = (()=>{
    const get = (url, onSuccess, onError) => axios.get(url).then(onSuccess).catch(processError(onError));

    const post = (url, data, onSuccess, onError) => axios.post(url, data).then(onSuccess).catch(onError);

    const processError = (onError) => (error) => {
        onError(error);
    };
})