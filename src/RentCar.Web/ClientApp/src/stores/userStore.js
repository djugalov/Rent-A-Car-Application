import { action, decorate, makeObservable, observable } from "mobx";
import Ajax from "../ajax/ajax";

export class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this,{
            isUserAuthenticated: observable,
            setIsUserAuthenticated: action,
            checkIfUserIsAuthenticated: action
        })
    }

    isUserAuthenticated = false;

    setIsUserAuthenticated = (value) => this.isUserAuthenticated = value;

    checkIfUserIsAuthenticated = () => Ajax.isUserLoggedIn(this.checkIfUserIsAuthenticatedSuccess, this.checkIfUserIsAuthenticatedError);

    checkIfUserIsAuthenticatedSuccess = (response) => this.setIsUserAuthenticated(response.data);

    checkIfUserIsAuthenticatedError = () => console.log("error");
}