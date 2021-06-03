import React, { useEffect, useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Enums from '../../utils/helpers/enums';

export const Header = inject('RootStore')(observer(({ RootStore }) => {

    useEffect(() => {
        if (window.location.pathname === '/') {
            RootStore.vehicleStore.setActiveHeaderItem('home')
        } else {
            RootStore.vehicleStore.setActiveHeaderItem(window.location.pathname.slice(1))
        }
    })

    const handleItemClick = (name) => RootStore.vehicleStore.setActiveHeaderItem(name);

    const handleAuthClick = (name) => {
        window.location.pathname = name === 'signUp' ? '/identity/account/register' : '/identity/account/login';
    }

    const renderNavItemsBasedOnUserAuth = () => {
        return RootStore.userStore.isUserAuthenticated ?
            <Menu.Item
                as={Link}
                to='myAccount'
                name='My Account'
                active={RootStore.vehicleStore.activeHeaderItem === 'myAccount'}
                onClick={() => handleItemClick("myAccount")}
            /> :
            <>
                <Menu.Item
                    name='Sign In'
                    active={RootStore.vehicleStore.activeHeaderItem === 'signIn'}
                    onClick={() => handleAuthClick("signIn")}
                />
                <Menu.Item
                    name='Sign Up'
                    active={RootStore.vehicleStore.activeHeaderItem === 'signUp'}
                    onClick={() => handleAuthClick("signUp")}
                />
            </>
    };

    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                {Enums.navMenuItems.filter(x =>!x.isAdminItem || x.isAdminItem===RootStore.userStore.currentUser.isAdmin).map(x => <Menu.Item
                    key={x.name}
                    as={Link}
                    to={`${x.activeLink}`}
                    name={x.name}
                    active={RootStore.vehicleStore.activeHeaderItem === x.activeLink}
                    onClick={() => handleItemClick(x.activeLink)}
                />)}
                <Menu.Menu position='right'>
                    {renderNavItemsBasedOnUserAuth()}
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}))
