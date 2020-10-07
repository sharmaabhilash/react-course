import React from 'react';

// { ...props } will extract all the properties passed for our component. In case of Person component we have properties like name, age and so on, so this will internally converted to name=name passed to component and so on.
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={ className }>
            <WrappedComponent { ...props } />
        </div>
    );
};

export default withClass;