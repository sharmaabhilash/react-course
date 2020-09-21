import React from 'react';

const person = (props) => {
    // return <p>I'm a Person!!! And I'm { Math.floor(Math.random() * 30) } year's old!</p>
    return (
        <div>
            <p>I'm { props.name } and I'm { props.age } year's old!</p>
            <p>{ props.children }</p>
        </div>
    );
}

export default person;