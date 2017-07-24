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