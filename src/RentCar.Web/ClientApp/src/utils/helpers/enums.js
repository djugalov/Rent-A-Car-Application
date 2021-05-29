const Enums = (() => {

    const vehicleListColumns = [
        { title: "Brand", field: "brand" },
        { title: "Model", field: "model" },
        { title: "Constuctor Date", field: "constructionDate" },
        { title: "Seats", field: "seats" }
    ];

    const materialTableOptions = {
        search: true,
        paging: true,
        pageSize: 10
    };

    return {
        vehicleListColumns,
        materialTableOptions
    }

})();

export default Enums;