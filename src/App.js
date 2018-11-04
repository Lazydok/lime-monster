import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'
import { MainMenu } from './component/containers'
import Footer from './component/ui/footer'
import logo from './logo.svg';

const App = () =>
    <React.Fragment>
        <CssBaseline/>
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Lime Monster Creative Arts</h1>
        </div>
        <div className="App" >
            <MainMenu />
        </div>
        <div className="App-footer">
            <Footer />
        </div>
    </React.Fragment>


export default App;
