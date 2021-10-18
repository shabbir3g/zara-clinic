import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
 

  
  return (
    <div className="App">
      <AuthProvider>
        <Router> 
        <Header></Header>
          <Switch> 
              <Route path="/"> 
                  
              </Route>
          </Switch>
          <Footer></Footer>
        </Router> 
      </AuthProvider>
       
    </div>
  );
}

export default App;
