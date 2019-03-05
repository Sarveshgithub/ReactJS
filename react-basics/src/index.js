import React from 'react';
import ReactDOM from 'react-dom'

//Components import from components folders
import Header from './components/header'
const App = () => {
    return (
        <div>
            <Header/>
            <h1>This my first App</h1>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector('#root'));