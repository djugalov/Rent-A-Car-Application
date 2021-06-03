import Constants from "./constants";

const Helpers = (() => {

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
    }

    const getDiscountPercentage = (daysRented, isVip) => {
        if (isVip) {
            return Constants.VipLevelPercentageDiscount;
        }
        if (daysRented > 3) {
            return Constants.BronzeLevelPercentageDiscount;
        }
        if (daysRented > 5) {
            return Constants.SilverLevelPercentageDiscount;
        }
        if (daysRented > 10) {
            return Constants.GoldLevelPercentageDiscount;
        }
        return 0;
    }

    const calculateTotalDays = (startTime, endTime) => {
        let diffInTime = endTime.getTime() - startTime.getTime();
        return diffInTime / (1000 * 3600 * 24);
    }

    const isStateValid = (dto) => {
        let isValid = true;
        Object.values(dto).map(x => {
            if (x === undefined || x === "" || x === null) {
                isValid = false;
            }
        })
        return isValid;
    }

    return {
        formatTime,
        getDiscountPercentage,
        calculateTotalDays,
        isStateValid
    }
})();

export default Helpers;