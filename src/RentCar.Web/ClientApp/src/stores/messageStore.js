import { action, makeObservable, observable } from "mobx";
import EventBus from "../utils/eventBus/eventBus";
import Enums from "../utils/helpers/enums";

export class MessageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.actionSuccessSubscription = EventBus.subscribe(Enums.eventTypesForBus.success, this.activateMessage(Enums.eventTypesForBus.success));
        
        makeObservable(this,{
            showMessage: observable,
            setShowMessage: action
        })
    }
    messageText;
    messageType;
    showMessage = false;

    setShowMessage = (val) => this.showMessage = val;

    initMessage = (type, message) => {
        this.setShowMessage(false);
        this.messageText = message;
        this.messageType = type;
        this.setShowMessage(true)
    }

    activateMessage = (messageType) => (message) => this.initMessage(messageType, message);
}