import React, { Component } from 'react';
import Products from './Products';
import UserForm from './UserForm';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {Nav, Navbar, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {        
    return (
      <div>
        <Header />        
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render(){
    return (      
        <BrowserRouter>
          <div> 
            {/* <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                  </Navbar.Brand>
              </Navbar.Header>  
              <Nav>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/github">GitHub API</Link></NavItem>
                <NavItem><Link to="/new">New</Link></NavItem>
              </Nav>
            </Navbar>                               */}
            <Switch>   
              <Route path="/github/user/:login/:score" component={GitHubUser} />                                      */}
              <Route path="/github" component={GitHub} />              
              <Route exact path="/" component={Home} /> 
              <Route path="/new" component={New} />            
              <Route path="/*" component={NotFound} />                       
            </Switch>   
          </div>  
        </BrowserRouter>              
    )
  }
}

class Home extends Component {
  render(){
    return (
      <div>
        This is a basic React Router sample. The Github API Link takes you to a page that allows you to search by Github username.    
      </div>
    )
  }
}

class NotFound extends Component {
  render(){
    return <div>Page Not Found</div>
  }
}

class New extends Component {
  render(){
    return <div>New Page</div>
  }
}