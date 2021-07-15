
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


const ProtectedRoute = (props) =>{
  const token = localStorage.getItem("token");

  if(token){
    return  <Route  {...props} />
  }else{
  return  <Redirect to='/login' />
  }
  
  
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path='/login' component={Login} ></Route>
      <ProtectedRoute  path='/' component={Home} />
      </Switch>
     
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
