import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {

 

  
  return (
    <div className="App">
      <AuthProvider>
        
        <Router> 
        <Header></Header>
          <Switch> 
              <Route exact path="/"> 
                  <Home></Home>
              </Route>
              <Route path="/home"> 
                  <Home></Home>
              </Route>
              <PrivateRoute path="/about"> 
                  <About></About>
              </PrivateRoute>
              <PrivateRoute path="/contact"> 
                  <Contact></Contact>
              </PrivateRoute>
              <PrivateRoute path="/services/:id"> 
                  <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/register"> 
                    <Register></Register>
              </Route>
              <Route path="/login"> 
                  <Login></Login>
              </Route>
              <Route path="*"> 
                  <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router> 
      </AuthProvider>
       
    </div>
  );
}

export default App;
