import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'
import Student from './components/Student'
import Details from './components/Details'
import pagination1 from './components/Pagination1'
import Edit from './components/Edit'


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';
import Clock from './components/Clock';
import {MdHome,MdContacts,} from "react-icons/md";
import DropnDrag from './components/DropnDrag';
import { Ratings } from './components/Ratings';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-danger navbar-dark ">
            <div className="collapse navbar-collapse">
              
              <ul className="navbar-nav">

                
                <li className="nav-item ">
                  <NavLink to={'/about'} className="nav-link"><MdHome/>About</NavLink> 
                </li>

                <li className="nav-item">
                  <Link to={'/contact'} className="nav-link"><MdContacts/>Contacts</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Log'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reg'} className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/std'} className="nav-link">Student</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/details'} className="nav-link">GetData</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pag'} className="nav-link">pagination</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Home'} className="nav-link">validations </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/drop'} className="nav-link">Drop and drag</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/rating'} className="nav-link">Rating</Link>
                </li>
              
                
                <li className="nav-item">
                <Clock />
                </li>
                
              </ul>


              {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
              </form> */}


              </div>

           
          </nav>




          <Switch>
            <Route exact path='/Home' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/Log' component={Login} />
            <Route path='/Reg' component={Register} />
            <Route path='/std' component={Student} />
            <Route path='/details' component={Details} />
            <Route path='/pag' component={pagination1} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/drop' component={DropnDrag} />
            <Route path='/rating' component={Ratings} />
           



          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;