const Urls = (()=>{
    const baseUrl = 'https://localhost:5001/';

    const isUserLoggedIn = `${baseUrl}api/user/IsUserLoggedIn`;

    const getAllVehicles = `${baseUrl}api/vehicle/getAllVehicles`;

    return{
        isUserLoggedIn,
        getAllVehicles
    }
})();

export default Urls;