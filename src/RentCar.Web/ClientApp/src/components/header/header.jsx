import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

export const Header = inject('RootStore')(observer(({ RootStore }) => {

    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (name) => setActiveItem(name);

    const handleAuthClick = (name) => {
        setActiveItem(name);
        window.location.pathname = name === 'signUp' ? '/identity/account/register' : '/identity/account/login';
    }

    const renderNavItemsBasedOnUserAuth = () => {
        console.log(RootStore.userStore.isUserAuthenticated)
        return RootStore.userStore.isUserAuthenticated ?
            <Menu.Item
                name='My Account'
                active={activeItem === 'myAccount'}
                onClick={() => handleItemClick("myAccount")}
            /> :
            <>
                <Menu.Item
                    name='Sign In'
                    active={activeItem === 'signIn'}
                    onClick={() => handleAuthClick("signIn")}
                />
                <Menu.Item
                    name='Sign Up'
                    active={activeItem === 'signUp'}
                    onClick={() => handleAuthClick("signUp")}
                />
            </>
    };

    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={() => handleItemClick("home")}
                />
                <Menu.Item
                    name='Book a Car'
                    active={activeItem === 'book'}
                    onClick={() => handleItemClick("book")}
                />
                <Menu.Menu position='right'>
                    {renderNavItemsBasedOnUserAuth()}
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}))
