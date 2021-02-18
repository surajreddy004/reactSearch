import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
        <ul className="dropdown-menu">
            
        <li><Link to="/">Home</Link></li>
      <li><Link to="/Post">Post</Link></li>
      <li><Link to="/Profile">Profile</Link></li>
        </ul>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
    )
}

export default Header;