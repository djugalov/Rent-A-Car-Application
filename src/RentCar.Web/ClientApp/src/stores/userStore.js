import { action, makeObservable, observable } from "mobx";
import Ajax from "../ajax/ajax";

export class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this,{
            isUserAuthenticated: observable,
            currentUser: observable,
            allUsers: observable,
            setAllUsers: action,
            setIsUserAuthenticated: action,
            setCurrentUser: action,
            checkIfUserIsAuthenticated: action
        })
    }

    isUserAuthenticated = false;

    currentUser = {};

    allUsers = [];

    setCurrentUser = (val) => this.currentUser = val;

    setIsUserAuthenticated = (value) => this.isUserAuthenticated = value;

    setAllUsers = (val) => this.allUsers = val;

    checkIfUserIsAuthenticated = () => Ajax.isUserLoggedIn(this.checkIfUserIsAuthenticatedSuccess, this.checkIfUserIsAuthenticatedError);

    checkIfUserIsAuthenticatedSuccess = (response) => this.setIsUserAuthenticated(response.data);

    checkIfUserIsAuthenticatedError = () => console.log("error");

    getCurrentUser = () => Ajax.getCurrentUser(this.getCurrentUserSuccess, this.getCurrentUserError);

    getCurrentUserSuccess = (response) => this.setCurrentUser(response.data);

    getCurrentUserError = (error) => console.log(error);

    getAllUsers = () => Ajax.getAllUsers(this.getAllUsersSuccess, this.getAllUsersError);

    getAllUsersSuccess = (response) => this.setAllUsers(response.data);

    getAllUsersError = (error) => console.log(error);

    deleteUser = (id) => Ajax.deleteUser(id, this.deleteUserSuccess, this.deleteUserError);
    
    deleteUserSuccess = (response) => this.setAllUsers(this.allUsers.filter(x=>x.id!==response.data));

    deleteUserError = (error) => console.log(error);

    //Currently Not Needed
    getUserByID = () => Ajax.getUserByID(this.currentUser.id, this.getUserByIDSuccess, this.getUserByIDError);

    getUserByIDSuccess = (response) => console.log("") 

    getUserByIDError = (error) => console.log(error);

    editUser = (data) => Ajax.editUser(data, this.editUserSuccess, this.editUserError);

    editUserSuccess = (response) => this.setCurrentUser(response.data); 

    editUserError = (error) => console.log(error);
}