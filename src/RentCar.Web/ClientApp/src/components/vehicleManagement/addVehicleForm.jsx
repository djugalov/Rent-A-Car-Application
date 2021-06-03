import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form, Grid, Header, Input, Radio, Segment } from 'semantic-ui-react';
import Enums from '../../utils/helpers/enums';
import Helpers from '../../utils/helpers/helpers';

const AddVehicleForm = inject('RootStore')(observer(({ RootStore, ...props }) => {

    const [constructionDate, setConstructionDate] = useState(props.isEdit ? new Date(props.vehicle.constructionDate) : "");
    const [brand, setBrand] = useState(props.isEdit ? props.vehicle.brand : "");
    const [model, setModel] = useState(props.isEdit ? props.vehicle.model : "");
    const [price, setPrice] = useState(props.isEdit ? props.vehicle.pricePerDay : "");
    const [image, setImage] = useState(props.isEdit ? props.vehicle.imageLink : "");
    const [fuelType, setFuelType] = useState(props.isEdit ? Helpers.getKeyByValue(Enums.fuelTypes, props.vehicle.fuelType) : null);
    const [vehicleType, setVehicleType] = useState(props.isEdit ? Helpers.getKeyByValue(Enums.vehicleTypes, props.vehicle.vehicleType) : null);
    const [numberOfSeats, setNumberOfSeats] = useState(props.isEdit ? props.vehicle.seats : "");
    const [isStateValid, setIsStateValid] = useState(true);

    const onChangeConstructionDate = (event, data) => setConstructionDate(data.value);

    const onChangeBrand = (event, data) => setBrand(data.value);
    const onChangeModel = (event, data) => setModel(data.value);
    const onChangePrice = (event, data) => setPrice(data.value);
    const onChangeImage = (event, data) => setImage(data.value);
    const onChangeFuelType = (event, data) => setFuelType(Helpers.getKeyByValue(Enums.fuelTypes, data.value));
    const onChangeVehicleType = (event, data) => setVehicleType(Helpers.getKeyByValue(Enums.vehicleTypes, data.value));
    const onChangeNumberOfSeats = (event, data) => setNumberOfSeats(data.value);

    const clickHandler = () => {
        const addVehicleDto = {
            brand: brand,
            model: model,
            constructionDate: constructionDate,
            numberOfSeats: numberOfSeats,
            pricePerDay: price,
            imageLink: image,
            fuelType: Enums.fuelTypes[fuelType],
            vehicleType: Enums.vehicleTypes[vehicleType]
        };

        if (!Helpers.isStateValid(addVehicleDto)) {
            setIsStateValid(false);
        } else {
            if (props.isEdit) {
                addVehicleDto.id = props.vehicle.id;
                RootStore.vehicleStore.editVehicle(addVehicleDto);
            }
            else RootStore.vehicleStore.addVehicle(addVehicleDto);
            if(!props.isEdit){
                RootStore.vehicleStore.setRenderVehicleForm(!RootStore.vehicleStore.renderAddVehicleForm)
            }
        }
    }

    return (
        <Segment color='blue'>
            <Grid padded>
                <Grid.Column>
                    <Header as='h2'>Fill the required vehicle information</Header>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='Brand'
                                placeholder='Brand'
                                onChange={onChangeBrand}
                                value={brand}
                            />
                            <Form.Field
                                control={Input}
                                label='Model'
                                placeholder='Model'
                                onChange={onChangeModel}
                                value={model}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                type='number'
                                label='Price Per Day'
                                placeholder='Price Per Day'
                                onChange={onChangePrice}
                                value={price}
                            />
                            <Form.Field
                                control={Input}
                                label='Image link'
                                placeholder='Image Link'
                                onChange={onChangeImage}
                                value={image}
                            />
                            <Form.Field
                                control={Input}
                                type='number'
                                label='Number Of Seats'
                                placeholder='Number Of Seats'
                                onChange={onChangeNumberOfSeats}
                                value={numberOfSeats}
                            />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Fuel Type</label>
                            {Object.keys(Enums.fuelTypes).map(x => <Form.Field
                                key={x}
                                control={Radio}
                                label={x}
                                value={Enums.fuelTypes[x]}
                                checked={Enums.fuelTypes[fuelType] === Enums.fuelTypes[x]}
                                onChange={onChangeFuelType}
                            />)}
                        </Form.Group>
                        <Form.Group inline>
                            <label>Vehicle Type</label>
                            {Object.keys(Enums.vehicleTypes).map(x => <Form.Field
                                control={Radio}
                                label={x}
                                value={Enums.vehicleTypes[x]}
                                checked={Enums.vehicleTypes[vehicleType] === Enums.vehicleTypes[x]}
                                onChange={onChangeVehicleType}
                            />)}
                        </Form.Group>
                        <Form.Field
                            control={SemanticDatepicker}
                            label='Construction Date'
                            placeholder='Construction Date'
                            onChange={onChangeConstructionDate}
                            value={constructionDate}
                        />
                        {isStateValid ? "" : <p className='error'>Please fill all fields</p>}
                        <Button onClick={clickHandler}>{props.isEdit ? "Edit Vehicle" : "Add Vehicle"}</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </Segment>

    )
}))

export default AddVehicleForm;
