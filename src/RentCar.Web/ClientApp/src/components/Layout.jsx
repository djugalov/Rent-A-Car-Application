import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Header } from './header/header';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import VehiclesList from './vehiclesList/vehiclesList';

const Layout = inject('RootStore')(observer(({ RootStore }) => {
  useEffect(() => {
    RootStore.userStore.checkIfUserIsAuthenticated();
    console.log(RootStore.userStore.isUserAuthenticated)
  }, [RootStore.userStore])

  return (
    <div>
      <Header />
      <BrowserRouter>
          <Route path='/book' component={() => <VehiclesList/>} />
      </BrowserRouter>
    </div>
  );
}))

export default Layout;
