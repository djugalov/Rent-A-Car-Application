import axios from 'axios';
import Urls from '../utils/config/urls';

const Ajax = (()=>{
    const get = (url, onSuccess, onError) => axios.get(url).then(onSuccess).catch(processError(onError));

    const post = (url, data, onSuccess, onError) => axios.post(url, data).then(onSuccess).catch(onError);

    const processError = (onError) => (error) => {
        onError(error);
    };

    const isUserLoggedIn = (onSuccess, onError) => get(Urls.isUserLoggedIn, onSuccess, onError);
    
    return{
        isUserLoggedIn
    }
})();

export default Ajax;