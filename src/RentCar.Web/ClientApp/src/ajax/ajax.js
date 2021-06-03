import axios from 'axios';
import Urls from '../utils/config/urls';

const Ajax = (()=>{
    const get = (url, onSuccess, onError) => axios.get(url).then(onSuccess).catch(processError(onError));

    const post = (url, data, onSuccess, onError) => axios.post(url, data).then(onSuccess).catch(onError);

    const processError = (onError) => (error) => {
        onError(error);
    };

    const isUserLoggedIn = (onSuccess, onError) => get(Urls.isUserLoggedIn, onSuccess, onError);

    const getCurrentUser = (onSuccess, onError) => get(Urls.getCurrentUser, onSuccess, onError);

    const getAllUsers = (onSuccess, onError) => get(Urls.getAllUsers, onSuccess, onError);

    const getUserByID = (onSuccess, onError) => get(Urls.getUserByID, onSuccess, onError);

    const editUser = (data, onSuccess, onError) => post(Urls.editUser, data, onSuccess, onError);

    const deleteUser = (id, onSuccess, onError) => post(Urls.deleteUser, id, onSuccess, onError);

    const getAllVehicles = (onSuccess, onError) => get(Urls.getAllVehicles, onSuccess, onError);

    const getAllAvailableVehicles = (onSuccess, onError) => get(Urls.getAllAvailableVehicles, onSuccess, onError);

    const bookVehicle = (data, onSuccess, onError) => post(Urls.bookVehicle, data, onSuccess, onError); 

    const deleteVehicle = (id, onSuccess, onError) => post(Urls.deleteVehicle, id, onSuccess, onError);

    const addVehicle = (data, onSuccess, onError) => post(Urls.addVehicle, data, onSuccess, onError);

    const editVehicle = (data, onSuccess, onError) => post(Urls.editVehicle, data, onSuccess, onError);

    const getExpiredRentalEvents = (onSuccess, onError) => get(Urls.getExpiredRentalEvents, onSuccess, onError);

    const markAsAvailable = (data, onSuccess, onError) => post(Urls.markAsAvailable, data, onSuccess, onError);
    
    return{
        isUserLoggedIn,
        getCurrentUser,
        getAllVehicles,
        bookVehicle,
        getAllAvailableVehicles,
        deleteVehicle,
        addVehicle,
        editVehicle,
        getAllUsers,
        editUser,
        deleteUser,
        getUserByID,
        getExpiredRentalEvents,
        markAsAvailable
    }
})();

export default Ajax;