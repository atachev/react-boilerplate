import React from 'react';
import 'normalize.css';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome!</h1>
                <ul>
                    <li>
                        <a
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://babeljs.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn Babel
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://webpack.js.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn Webpack
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default App;
