const Helpers = (() => {

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
    }

    return {
        formatTime
    }
})();

export default Helpers;