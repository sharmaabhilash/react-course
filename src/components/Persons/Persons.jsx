import React from 'react';
import Person from './Person/Person';

// We can any name in place of 'props' but props simply point to properties which shortened called props
const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return <Person 
                        click={ () => props.clicked(index) }
                        name={ person.name } 
                        age={ person.age }
                        key={ person.id }
                        changed={ (event) => props.changed(event, person.id) } />
        })
    );
}
export default persons;