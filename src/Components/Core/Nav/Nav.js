import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    
    
    /*
    componentDidMount(){
    
    }
    */

    


  render() {
    return ( 
      <nav>
        <a className="button">
            B
        </a>
        <h1>Web Page</h1>
        <a className="button search">
            Q
        </a>
      </nav>
    );
}
}

export default Nav;