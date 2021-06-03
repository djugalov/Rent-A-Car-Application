import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import MaterialTable from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
import Enums from '../../utils/helpers/enums';

const UserManagementList = inject('RootStore')(observer(({ RootStore }) => {

    useEffect(() => {
        RootStore.userStore.getAllUsers();
    }, [RootStore.userStore])

    const tableRef = React.useRef();

    const getRowsData = () => RootStore.userStore.allUsers.map(x => ({
        id: x.id,
        username: x.username,
        fullName: x.fullName,
        email: x.email,
        phoneNumber: x.phoneNumber
    }));

    const deleteUser = (id) => {
        let deleteUserDto = {
            id: id
        };
        RootStore.userStore.deleteUser(deleteUserDto);
    }
    return (
        <>
            <MaterialTable
                tableRef={tableRef}
                title={"Users in the system"}
                columns={Enums.usersListColumns}
                options={Enums.materialTableOptions}
                data={getRowsData()}
                actions={[
                    {
                        icon: DeleteIcon,
                        tooltip: 'Delete Selected User',
                        onClick: (event, rowData) => deleteUser(rowData.id)
                    }
                ]} />
        </>
    )
}))

export default UserManagementList;
