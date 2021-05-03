import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Header } from './header/header';

const Layout = inject('RootStore')(observer(({RootStore}) => {
  useEffect(() => {
    RootStore.userStore.checkIfUserIsAuthenticated();
    console.log(RootStore.userStore.isUserAuthenticated)
  }, [RootStore.userStore])

  return (
    <div>
      <Header />
    </div>
  );
}))

export default Layout;
