import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h2>I'm {props.name} and I am {props.age} years old!</h2>
            <p>{props.children}</p>
            <button onClick={props.click}>Switch Names</button>
            <br/>
            <input onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;