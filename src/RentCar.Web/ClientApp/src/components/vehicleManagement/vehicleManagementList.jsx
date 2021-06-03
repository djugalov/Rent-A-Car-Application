import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Enums from '../../utils/helpers/enums';
import Helpers from '../../utils/helpers/helpers';
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddVehicleForm from './addVehicleForm';
import { Button } from 'semantic-ui-react';

const VehicleManagementList = inject('RootStore')(observer(({ RootStore }) => {

    useEffect(() => {
        RootStore.vehicleStore.getAllVehicles();
    }, [RootStore.vehicleStore])

    const tableRef = React.useRef();

    const getRowsData = () => RootStore.vehicleStore.allVehicles.map(x => ({
        key: x.id,
        id: x.id,
        brand: x.brand,
        model: x.model,
        constructionDate: Helpers.formatTime(x.constructionDate),
        seats: x.numberOfSeats,
        fuelType: x.fuelType,
        vehicleType: x.vehicleType,
        imageLink: x.imageLink,
        pricePerDay: x.pricePerDay
    }));

    const renderForm = (rowData) => <AddVehicleForm key={rowData.id} vehicle = {rowData} isEdit = {true} />

    const deleteVehicle = (rowData) => {
        let deleteVehicleDto = {
            id: rowData.id
        };
        RootStore.vehicleStore.deleteVehicle(deleteVehicleDto);
    };

    return (
        <>
        <Button onClick={()=>RootStore.vehicleStore.setRenderVehicleForm(!RootStore.vehicleStore.renderAddVehicleForm)}>{!RootStore.vehicleStore.renderAddVehicleForm ? "Add New Vehicle" : "Go To Vehicles List"}</Button>
            {RootStore.vehicleStore.renderAddVehicleForm ? <AddVehicleForm isEdit={false}/> : <MaterialTable
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
                        icon: DeleteIcon,
                        tooltip: 'Delete Selected Car',
                        onClick: (event, rowData) => deleteVehicle(rowData)
                    },
                    {
                        icon: EditIcon,
                        tooltip: 'Add New Vehicle',
                        onClick: (event, rowData) => tableRef.current.onToggleDetailPanel([rowData.tableData.id],
                            tableRef.current.props.detailPanel[0].render)
                    }
                ]} />}
        </>
    )
}))

export default VehicleManagementList;
