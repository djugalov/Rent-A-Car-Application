import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Enums from '../../utils/helpers/enums';
import Helpers from '../../utils/helpers/helpers';
import icon from './actionIconsVehicleList/placeholder.png';
import MaterialTable from 'material-table';
import PinDrop from '@material-ui/icons/PinDrop';

const VehiclesList = inject('RootStore')(observer(({ RootStore }) => {

    useEffect(() => {
        RootStore.vehicleStore.getAllVehicles();
    }, [RootStore.vehicleStore])

    const columns = [
        { title: "Brand", field: "brand" },
        { title: "Model", field: "model" },
        { title: "Constuctor Date", field: "constructionDate" },
        { title: "Seats", field: "seats" }
    ];

    const getRowsData = () => RootStore.vehicleStore.allVehicles.map(x => ({
        brand: x.brand,
        model: x.model,
        constructionDate: Helpers.formatTime(x.constructionDate),
        seats: x.numberOfSeats
    }));

    return (
        <>
            <MaterialTable
                title={"Currently available cars"}
                columns={Enums.vehicleListColumns}
                options={Enums.materialTableOptions}
                data={getRowsData()}
                actions={[
                    {
                        icon: PinDrop,
                        tooltip: 'Book selected car'
                    }
                ]} />
        </>
    )
}))

export default VehiclesList;
