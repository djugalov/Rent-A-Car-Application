import { MessageStore } from "./messageStore";
import { UserStore } from "./userStore";
import { VehicleStore } from "./vehicleStore";

export class RootStore{
    constructor(){
        this.userStore = new UserStore(this);
        this.vehicleStore = new VehicleStore(this);
        this.messageStore = new MessageStore(this);
    }
};