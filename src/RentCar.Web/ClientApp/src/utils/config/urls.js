const Urls = (()=>{

    const baseUrl = 'https://localhost:44313/';

    const isUserLoggedIn = `${baseUrl}api/user/IsUserLoggedIn`;

    const getCurrentUser = `${baseUrl}api/user/GetCurrentUser`;

    const getAllUsers = `${baseUrl}api/user/getAllUsers`;

    const getUserByID = `${baseUrl}api/user/getUserByID`;

    const editUser = `${baseUrl}api/user/editUser`;

    const deleteUser = `${baseUrl}api/user/deleteUser`;

    const getAllVehicles = `${baseUrl}api/vehicle/getAllVehicles`;

    const bookVehicle = `${baseUrl}api/vehicle/bookVehicle`;

    const getAllAvailableVehicles = `${baseUrl}api/vehicle/getAllAvailableVehicles`;

    const deleteVehicle = `${baseUrl}api/vehicle/deleteVehicle`;

    const addVehicle = `${baseUrl}api/vehicle/addVehicle`;

    const editVehicle = `${baseUrl}api/vehicle/editVehicle`;

    const getExpiredRentalEvents = `${baseUrl}api/rentalEvent/getExpiredRentalEvents`;

    const markAsAvailable = `${baseUrl}api/vehicle/markAsAvailable`;

    return{
        isUserLoggedIn,
        getCurrentUser,
        getAllUsers,
        getAllVehicles,
        bookVehicle,
        getAllAvailableVehicles,
        deleteVehicle,
        addVehicle,
        editVehicle,
        deleteUser,
        getUserByID,
        editUser,
        getExpiredRentalEvents,
        markAsAvailable
    }
})();

export default Urls;