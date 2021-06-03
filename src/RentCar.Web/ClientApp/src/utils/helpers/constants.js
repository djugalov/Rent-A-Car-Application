const Constants = (() => {

    const VipLevelPercentageDiscount = 15;

    const BronzeLevelPercentageDiscount = 5;

    const SilverLevelPercentageDiscount = 7;

    const GoldLevelPercentageDiscount = 10;

    const predefinedCarouselVehicleItems = [
        {
            name: "Tesla Model 3- 2020",
            description: "Electric vibes, style amd comfort",
            imageLink: "https://wallpaperaccess.com/full/486526.jpg"
        },
        {
            name: "Maserati Ghibli-Hybrid- 2019",
            description: "Travel with class all the way up",
            imageLink: "https://s7g10.scene7.com/is/image/maserati/dealers/no/Ghibli-Hybrid/169/Ghibli_Grey_3-4_front_passenger_side.jpg?$1920x2000$&fit=constrain"
        },
        {
            name: "Renault Megane- 2018",
            description: "Economy and comfort all in one place",
            imageLink: "https://s1.1zoom.me/b5762/92/Renault_2018_Megane_R.S._280_Cup_Orange_Metallic_552519_1920x1080.jpg"
        }
    ];

    return {
        VipLevelPercentageDiscount,
        BronzeLevelPercentageDiscount,
        SilverLevelPercentageDiscount,
        GoldLevelPercentageDiscount,
        predefinedCarouselVehicleItems
    }

})();

export default Constants;