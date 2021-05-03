import { UserStore } from "./userStore";

export class RootStore{
    constructor(){
        this.userStore = new UserStore(this);
    }
};