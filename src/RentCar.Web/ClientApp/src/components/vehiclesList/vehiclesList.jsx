import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Enums from '../../utils/helpers/enums';
import Helpers from '../../utils/helpers/helpers';
import MaterialTable from 'material-table';
import PinDrop from '@material-ui/icons/PinDrop';
import BookVehicleForm from '../bookVehicle/bookVehicleForm';

const VehiclesList = inject('RootStore')(observer(({ RootStore }) => {

    useEffect(() => {
        RootStore.vehicleStore.getAllAvailableVehicles();
    }, [RootStore.vehicleStore])

    const tableRef = React.useRef();

    const getRowsData = () => RootStore.vehicleStore.allAvailableVehicles.map(x => ({
        id: x.id,
        brand: x.brand,
        model: x.model,
        constructionDate: Helpers.formatTime(x.constructionDate),
        seats: x.numberOfSeats,
        pricePerDay: x.pricePerDay,
        imageLink: x.imageLink
    }));

    const renderForm = (rowData) => <BookVehicleForm vehicle={rowData} />

    return (
        <>
            <MaterialTable
                tableRef={tableRef}
                title={"Currently available cars"}
                columns={Enums.vehicleListColumns}
                options={Enums.materialTableOptions}
                data={getRowsData()}
                detailPanel={[
                    {
                        icon: () => null,
                        openIcon: () => null,
                        disabled: true,
                        render: rowData => {
                            return renderForm(rowData)
                        }
                    }
                ]}
                actions={[
                    {
                        icon: PinDrop,
                        tooltip: 'Book selected car',
                        onClick: (event, rowData) => tableRef.current.onToggleDetailPanel([rowData.tableData.id],
                            tableRef.current.props.detailPanel[0].render)
                    }
                ]} />
        </>
    )
}))

export default VehiclesList;
