import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form, Grid, Header, Image, Input, Segment } from 'semantic-ui-react'
import Helpers from '../../utils/helpers/helpers';

const BookVehicleForm = inject('RootStore')(observer(({ RootStore, ...props }) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [price, setPrice] = useState(null);
    const [isStateValid, setIsStateValid] = useState(true);

    const calculatePrice = (endTime, startTime) => {
        let totalDays = Helpers.calculateTotalDays(startTime, endTime);
        let basePrice = totalDays * props.vehicle.pricePerDay;
        let discount = Helpers.getDiscountPercentage(totalDays, RootStore.userStore.currentUser.isVip);
        setPrice(basePrice - basePrice * discount / 100);
    }

    const onChangeStartDate = (event, data) => {
        setStartDate(data.value);
        if (endDate !== null && data.value !== null) {
            calculatePrice(endDate, data.value);
        }
    }

    const onChangeEndDate = (event, data) => {
        setEndDate(data.value);
        if (startDate !== null && data.value !== null) {
            calculatePrice(data.value, startDate);
        }
    }

    const clickHandler = () => {
        if (RootStore.userStore.isUserAuthenticated) {
            let dto = {
                vehicleID: props.vehicle.id,
                userID: RootStore.userStore.currentUser.id,
                startDate: startDate,
                endDate: endDate
            }
            
            if (!Helpers.isStateValid(dto)) {
                setIsStateValid(false);
            } else RootStore.vehicleStore.bookVehicle(dto);
        }
        else window.location.pathname = '/identity/account/login';
    }

    return (
        <>
            <Segment color='blue'>
                <Grid padded>
                    <Grid.Column width={8}>
                        <Header as='h2'>Please select booking dates</Header>
                        <Form>
                            <Form.Group widths={2}>
                                <SemanticDatepicker label='Start Date' minDate={new Date()} onChange={onChangeStartDate} />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <SemanticDatepicker label='End Date' minDate={new Date()} onChange={onChangeEndDate} />
                            </Form.Group>
                            <Form.Group inline>
                                <Form.Field
                                    control={Input}
                                    label='Price'
                                    placeholder='Price'
                                    value={startDate !== null && endDate !== null ? price : ""}
                                    readOnly={true}
                                />
                            </Form.Group>
                            {isStateValid ? "" : <p className='error'>Please fill all fields</p>}
                            <Button onClick={clickHandler}>Submit</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src={props.vehicle.imageLink} />
                    </Grid.Column>
                </Grid>
            </Segment>

        </>
    )
}))

export default BookVehicleForm;
