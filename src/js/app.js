import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}  from 'react-router-dom';

import Stickers from './components/stickers/_stickers'
import TicTacToePage from './containers/TicTacToePage'
//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './../style/custom.css';

//redux
import {Provider} from 'react-redux';
import store      from './redux/store';

const Header = () => (
    <header style={{paddingBottom: '20px'}}>
        <nav>
            <Link className={'alert alert-primary'} to='/'>Home</Link>
            <Link className={'alert alert-secondary'} to='/stickers'>Stickers</Link>
            <Link className={'alert alert-success'} to='/stickers/demo/hello'>Hello world</Link>
        </nav>
    </header>
);

const Home = () => (
    <div>
        <h3>My React App Template!</h3>
    </div>
);

const HelloWorld = () => (
    <div>
        <h5>Hello World!</h5>
    </div>
);

const NumberPage = (props) => {
    const number = parseInt(props.match.params.number, 10);
    return (<h2>{number}</h2>);
};

const StickersRoutes = () => (
    <div>
        <h3>Stickers page</h3>
        <Switch>
            <Route exact path='/stickers' component={Stickers}/>
            <Route path='/stickers/demo/hello' component={HelloWorld}/>
            <Route path='/stickers/:number' component={NumberPage}/>
        </Switch>
    </div>
);

const TicTacToeRoutes = () => (
    <div>
        <h3>Tic Tac Toe Page</h3>
        <Switch>
            <Route exact path='/tictactoe' component={TicTacToePage}/>
        </Switch>
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/stickers' component={StickersRoutes}/>
            <Route path='/tictactoe' component={TicTacToeRoutes}/>
        </Switch>
    </main>
);

// Application + Router
const App = () => (
    <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>
);

const Application = () => (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

// Render App with redux and router
render(<Application />, document.getElementById("app"));
