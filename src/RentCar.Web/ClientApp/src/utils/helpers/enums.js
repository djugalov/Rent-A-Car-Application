const Enums = (() => {

    const vehicleListColumns = [
        { title: "Brand", field: "brand" },
        { title: "Model", field: "model" },
        { title: "Constuctor Date", field: "constructionDate" },
        { title: "Seats", field: "seats" },
        { title: "Price Per Day", field: "pricePerDay" }
    ];

    const expiredRentalEventsListColumns = [
        { title: "Vehicle ID", field: "id" },
        { title: "Vehicle", field: "vehicle" },
        { title: "Start Date", field: "startDate" },
        { title: "End Date", field: "endDate" }
    ];

    const usersListColumns = [
        { title: "Username", field: "username" },
        { title: "FullName", field: "fullName" },
        { title: "Email", field: "email" },
        { title: "PhoneNumber", field: "phoneNumber" }
    ];

    const materialTableOptions = {
        search: true,
        paging: true,
        pageSize: 10
    };

    const fuelTypes =
    {
        "Petrol": 0,
        "Diesel": 1,
        "Hybrid": 2,
        "Electic": 3
    };

    const vehicleTypes =
    {
        "Economy": 0,
        "Estate": 1,
        "Luxury": 2,
        "SUV": 3,
        "Cargo": 4
    };

    const navMenuItems = [
        {
            name: "Home",
            activeLink: "home",
            isAdminItem: false
        },
        {
            name: "Book a Car",
            activeLink: "book",
            isAdminItem: false,
        },
        {
            name: "Car Management",
            activeLink: "management",
            isAdminItem: true
        },
        {
            name: "User Management",
            activeLink: "userManagement",
            isAdminItem: true
        },
        {
            name: "Rental Events Management",
            activeLink: "rentalEventsManagement",
            isAdminItem: true
        }];

        const eventTypesForBus = {
            success: "success",
            error: "error"
        };

        const eventBusMessages = {
            addVehicleSuccess: "The vehicle was added successfully",
            deleteVehicleSuccess: "The vehicle was deleted successfully",
            markAsAvailableSuccess: "The vehicle is available again",
            baseError: "Unexpected error occured, please, try again later!",
            editVehicleSuccess: "The vehicle was edited successfully",
            deleteUserSuccess: "The user was deleted successfully",
            accountEdit: "Your account details were updated successfully",
            bookVehicleSuccess: "The vehicle was booked successfully"
        }

    return {
        vehicleListColumns,
        expiredRentalEventsListColumns,
        usersListColumns,
        materialTableOptions,
        fuelTypes,
        vehicleTypes,
        navMenuItems,
        eventTypesForBus,
        eventBusMessages
    }

})();

export default Enums;