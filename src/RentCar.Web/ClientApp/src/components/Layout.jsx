import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Header } from './header/header';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import VehiclesList from './vehiclesList/vehiclesList';
import VehicleManagementList from './vehicleManagement/vehicleManagementList';
import UserManagementList from './userManagement/userManagementList';
import MyAccount from './myAccount/myAccount';
import ExpiredRentalEventsList from './expiredRentalEvents/expiredRentalEventsList';
import Home from './home/home';
import { Message } from './message/message';

const Layout = inject('RootStore')(observer(({ RootStore }) => {
  useEffect(() => {
    RootStore.userStore.checkIfUserIsAuthenticated();
    RootStore.userStore.getCurrentUser();
  }, [RootStore.userStore])

  const renderAdminRoutes = () => RootStore.userStore.currentUser.isAdmin ? <Switch>
    <Route path='/management' component={() => <VehicleManagementList />} />
    <Route path='/userManagement' component={() => <UserManagementList />} />
    <Route path='/rentalEventsManagement' component={() => <ExpiredRentalEventsList />} />
  </Switch> : <></>

  return (
    <div>
      <Message/>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route path='/home' component={() => <Home />} />
          <Route path='/book' component={() => <VehiclesList />} />
          <Route path='/myAccount' component={() => <MyAccount />} />
          {renderAdminRoutes()}
        </Switch>
      </BrowserRouter>
    </div>
  );
}))

export default Layout;
