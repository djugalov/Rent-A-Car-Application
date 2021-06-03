import React, { useState } from 'react'
import { inject, observer } from 'mobx-react';
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react';
import Helpers from '../../utils/helpers/helpers';

const MyAccount = inject('RootStore')(observer(({ RootStore }) => {

    const [firstName, setFirstName] = useState(RootStore.userStore.currentUser.firstName);
    const [middleName, setMiddleName] = useState(RootStore.userStore.currentUser.middleName);
    const [lastName, setLastName] = useState(RootStore.userStore.currentUser.lastName);
    const [address, setAddress] = useState(RootStore.userStore.currentUser.address);
    const [phoneNumber, setPhoneNumber] = useState(RootStore.userStore.currentUser.phoneNumber);
    const [isStateValid, setIsStateValid] = useState(true);

    const clickHandler = () => {
        let editDto = {
            id: RootStore.userStore.currentUser.id,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber
        };
        
        if (!Helpers.isStateValid(editDto)) {
            setIsStateValid(false);
        } else RootStore.userStore.editUser(editDto);
    }

    return (
        <Segment color={'blue'}>
            <Grid padded>
                <Grid.Column>
                    <Header as="h1">Account Information</Header>
                    <p>Update your details</p>
                    <Form>
                        <Form.Group>
                            <Form.Input name='username' value={RootStore.userStore.currentUser.username} label='Username' placeholder='Username' readOnly={true} width={6} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input name='firstName' label='First Name' defaultValue={RootStore.userStore.currentUser.firstName} onChange={(event, data) => setFirstName(data.value)} placeholder='First Name' width={3} />
                            <Form.Input name='middleName' label='Middle Name' defaultValue={RootStore.userStore.currentUser.middleName} onChange={(event, data) => setMiddleName(data.value)} placeholder='Middle Name' width={3} />
                            <Form.Input name='lastName' label='Last Name' defaultValue={RootStore.userStore.currentUser.lastName} onChange={(event, data) => setLastName(data.value)} placeholder='Last Name' width={3} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input name='address' label='Address' defaultValue={RootStore.userStore.currentUser.address} onChange={(event, data) => setAddress(data.value)} placeholder='Address' width={9} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input name='rating' label='Rating' defaultValue={RootStore.userStore.currentUser.isVip ? "VIP CUSTOMER" : "REGULAR CUSTOMER"} placeholder='Rating' readOnly={true} width={4} />
                            <Form.Input name='phoneNumber' type='number' label='Phone Number' defaultValue={RootStore.userStore.currentUser.phoneNumber} onChange={(event, data) => setPhoneNumber(data.value)} placeholder='Phone Number' width={4} />
                        </Form.Group>
                        {isStateValid ? "" : <p className='error'>Please fill all fields</p>}
                        <Button onClick={clickHandler}>Update Details</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}))
export default MyAccount;
