import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 500px;
    }
`;

const person = (props) => {

    const styles = {
        '@media (min-width: 500px)': {
            width: '500px'
        }
    };

    // return <p>I'm a Person!!! And I'm { Math.floor(Math.random() * 30) } year's old!</p>
    return (
        <StyledDiv>
            <p onClick={ props.click }>I'm { props.name } and I'm { props.age } year's old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </StyledDiv>
    );
}

export default person;