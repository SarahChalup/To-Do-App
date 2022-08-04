import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

function App(props){
    return(
        <h1>{props.greeting}, {props.name}</h1>
    )
}

function withGreeting(WrappedComponent){
    return function WrappedComponentWithGreeting(greeting){
        return function Component(props){
            return(
                <React.Fragment>
                    <WrappedComponent {...props} greeting={greeting} />
                    <p>Estamos acompañando al wrapped component</p>
                </React.Fragment>
            )
        }
    }
}

const AppWithGreeting = withGreeting(App)("Buenas tardes");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <AppWithGreeting
        name="Sari" />
);

