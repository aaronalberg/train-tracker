import React from 'react';
import '../App.css';

class Nav extends React.Component {
    
    
    
    componentDidMount(){
        
    fetch('http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&rt=red')
.then(function(response) {
  console.log(response.json());
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
    }

  render() {
    return( 
        <><h1>Nearby Stops {this.props.name}</h1>
      <h1>Favorite Stops</h1>
      <h1>Header</h1>
        </>
  );}
}

export default Nav;