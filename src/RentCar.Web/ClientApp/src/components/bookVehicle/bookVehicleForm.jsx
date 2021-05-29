import React from 'react';
import { inject, observer } from 'mobx-react';

const BookVehicleForm = inject('RootStore')(observer(({ RootStore }) => {

    return (
        <>
        <h1>Test</h1>
        </>
    )
}))

export default BookVehicleForm;
