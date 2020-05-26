import React from 'react';
import '../App.css';

class API extends React.Component {

    componentDidMount() {
      let baseUrl =
          'https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&outputType=JSON'
      fetch(baseUrl + "&mapid=40380")
          .then(response => response.json())
          .then(data => console.log(data));
    }

    render() {
      return( 
        <>
        <h1 idName="TEST"></h1>
        
        </>
          
      );}

    }
  

    export default API;


    