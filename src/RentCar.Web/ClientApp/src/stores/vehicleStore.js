import { action, makeObservable, observable } from "mobx";
import Ajax from "../ajax/ajax";
import EventBus from "../utils/eventBus/eventBus";
import Enums from "../utils/helpers/enums";

export class VehicleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            renderAddVehicleForm: observable,
            activeHeaderItem: observable,
            allVehicles: observable,
            allAvailableVehicles: observable,
            expiredRentalEvents: observable,
            setRenderVehicleForm: action,
            setActiveHeaderItem: action,
            setAllAvailableVehicles: action,
            setAllVehicles: action,
            setExpiredRentalEvents: action
        })
    }

    baseErrorHandler = (error) => {
        EventBus.publish(Enums.eventTypesForBus.error, Enums.eventBusMessages.baseError);
        console.log(error);
    };

    activeHeaderItem = 'home';

    allVehicles = [];

    allAvailableVehicles = [];

    expiredRentalEvents = [];

    setActiveHeaderItem = (val) => this.activeHeaderItem = val;

    setExpiredRentalEvents = (val) => this.expiredRentalEvents = val;

    setAllVehicles = (val) => this.allVehicles = val;

    setAllAvailableVehicles = (val) => this.allAvailableVehicles = val;

    getAllVehicles = () => Ajax.getAllVehicles(this.getAllVehiclesSuccess, this.getAllVehiclesError);

    getAllVehiclesSuccess = (response) => this.setAllVehicles(response.data);

    getAllVehiclesError = (error) => console.log(error);

    getAllAvailableVehicles = () => Ajax.getAllAvailableVehicles(this.getAllAvailableVehiclesSuccess, this.getAllAvailableVehiclesError);

    getAllAvailableVehiclesSuccess = (response) => this.setAllAvailableVehicles(response.data);

    getAllAvailableVehiclesError = (error) => console.log(error);

    bookVehicle = (bookVehicleDto) => Ajax.bookVehicle(bookVehicleDto, this.bookVehicleSuccess, this.bookVehicleError);

    bookVehicleSuccess = (response) => {
        EventBus.publish(Enums.eventTypesForBus.success, Enums.eventBusMessages.bookVehicleSuccess);
        this.setAllAvailableVehicles(this.allAvailableVehicles.filter(x => x.id !== response.data));
    }

    bookVehicleError = (error) => this.baseErrorHandler(error);

    deleteVehicle = (id) => Ajax.deleteVehicle(id, this.deleteVehicleSuccess, this.deleteVehicleError);

    deleteVehicleSuccess = (response) => {
        EventBus.publish(Enums.eventTypesForBus.success, Enums.eventBusMessages.deleteVehicleSuccess);
        this.setAllVehicles(this.allVehicles.filter(x => x.id !== response.data));
    }

    deleteVehicleError = (error) => this.baseErrorHandler(error);

    addVehicle = (data) => Ajax.addVehicle(data, this.addVehicleSuccess, this.addVehicleError);

    addVehicleSuccess = (response) => {
        EventBus.publish(Enums.eventTypesForBus.success, Enums.eventBusMessages.addVehicleSuccess);
        this.setAllVehicles([...this.allVehicles, response.data]);
    }

    addVehicleError = (error) => this.baseErrorHandler(error);

    editVehicle = (data) => Ajax.editVehicle(data, this.editVehicleSuccess, this.editVehicleError);

    editVehicleSuccess = (response) => {
        EventBus.publish(Enums.eventTypesForBus.success, Enums.eventBusMessages.editVehicleSuccess);
        let vehicles = this.allVehicles.filter(x => x.id !== response.data.id);
        this.setAllVehicles([...vehicles, response.data]);
    }

    editVehicleError = (error) => this.baseErrorHandler(error);

    getExpiredRentalEvents = () => Ajax.getExpiredRentalEvents(this.getExpiredRentalEventsSuccess, this.getExpiredRentalEventsError);

    getExpiredRentalEventsSuccess = (response) => this.setExpiredRentalEvents(response.data);

    getExpiredRentalEventsError = (error) => this.baseErrorHandler(error);

    markAsAvailable = (data) => Ajax.markAsAvailable(data, this.markAsAvailableSuccess, this.markAsAvailableError);

    markAsAvailableSuccess = (response) => {
        EventBus.publish(Enums.eventTypesForBus.success, Enums.eventBusMessages.markAsAvailableSuccess);
        this.setExpiredRentalEvents(this.expiredRentalEvents.filter(x => x.vehicleID !== response.data));
    }
    
    markAsAvailableError = (error) => this.baseErrorHandler(error);

    renderAddVehicleForm = false;

    setRenderVehicleForm = (val) => this.renderAddVehicleForm = val;
}