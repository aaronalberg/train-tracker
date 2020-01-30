import React from 'react';
import '../App.css';

class Nav extends React.Component {
    
    
    
    componentDidMount(){
        
    fetch('https://api-v3.mbta.com/predictions?filter[stop]=place-sstat&filter[direction_id]=0&include=stop')
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