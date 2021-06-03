import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Enums from '../../utils/helpers/enums';
import Helpers from '../../utils/helpers/helpers';
import MaterialTable from 'material-table';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const ExpiredRentalEventsList = inject('RootStore')(observer(({ RootStore }) => {

    useEffect(() => {
        RootStore.vehicleStore.getExpiredRentalEvents();
    }, [RootStore.vehicleStore])

    const getRowsData = () => RootStore.vehicleStore.expiredRentalEvents.map(x => ({
        id: x.vehicleID,
        vehicle: x.vehicleDescription,
        startDate: Helpers.formatTime(x.rentalEventStartDate),
        endDate: Helpers.formatTime(x.rentalEventEndDate)
    }));

    const markVehicleFromEventAsAvailable = (rowData) => {
        let dto = {
            id: rowData.id
        }
        RootStore.vehicleStore.markAsAvailable(dto);
    }
    return (
            <MaterialTable
                title={"Expired Rental Events, please, select the vehicles that can be marked as available"}
                columns={Enums.expiredRentalEventsListColumns}
                options={Enums.materialTableOptions}
                data={getRowsData()}
                actions={[
                    {
                        icon: EventAvailableIcon,
                        tooltip: 'Mark vehicle as available',
                        onClick: (event, rowData) => markVehicleFromEventAsAvailable(rowData)
                    }
                ]} />
    )
}))

export default ExpiredRentalEventsList;
