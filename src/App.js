import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Book from './Pages/Book/Book';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <div className="app">
    <AuthProvider>
    <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path="/tours/:id">
           <Book></Book>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
