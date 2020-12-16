import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {

    let attachedClasses = [ classes.SideDrawer, classes.Close ];

    if (props.open) {
        attachedClasses = [ classes.SideDrawer, classes.Open ];
    }

    return (
        <Aux>
            <Backdrop show={ props.open } clicked={ props.closed } />
            <div className={ attachedClasses.join(' ') }>
                <div className={ classes.Logo }>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuth={ props.isAuth } />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;