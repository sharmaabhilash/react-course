import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    /** 
     * This will check if show state is changed or not, if changed then only the 'modal' component is called or updated, else it will not get called. Also component wrapped inside 'modal' component is also not called.
     * */
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show != this.props.show;
    }

    componentDidUpdate () {
        console.log('[Modal] component');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={ this.props.show } clicked={ this.props.modalClosed }></Backdrop>
                <div className={ classes.Modal }
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    { this.props.children }
                </div>
            </Aux>
        );
    }
}

export default Modal;