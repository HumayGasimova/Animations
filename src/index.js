import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import configureStore,{
    history
} from './store/index';
import {
    Route,
    Switch
} from 'react-router-dom';
import {
    ConnectedRouter
} from 'connected-react-router';
import App from './components/app';
import Parallax from './components/Parallax/Parallax';
import Text from './components/Parallax/Text/text';

const store = configureStore()
ReactDOM.render(
    // <Provider store={store}>
    //    <ConnectedRouter history={history}>
    //            <App>
    //                 <Switch>
    //                     <Route 
    //                         exact 
    //                         path="/MatchA"
    //                         render={()=>(<div><img src={Picture}/></div>)}/>
    //                     <Route 
    //                         exact 
    //                         path="/MatchB"
    //                         render={()=>(<div>Match2</div>)}/>
    //                     <Route 
    //                         render={()=>(<div>Match</div>)}/>
    //                 </Switch>
    //             </App>    
    //    </ConnectedRouter>
    // </Provider>
    <Parallax/>,
   document.getElementById('app')
);
