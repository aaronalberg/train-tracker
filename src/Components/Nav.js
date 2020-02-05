import React from 'react';
import '../App.css';

class Nav extends React.Component {
    
    
    
    componentDidMount(){
      /*  
    fetch('https://api-v3.mbta.com/predictions?filter[stop]=place-sstat&filter[direction_id]=0&include=stop')
.then(function(response) {
  console.log(response.json());
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
        
        console.log('heheheh');
        fetch('https://crossorigin.me/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&max=1&mapid=40360')
.then(function(response) {
  console.log(response.json());
    console.log('heheheh');
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
      */
        fetch('https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&max=1&mapid=40360', {mode: 'cors'})
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    console.log('Request failed', error)
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