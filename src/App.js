import React, {Component, lazy, Suspense}from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import ContextA from './ContextA';
// import UserContext from './UserContext'

// import ContextB from './ContextB';
// import  Form from './src./Form ';
// import  Home from './src./Home';
// import  User from './src./Class';
// import  Error from './Error';

const asyHome=lazy(()=>import('./Home'));
const asyForm=lazy(()=>import('./Form'));
const asyUser=lazy(()=>import('./Class'));


class App extends Component {
   render() {
      return (
      //    <UserContext.Provider value={{username:'Sasanka'}}>
      // <h1 style= {{textAlign:"center"}}> Context</h1>
      // <ContextA />
      //    </UserContext.Provider>
      // )
            <React.Fragment>
               <BrowserRouter>
           <Switch>
           <Suspense  fallback={<h3>Loading....</h3>}>
           <Route exact={true} path="/" component={asyHome}/>
            <Route path="/form" component={asyForm}/>
            <Route path="/Class" component={asyUser}/>
            <Redirect to="/"></Redirect>
           </Suspense>
            {/* <Route component={Error}/> */}
           </Switch>
            </BrowserRouter> 
            </React.Fragment>
         
      )
   }     
}

export default App;
