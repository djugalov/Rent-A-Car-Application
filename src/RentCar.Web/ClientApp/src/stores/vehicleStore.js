import { action, decorate, makeObservable, observable } from "mobx";
import Ajax from "../ajax/ajax";

export class VehicleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this,{
            allVehicles: observable,
            setAllVehicles: action
        })
    }

    allVehicles = [];

    setAllVehicles = (val) => this.allVehicles = val;

    getAllVehicles = () => Ajax.getAllVehicles(this.getAllVehiclesSuccess, this.getAllVehiclesError);

    getAllVehiclesSuccess = (response) => this.setAllVehicles(response.data);

    getAllVehiclesError = (error) => console.log(error);
}