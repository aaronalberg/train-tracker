import React from 'react';
import '../App.css';

class API extends React.Component {
    
    loadTrains = (mapID) => {
        let baseUrl = 'https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=0e726cb9cf35433f9dcdf4d34504c50f&OutputType=JSON'
        let stationID = '&mapId=' + mapID;
        let urlReady = baseUrl + stationID;
        
         
        
    }
    

    componentDidMount() {

      this.loadAllStations();

      
    }
        
    loadAllStations = () => {

      const distance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
        }
        else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          if (unit=="K") { dist = dist * 1.609344 }
          if (unit=="N") { dist = dist * 0.8684 }
          return dist;
        }
      }

      const removeDuplicates = (allStopsJson) => {

        //at this point, allStopJson has duplicates of stations.
        console.log(allStopsJson);
        //next step: remove duplicates
        var lastMapID = 1;
        var duplicatesRemoved = [];
        for (var i = 0; i < allStopsJson.length; i++) {
          if (allStopsJson[i].map_id == lastMapID) {
            continue;          
          }
          lastMapID = allStopsJson[i].map_id;
          duplicatesRemoved.push(allStopsJson[i]);
        }
        
        console.log('duplicatesremoved is:  ' + JSON.stringify(duplicatesRemoved));
        }

        const addDistanceField = (listOfStops) => {


          for (var i = 0; i < listOfStops.length; i++) {
            //listOfStops[i].distance = distance(listOfStops[i].latitude, listOfStops[i].longitude, "USER LAT", "USER LONG");
            //GET DISTANCE
          }



        }

    

        let baseUrl = 'https://data.cityofchicago.org/resource/8pix-ypme.json?$$app_token=692XlyeDC0eiRDxUq6zwJTCe3&$query='
        fetch(baseUrl).then((response) => {
          return response.json();
        })
        .then((response) => {
          var allStopsResponse = response;
          //allStopsResponse = JSON.stringify(allStopsResponse);
          //console.log(allStopsResponse);
          removeDuplicates(allStopsResponse);
        })
        .catch(function(error) {
            console.log('Request All Stops Failed', error)
        });

        

        
        /*
        var sortedStopsList = arr.sort();
        var duplicatesRemoved = [];

         for (var i = 0; i < sortedStopsList.length - 1; i++) {
           if (sortedStopsList[i + 1] != sortedStopsList[i]) {
               duplicatesRemoved.push(sortedStopsList[i]);
           }
         }
         */


        
        
    }

        //for each train: run #, destination (dest), line, eta
        //remember return eta 0 if its due    

    render() {
    return( 
      <>
      {/*  <h1>Nearby Stops {this.props.name}</h1>*/}
      {/*<h1>Favorite Stops</h1>*/}
      {/*<h1>Header</h1>*/}
      </>
        
  );}

    }
  

    export default API;


    