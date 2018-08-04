import React from 'react';

//This method creates stateless functional component.
//Stateless component as one that can receive data and render it, 
//but does not manage or track changes to that data.

const SportsList = () => {
    return (
        <div> 
            <ul>
                <li> Paintball </li>
                <li> Basketball </li>
                <li> Frisbee </li>
            </ul>
        </div>
    );
};



export default SportsList;