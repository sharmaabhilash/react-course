import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={ this.props.ctr } />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter }  />
                <CounterControl label="Subtract 3" clicked={ this.props.onSubtractCounter }  />
                <hr />
                <button onClick={ () => this.props.onStoreResult(this.props.ctr) }>
                    Store Result
                </button>
                <ul>
                    {
                        this.props.storedResults.map(storeResult => {
                            return (
                                <li key={ storeResult.id } onClick={ () => this.props.onDeleteResult(storeResult.id) }>
                                    { storeResult.value }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onAddCounter: () => dispatch(actions.add(5)),
        onSubtractCounter: () => dispatch(actions.subtract(3)),
        onStoreResult: (counter) => dispatch(actions.storeResult(counter)),
        onDeleteResult: (id) => dispatch(actions.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);