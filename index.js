import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

function Button(props) {
    return <button onClick={props.onClick}>Say Hello</button>;
}

function HelloButton() {
    function handleClick() {
        alert('Hello!');
    }
    return <Button onClick={handleClick} />;
}

ReactDOM.render(
    <HelloButton />,
    document.getElementById('container')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
    Hello, {formatName(user)}!
</h1>
);

ReactDOM.render(
    element,
    document.getElementById('user')
);


function tick() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
);
    ReactDOM.render(
        element,
        document.getElementById('tick')
    );
}

setInterval(tick, 1000);
