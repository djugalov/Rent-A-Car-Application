const Urls = (()=>{
    const baseUrl = 'https://localhost:5001/';

    const isUserLoggedIn = `${baseUrl}api/user/IsUserLoggedIn`;

    return{
        isUserLoggedIn
    }
})();

export default Urls;