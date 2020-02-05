import React from 'react';
import '../App.css';

class API extends React.Component {
    /*
    loadTrains = (mapID) => {
        let baseUrl = 'https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&OutputType=JSON'
        let mapID = '&mapId=' + mapID;
        let urlReady = baseUrl + mapID;
        
         
        
    }
    */

    componentDidMount() {
      console.log('hello');

      this.loadAllStations();

      
    }
        
    loadAllStations = () => {
        var allStops;

        var baseUrl = 'https://data.cityofchicago.org/resource/8pix-ypme.json?$$app_token=692XlyeDC0eiRDxUq6zwJTCe3'
        fetch(baseUrl)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          allStops = JSON.stringify(response);
          console.log('tmp is: ' + tmp);
        })
        .catch(function(error) {
            console.log('Request failed', error)
        });

        
        
    }


       
  

        /*
        var arr = [];
        for(var i = 0; i < allStops.map_id.length; i++){
         arr.push(allStops.map_id[i].address);
        }

        var sortedStopsList = arr.sort();
        var duplicatesRemoved = [];

         for (var i = 0; i < sortedStopsList.length - 1; i++) {
           if (sortedStopsList[i + 1] != sortedStopsList[i]) {
               duplicatesRemoved.push(sortedStopsList[i]);
           }
         }

         */
       

        //duplicatesRemoved should be a list of unique MAP_IDs at this point
 


        //for each train: run #, destination (dest), line, eta
        //remember return eta 0 if its due    
    fetchResponse = (url) => {
        fetch(url)
  .then(function(response) {
    return response.json();})
  .then(function(text) {console.log('Request successful', text);})
  .catch(function(error) {
    console.log('Request failed', error)
  });
    }

    render() {
    return( 
      <>
        <h1>Nearby Stops {this.props.name}</h1>
      <h1>Favorite Stops</h1>
      <h1>Header</h1>
      </>
        
  );}

    }
  

    export default API;


    